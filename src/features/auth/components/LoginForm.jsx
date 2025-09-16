import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../authSlice";
import Button from "@/components/ui/Button/Button";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
      <input type="email" placeholder="Email"
        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="border p-2 rounded" />
      <input type="password" placeholder="Password"
        value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="border p-2 rounded" />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
