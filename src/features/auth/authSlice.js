import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "@/api/authApi";

export const login = createAsyncThunk("auth/login", async (credentials) => {
  const { data } = await loginApi(credentials);
  return data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null, loading: false },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => { state.loading = true; });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    });
    builder.addCase(login.rejected, (state) => { state.loading = false; });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
