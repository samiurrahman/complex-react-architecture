import React from "react";
import { useSelector } from "react-redux";

const DashboardStats = () => {
  const stats = useSelector((state) => state.dashboard.stats);
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Dashboard Stats</h3>
      <pre>{JSON.stringify(stats, null, 2)}</pre>
    </div>
  );
};

export default DashboardStats;
