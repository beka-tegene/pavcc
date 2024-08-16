import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { useParams } from "react-router-dom";


const steps = [
  {
    title: "Step 2: Revenue and Employees",
    keys: [
      "revenueLastThreeYears",
      "revenueMonthlyForecastYear1",
      "revenueForecastNext5Years",
      "numberOfEmployees",
    ],
  },
  {
    title: "Step 3: Business Details",
    keys: [
      "companyHistory",
      "ownershipStructure",
      "productsServices",
      "locationFacilities",
      "managementTeam",
    ],
  },
  {
    title: "Step 4: Market and Competition",
    keys: [
      "currentCompetition",
      "futureMarkets",
      "marketSizeSegments",
      "marketTrends",
      "swotAnalysis",
      "keyCustomers",
    ],
  },
  {
    title: "Step 5: Financial Projections",
    keys: [
      "expensesForecastNext5Years",
      "expensesMonthlyForecastYear1",
      "forecastedNetProfitNext5Years",
      "keyForecastAssumptions",
      "projectedBalanceSheet",
      "projectedProfitLoss",
    ],
  },
  {
    title: "Step 6: Operations and Technology",
    keys: [
      "technology",
      "equipmentTools",
      "regulatoryRequirement",
      "riskMitigation",
    ],
  },
  {
    title: "Step 7: Milestones and Metrics",
    keys: ["keyMilestones", "keyMetrics"],
  },
  {
    title: "Step 8: Financial Forecasts",
    keys: ["expectedReturn"],
  },
  {
    title: "Step 9: Investment Details",
    keys: [
      "typeOfFundingRequested",
      "useOfFunds",
      "stageOfInvestment",
      "willingToAllocateEquityToPAVCC",
      "willingForFinancialManagementOversight",
    ],
  },
  {
    title: "Step 10: Contact Information",
    keys: ["contactInformation"],
  },
  {
    title: "Step 11: Review and Submit",
    keys: ["reviewAndEditAgreed", "status"],
  },
];

const labels = {
  advantageOverCompetition: "Advantage Over Competition",
  advisors: "Advisors",
  barriersToEntry: "Barriers to Entry",
  companyHistory: "Company History",
  currentCompetition: "Current Competition",
  equipmentTools: "Equipment & Tools",
  exitStrategy: "Exit Strategy",
  expectedReturn: "Expected Return",
  expensesForecastNext5Years: "Expenses Forecast (Next 5 Years)",
  expensesMonthlyForecastYear1: "Expenses Monthly Forecast (Year 1)",
  forecastedNetProfitNext5Years: "Forecasted Net Profit (Next 5 Years)",
  futureMarkets: "Future Markets",
  intellectualProperty: "Intellectual Property",
  isApplication: "Application Status",
  keyForecastAssumptions: "Key Forecast Assumptions",
  keyCustomers: "Key Customers",
  keyMetrics: "Key Metrics",
  keyMilestones: "Key Milestones",
  legalDocuments: "Legal Documents",
  legalStatus: "Legal Status",
  locationFacilities: "Location & Facilities",
  managementTeam: "Management Team",
  marketSizeSegments: "Market Size & Segments",
  marketTrends: "Market Trends",
  numberOfEmployees: "Number of Employees",
  ownershipStructure: "Ownership Structure",
  productsServices: "Products & Services",
  projectedBalanceSheet: "Projected Balance Sheet",
  projectedProfitLoss: "Projected Profit & Loss",
  regulatoryRequirement: "Regulatory Requirement",
  revenueForecastNext5Years: "Revenue Forecast (Next 5 Years)",
  revenueLastThreeYears: "Revenue (Last 3 Years)",
  revenueMonthlyForecastYear1: "Revenue Monthly Forecast (Year 1)",
  reviewAndEditAgreed: "Review and Edit Agreed",
  riskMitigation: "Risk Mitigation",
  stageOfInvestment: "Stage of Investment",
  status: "Status",
  swotAnalysis: "SWOT Analysis",
  technology: "Technology",
  typeOfFundingRequested: "Type of Funding Requested",
  useOfFunds: "Use of Funds",
  willingForFinancialManagementOversight:
    "Willing for Financial Management Oversight",
  willingToAllocateEquityToPAVCC: "Willing to Allocate Equity to PAVCC",
  yearsInBusiness: "Years in Business",
};



export const IdeaDetails = () => {
  const { id } = useParams();
  const [ideaById, setIdeaById] = useState(null);
  useEffect(() => {
    fetchIdeasById();
  }, []);

  const fetchIdeasById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4500/api/v1/ent/entrepreneurs/${id}`
      );
      const entrepreneur = response.data.entrepreneur;
      setIdeaById(entrepreneur);
    } catch (error) {
      console.error("Error fetching idea details:", error);
    }
  };

  const renderDownloadLinks = (items) => {
    if (!items || !items.length) return null;
    return items.map((item, index) => (
      <div key={index} className="flex items-center space-x-2">
        <a
          href={item}
          download
          className="text-blue-600 hover:underline flex items-center space-x-2"
        >
          <AiOutlineDownload />
          <span>Download</span>
        </a>
      </div>
    ));
  };

  if (!ideaById) {
    return <p>Loading...</p>;
  }


  return (
    <div className="p-6">
      <div
        className={`bg-white shadow-lg rounded-lg p-6 border-t-[3px] ${
          ideaById?.status === "Approved"
            ? "border-[#15803D]"
            : ideaById?.status === "Pending"
            ? "border-yellow-500"
            : "border-red-700"
        }`}
      >
        <h1 className="text-3xl font-bold mb-4">{ideaById?.businessSector}</h1>
        <p className="text-gray-700 mb-2">
          <strong>Problem Solved:</strong> {ideaById?.problemSolved}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Solution:</strong> {ideaById?.solution}
        </p>
        <p className="text-gray-900 font-medium mb-2">
          <strong>Amount Required:</strong> ${ideaById?.investmentNeededUSD}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Application Date:</strong>{" "}
          {new Date(ideaById?.applicationDate).toLocaleDateString()}
        </p>
        {steps.map((step, stepIndex) => (
          <div key={stepIndex} className="border-t border-gray-200 pt-4">
            <h2 className="text-2xl font-semibold mb-4">{step.title}</h2>
            <div className="space-y-4">
              {step.keys.map((key) => (
                <div key={key} className="flex flex-col space-y-1">
                  <strong className="text-gray-900">
                    {labels[key] ||
                      key.charAt(0).toUpperCase() +
                        key
                          .slice(1)
                          .replace(/([A-Z])/g, " $1")
                          .trim()}
                    :
                  </strong>
                  {Array.isArray(ideaById[key]) ? (
                    renderDownloadLinks(ideaById[key])
                  ) : (
                    <p className="text-gray-700">{ideaById[key]}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
