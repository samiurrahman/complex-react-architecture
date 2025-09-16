import React from "react";
import LoginForm from "../components/LoginForm";
import AuthLayout from "@/layouts/AuthLayout";

const LoginPage = () => (
  <AuthLayout>
    <h2 className="text-2xl font-bold mb-4">Login</h2>
    <LoginForm />
  </AuthLayout>
);

export default LoginPage;
