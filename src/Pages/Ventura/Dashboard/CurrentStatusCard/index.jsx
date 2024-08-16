import React from "react";

const CurrentStatusCard = ({ title, status, description, bgColor }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg p-4 border ${bgColor}`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className={`text-lg font-bold mb-4 ${status === 'active' ? 'text-green-500' : 'text-red-500'}`}>
        {status === 'active' ? 'Active' : 'Inactive'}
      </p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default CurrentStatusCard;
