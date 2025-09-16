import React from "react";
import DashboardStats from "../components/DashboardStats";
import MainLayout from "@/layouts/MainLayout";

const DashboardPage = () => (
  <MainLayout>
    <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
    <DashboardStats />
  </MainLayout>
);

export default DashboardPage;
