import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const MainLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1 p-6">{children}</main>
    <Footer />
  </div>
);

export default MainLayout;
