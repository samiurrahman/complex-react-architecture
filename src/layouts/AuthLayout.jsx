import React from "react";
import Footer from "@/components/layout/Footer";

const AuthLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen items-center justify-center bg-gray-50">
    <main className="bg-white p-6 rounded shadow">{children}</main>
    <Footer />
  </div>
);

export default AuthLayout;
