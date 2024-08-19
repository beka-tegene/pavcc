import React, { useEffect, useState } from "react";
import { FilterBySelect } from "../../../Components/FilterBySelect";
import { useNavigate } from "react-router-dom";
import { Pagination } from "../../../Components/Pagination";
import { FaFileAlt } from "react-icons/fa";
import axios from "axios";

export const StartProcess = () => {
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
  // const ideas = [
  //   {
  //     title: "Agriculture Platform",
  //     businessSector: "Agriculture",
  //     legalStatus: "Private Corporation",
  //     yearsInBusiness: 5,
  //     problem: "Inefficiencies in the supply chain of agricultural products.",
  //     solution: "Online platform connecting farmers directly with retailers.",
  //     investmentNeeded: "$2,000,000",
  //     fundingStage: "Series A",
  //     attachments: ["Legal Documents", "Projected Profit and Loss Statement"],
  //     submissionDate: "August 15, 2024",
  //   },
  //   {
  //     title: "Agriculture Platform",
  //     businessSector: "Agriculture",
  //     legalStatus: "Private Corporation",
  //     yearsInBusiness: 5,
  //     problem: "Inefficiencies in the supply chain of agricultural products.",
  //     solution: "Online platform connecting farmers directly with retailers.",
  //     investmentNeeded: "$2,000,000",
  //     fundingStage: "Series A",
  //     attachments: ["Legal Documents", "Projected Profit and Loss Statement"],
  //     submissionDate: "August 15, 2024",
  //   },
  // ];
  const handleFilterChange = (name, value, c) => {
    console.log(`Filter changed: ${name} = ${value} ${c}`);
    // Add logic to handle the filter change
  };
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/ventura/start-process/${id}`);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const totalPages = 20;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (size) => {
    setPageSize(size);
    setCurrentPage(1);
  };
  const [ideas, setIdea] = useState([]);
  useEffect(() => {
    fetchIdeas();
  }, []);
  const token = localStorage.getItem("token");
  const fetchIdeas = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4500/api/v1/ent/filter/entrepreneurs/in-progress`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIdea(response?.data?.entrepreneurs);
      console.log(response);
    } catch (error) {
      console.error("Error fetching idea details:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-6 h-full">
      <h1 className="text-xl font-semibold">All Ideas</h1>
      <FilterBySelect filters={filters} onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
        {ideas?.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-6 mb-4 border-t-[3px] border-[#15803D] cursor-pointer"
            onClick={() => handleCardClick(item._id)}
          >
           <div className="flex items-center justify-between mb-1">
              <div>
                <h2 className="text-lg font-semibold">{item.businessSector}</h2>
                <p className="text-gray-600">
                   {item.legalStatus} •{" "}
                  {item.yearsInBusiness} Years in Business
                </p>
              </div>
              <div className="text-blue-500">
                <i className="fas fa-check-circle"></i>
              </div>
            </div>

            <div className="mb-1">
              <h3 className="font-medium mb-2">Overview</h3>
              <p className="text-sm">
                <strong>Problem:</strong> {item.problemSolved}
              </p>
              <p className="text-sm">
                <strong>Solution:</strong> {item.solution}
              </p>
            </div>

            <div className="mb-1">
              <h3 className="font-medium mb-2">Investment Summary</h3>
              <p className="text-sm">
                <strong>Amount Needed:</strong> {item.investmentNeededUSD}
              </p>
              <p className="text-sm">
                <strong>Stage of Investment:</strong> {item.stageOfInvestment}
              </p>
            </div>

            <div className="flex items-center justify-between mt-1">
              <p className="text-sm text-gray-600">
                Submitted on{" "}
                {new Date(item?.applicationDate).toLocaleDateString()}
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
