import React from "react";

const IdeaCard = ({ idea, onClick }) => {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300 border-t-[3px] ${
        idea?.status === "Approved"
          ? "border-[#15803D]"
          : idea?.status === "Pending"
          ? "border-yellow-500"
          : "border-red-700"
      } `}
      onClick={() => onClick(idea._id)}
    >
      <h1 className="text-2xl font-bold mb-4">{idea?.businessSector}</h1>
      <p className="text-gray-700 mb-2">
        <strong>Problem Solved:</strong> {idea?.problemSolved}
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Solution:</strong> {idea?.solution}
      </p>
      <p className="text-gray-900 font-medium mb-2">
        <strong>Amount Required:</strong> ${idea?.investmentNeededUSD}
      </p>
      <p className="text-gray-600 mb-4">
        <strong>Application Date:</strong>{" "}
        {new Date(idea?.applicationDate).toLocaleDateString()}
      </p>
      <span className="text-blue-500 hover:underline">View Details</span>
    </div>
  );
};

export default IdeaCard;
