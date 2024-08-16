import React from "react";

export const SummaryCard = ({ title, value, icon, bgColor = "bg-blue-500" }) => {
  return (
    <div className="p-4 rounded-lg shadow flex items-center justify-between bg-white">
      <div className="flex items-center">
        <div className={`p-3 rounded-full ${bgColor} text-white`}>
          {icon}
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div> 
    </div>
  );
};
