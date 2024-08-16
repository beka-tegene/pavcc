import React, { useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import { FilterBySelect } from "../../../Components/FilterBySelect";
import { Pagination } from "../../../Components/Pagination";
import { useNavigate } from "react-router-dom";

export const StartedProcess = () => {
  const navigate = useNavigate();
  const ideas = [
    {
      title: "Agriculture Platform",
      businessSector: "Agriculture",
      legalStatus: "Private Corporation",
      yearsInBusiness: 5,
      problem: "Inefficiencies in the supply chain of agricultural products.",
      solution: "Online platform connecting farmers directly with retailers.",
      investmentNeeded: "$2,000,000",
      fundingStage: "Series A",
      attachments: ["Legal Documents", "Projected Profit and Loss Statement"],
      submissionDate: "August 15, 2024",
    },
    {
      title: "Agriculture Platform",
      businessSector: "Agriculture",
      legalStatus: "Private Corporation",
      yearsInBusiness: 5,
      problem: "Inefficiencies in the supply chain of agricultural products.",
      solution: "Online platform connecting farmers directly with retailers.",
      investmentNeeded: "$2,000,000",
      fundingStage: "Series A",
      attachments: ["Legal Documents", "Projected Profit and Loss Statement"],
      submissionDate: "August 15, 2024",
    },
    {
      title: "Agriculture Platform",
      businessSector: "Agriculture",
      legalStatus: "Private Corporation",
      yearsInBusiness: 5,
      problem: "Inefficiencies in the supply chain of agricultural products.",
      solution: "Online platform connecting farmers directly with retailers.",
      investmentNeeded: "$2,000,000",
      fundingStage: "Series A",
      attachments: ["Legal Documents", "Projected Profit and Loss Statement"],
      submissionDate: "August 15, 2024",
    },
  ];
  const filters = [
    {
      label: "Industry",
      name: "industry",
      options: [
        { label: "Technology", value: "technology" },
        { label: "Healthcare", value: "healthcare" },
        { label: "Education", value: "education" },
      ],
    },
    {
      label: "Amount Required",
      name: "amountRequired",
      options: [
        { label: "$0 - $100,000", value: "0-100000" },
        { label: "$100,000 - $500,000", value: "100000-500000" },
        { label: "$500,000 - $1,000,000", value: "500000-1000000" },
      ],
    },
    {
      label: "Deadline",
      name: "deadline",
      options: [
        { label: "Next 30 days", value: "30-days" },
        { label: "Next 90 days", value: "90-days" },
        { label: "Next 6 months", value: "6-months" },
      ],
    },
    {
      label: "Status",
      name: "status",
      options: [
        { label: "Open", value: "open" },
        { label: "Closed", value: "closed" },
        { label: "In Progress", value: "in-progress" },
      ],
    },
    {
      label: "Posted Date",
      name: "postedDate",
      options: [
        { label: "Last 7 days", value: "7-days" },
        { label: "Last 30 days", value: "30-days" },
        { label: "Last 6 months", value: "6-months" },
        { label: "All Time", value: "all-time" },
      ],
    },
  ];

  const handleFilterChange = (name, value, c) => {
    console.log(`Filter changed: ${name} = ${value} ${c}`);
    // Add logic to handle the filter change
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const totalPages = 20;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (size) => {
    setPageSize(size);
    setCurrentPage(1); // Reset to first page
  };
  return (
    <div className="p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold ">Start Process</h1>
        <h1 className="font-semibold">
          5 Process stared with Venture Capitalist
        </h1>
      </div>
      <FilterBySelect filters={filters} onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {ideas.map((idea, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-6 mb-4 cursor-pointer border-t-[3px] border-[#15803D]"
            onClick={() => navigate(`/admin/start-process/1`)}
          >
            <div className="flex items-center justify-between mb-1">
              <div>
                <h2 className="text-lg font-semibold">{idea.title}</h2>
                <p className="text-gray-600">
                  {idea.businessSector} • {idea.legalStatus} •{" "}
                  {idea.yearsInBusiness} Years in Business
                </p>
              </div>
              <div className="text-blue-500">
                <i className="fas fa-check-circle"></i>
              </div>
            </div>

            <div className="mb-1">
              <h3 className="font-medium mb-2">Overview</h3>
              <p className="text-sm">
                <strong>Problem:</strong> {idea.problem}
              </p>
              <p className="text-sm">
                <strong>Solution:</strong> {idea.solution}
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-1">Luis Gomez</h4>
              <p className="text-gray-700 mb-1 text-sm">
                Languages: English (native), French (fluent)
              </p>
              <p className="text-gray-700 mb-1 text-sm">
                Experience: Medical Interpreter at HealthCorp
              </p>
              <p className="text-gray-700 mb-1 text-sm">
                Availability: Tuesday, Thursday, Saturday from 10:00 AM to 04:00
                PM
              </p>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
      />
    </div>
  );
};
