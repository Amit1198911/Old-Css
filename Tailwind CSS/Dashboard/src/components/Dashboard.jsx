import React from "react";
import DashBoardCard from "./DashBoardCard";

const Dashboard = () => {
  return (
    <div className="w-full relative flex flex-col  bg-gray-800">
      {/* Top Section */}
      <div className="h-72 flex align-top flex-col text-center bg-slate-900 rounded-b-[60px] text-white relative">
        <h3 className="font-medium text-xl mt-12">Welcome Back,</h3>
        <h1 className="font-bold text-4xl">Dilip's Dashboard</h1>
      </div>

      {/* Overlapping DashBoardCard */}
      <div className="relative -mt-32">
        <DashBoardCard className="w-full" />
      </div>
    </div>
  );
};

export default Dashboard;
