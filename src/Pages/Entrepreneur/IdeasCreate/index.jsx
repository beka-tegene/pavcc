import { useForm } from "react-hook-form";
import { FileInput } from "../../../Components/FIleInput";
import { SelectInput } from "../../../Components/SelectInput";
import { TextInput } from "../../../Components/TextInput";
import { useState } from "react";
import { ButtonUi } from "../../../Components/Button";
import { Textarea } from "../../../Components/Textarea";
import { CheckboxInput } from "../../../Components/CheckboxInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { back_base_url } from "../../../Lib/config";
const businessSectors = [
  { value: "Agriculture", label: "Agriculture" },
  { value: "Agro-processing", label: "Agro-processing" },
  { value: "Ecommerce", label: "Ecommerce" },
  { value: "Education", label: "Education" },
  { value: "Health", label: "Health" },
  { value: "Manufacturing", label: "Manufacturing" },
  { value: "Mining", label: "Mining" },
  { value: "Retail", label: "Retail" },
  { value: "Service", label: "Service (Specify)" },
  { value: "Technology", label: "Technology" },
  { value: "Transportation", label: "Transportation" },
  { value: "Other", label: "Other (Specify)" },
];

const legalStatuses = [
  { value: "Not Incorporated Yet", label: "Not Incorporated Yet" },
  { value: "Sole Proprietor", label: "Sole Proprietor" },
  { value: "Private Corporation", label: "Private Corporation" },
  { value: "Public Corporation", label: "Public Corporation" },
  { value: "Partnership", label: "Partnership" },
  { value: "Joint Venture", label: "Joint Venture" },
  { value: "Other", label: "Other (Specify)" },
];

const stagesOfInvestment = [
  { value: "Seed Funding", label: "Seed Funding" },
  { value: "Series A", label: "Series A" },
  { value: "Series B", label: "Series B" },
  { value: "Series C", label: "Series C" },
  { value: "Pre IPO", label: "Pre IPO" },
];

const fundingTypes = [
  { value: "Equity", label: "Equity" },
  { value: "Convertible Note", label: "Convertible Note" },
  { value: "Other", label: "Other (Specify)" },
];

export const IdeasCreate = () => {
  const navigate = useNavigate()
  const { control, handleSubmit } = useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [submissionStatus, setSubmissionStatus] = useState("");

  const steps = [
    {
      title: "Step 1: Business Information",
      fields: [
        {
          component: SelectInput,
          label: "Business Sector",
          name: "businessSector",
          options: businessSectors, // Ensure this is defined elsewhere
          rules: { required: "Business Sector is required" },
        },
        {
          component: SelectInput,
          label: "Legal Status of the Business",
          name: "legalStatus",
          options: legalStatuses, // Ensure this is defined elsewhere
          rules: { required: "Legal Status is required" },
        },
        {
          component: FileInput,
          label: "Attach Available Legal Documents",
          name: "legalDocuments",
        },
        {
          component: TextInput,
          label: "Number of Years in Business",
          name: "yearsInBusiness",
          type: "number",
          rules: { required: "Number of Years in Business is required" },
        },
      ],
    },
    {
      title: "Step 2: Revenue and Employees",
      fields: [
        {
          component: TextInput,
          label: "Revenue Last Three Years (Year 1)",
          name: "revenueLastThreeYears[0]",
          type: "number",
        },
        {
          component: TextInput,
          label: "Revenue Last Three Years (Year 2)",
          name: "revenueLastThreeYears[1]",
          type: "number",
        },
        {
          component: TextInput,
          label: "Revenue Last Three Years (Year 3)",
          name: "revenueLastThreeYears[2]",
          type: "number",
        },
        {
          component: TextInput,
          label: "Number of Existing Employees",
          name: "numberOfEmployees",
          type: "number",
        },
      ],
    },
    {
      title: "Step 3: Business Details",
      fields: [
        {
          component: Textarea,
          label: "Problem Your Business Will Solve",
          name: "problemSolved",
          rows: 3,
        },
        {
          component: Textarea,
          label: "Your Solution",
          name: "solution",
          rows: 3,
        },
        {
          component: Textarea,
          label: "SWOT Analysis",
          name: "swotAnalysis",
          rows: 3,
        },
        {
          component: Textarea,
          label: "Market Size and Segments",
          name: "marketSizeSegments",
          rows: 3,
        },
      ],
    },
    {
      title: "Step 4: Market and Competition",
      fields: [
        {
          component: Textarea,
          label: "Key Customers",
          name: "keyCustomers",
          rows: 3,
        },
        {
          component: Textarea,
          label: "Barriers to Entry",
          name: "barriersToEntry",
          rows: 3,
        },
        {
          component: Textarea,
          label: "Risk Mitigation",
          name: "riskMitigation",
          rows: 3,
        },
        {
          component: Textarea,
          label: "Future Markets",
          name: "futureMarkets",
          rows: 3,
        },
      ],
    },
    {
      title: "Step 5: Financial Projections",
      fields: [
        {
          component: Textarea,
          label: "Market Trends",
          name: "marketTrends",
          rows: 3,
        },
        {
          component: Textarea,
          label: "Current Competition",
          name: "currentCompetition",
          rows: 3,
        },
        {
          component: Textarea,
          label: "Your Advantage from Competition",
          name: "advantageOverCompetition",
          rows: 3,
        },
        {
          component: Textarea,
          label: "Company History",
          name: "companyHistory",
          rows: 3,
        },
      ],
    },
    {
      title: "Step 6: Operations and Technology",
      fields: [
        {
          component: Textarea,
          label: "Location and Facilities",
          name: "locationFacilities",
          rows: 3,
        },
        {
          component: Textarea,
          label: "Technology",
          name: "technology",
          rows: 3,
        },
        {
          component: Textarea,
          label: "Equipment & Tools",
          name: "equipmentTools",
          rows: 3,
        },
        {
          component: Textarea,
          label: "Intellectual Property",
          name: "intellectualProperty",
          rows: 3,
        },
      ],
    },
    {
      title: "Step 7: Milestones and Metrics",
      fields: [
        {
          component: Textarea,
          label: "Key Milestones",
          name: "keyMilestones",
          rows: 3,
        },
        {
          component: Textarea,
          label: "Key Metrics",
          name: "keyMetrics",
          rows: 3,
        },
        {
          component: Textarea,
          label: "Ownership & Structure",
          name: "ownershipStructure",
          rows: 3,
        },
        {
          component: Textarea,
          label: "Management Team",
          name: "managementTeam",
          rows: 3,
        },
      ],
    },
    {
      title: "Step 8: Financial Forecasts",
      fields: [
        {
          component: Textarea,
          label: "Advisors",
          name: "advisors",
          rows: 3,
        },
        {
          component: Textarea,
          label: "Key Forecast Assumptions",
          name: "keyForecastAssumptions",
          rows: 3,
        },
        {
          component: TextInput,
          label: "Revenue Monthly Forecast Year 1",
          name: "revenueMonthlyForecastYear1",
          type: "number",
        },
        {
          component: TextInput,
          label: "Revenue Forecast Next 5 Years (Year 1)",
          name: "revenueForecastNext5Years[0]",
          type: "number",
        },
        {
          component: TextInput,
          label: "Revenue Forecast Next 5 Years (Year 2)",
          name: "revenueForecastNext5Years[1]",
          type: "number",
        },
        {
          component: TextInput,
          label: "Revenue Forecast Next 5 Years (Year 3)",
          name: "revenueForecastNext5Years[2]",
          type: "number",
        },
        {
          component: TextInput,
          label: "Revenue Forecast Next 5 Years (Year 4)",
          name: "revenueForecastNext5Years[3]",
          type: "number",
        },
        {
          component: TextInput,
          label: "Revenue Forecast Next 5 Years (Year 5)",
          name: "revenueForecastNext5Years[4]",
          type: "number",
        },
        {
          component: TextInput,
          label: "Expenses Monthly Forecast Year 1",
          name: "expensesMonthlyForecastYear1",
          type: "number",
        },
        {
          component: TextInput,
          label: "Expenses Forecast Next 5 Years (Year 1)",
          name: "expensesForecastNext5Years[0]",
          type: "number",
        },
        {
          component: TextInput,
          label: "Expenses Forecast Next 5 Years (Year 2)",
          name: "expensesForecastNext5Years[1]",
          type: "number",
        },
        {
          component: TextInput,
          label: "Expenses Forecast Next 5 Years (Year 3)",
          name: "expensesForecastNext5Years[2]",
          type: "number",
        },
        {
          component: TextInput,
          label: "Expenses Forecast Next 5 Years (Year 4)",
          name: "expensesForecastNext5Years[3]",
          type: "number",
        },
        {
          component: TextInput,
          label: "Expenses Forecast Next 5 Years (Year 5)",
          name: "expensesForecastNext5Years[4]",
          type: "number",
        },
        {
          component: TextInput,
          label: "Forecasted Net Profit (or Loss) Next 5 Years (Year 1)",
          name: "forecastedNetProfitNext5Years[0]",
          type: "number",
        },
        {
          component: TextInput,
          label: "Forecasted Net Profit (or Loss) Next 5 Years (Year 2)",
          name: "forecastedNetProfitNext5Years[1]",
          type: "number",
        },
        {
          component: TextInput,
          label: "Forecasted Net Profit (or Loss) Next 5 Years (Year 3)",
          name: "forecastedNetProfitNext5Years[2]",
          type: "number",
        },
        {
          component: TextInput,
          label: "Forecasted Net Profit (or Loss) Next 5 Years (Year 4)",
          name: "forecastedNetProfitNext5Years[3]",
          type: "number",
        },
        {
          component: TextInput,
          label: "Forecasted Net Profit (or Loss) Next 5 Years (Year 5)",
          name: "forecastedNetProfitNext5Years[4]",
          type: "number",
        },
        {
          component: TextInput,
          label: "Amount of Investment Needed (in USD)",
          name: "investmentNeededUSD",
          type: "number",
          rules: { required: "Investment Amount is required" },
        },
      ],
    },
    {
      title: "Step 9: Investment Details",
      fields: [
        {
          component: SelectInput,
          label: "Stage of Investment",
          name: "stageOfInvestment",
          options: stagesOfInvestment,
          rules: { required: "Investment Stage is required" },
        },
        {
          component: SelectInput,
          label: "Type of Funding Requested",
          name: "typeOfFundingRequested",
          options: fundingTypes,
          rules: { required: "Funding Type is required" },
        },
        {
          component: Textarea,
          label: "Use of Funds",
          name: "useOfFunds",
          rows: 3,
        },
        {
          component: Textarea,
          label: "Exit Strategy",
          name: "exitStrategy",
          rows: 3,
        },
        {
          component: Textarea,
          label: "Expected Return",
          name: "expectedReturn",
          rows: 3,
        },
        {
          component: Textarea,
          label: "Regulatory Requirement",
          name: "regulatoryRequirement",
          rows: 3,
        },
      ],
    },

    {
      title: "Step 10: Financial Documents and Final Agreements",
      fields: [
        {
          component: FileInput,
          label: "Statement: Projected Profit and Loss",
          name: "projectedProfitLoss",
          rules: {
            required: "Projected Profit and Loss statement is required",
          },
        },
        {
          component: FileInput,
          label: "Statement: Projected Balance Sheet",
          name: "projectedBalanceSheet",
          rules: { required: "Projected Balance Sheet is required" },
        },
        {
          component: FileInput,
          label: "Statement: Cash Flow",
          name: "cashFlowStatement",
          rules: { required: "Cash Flow statement is required" },
        },
        {
          component: CheckboxInput,
          label:
            "If successfully Funded Through PAVCC, are you willing to allocate 5% Equity to PAVCC?",
          name: "willingToAllocateEquityToPAVCC",
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
          rules: {
            required: "Please indicate your willingness to allocate equity",
          },
        },
        {
          component: CheckboxInput,
          label:
            "If successfully Funded Through PAVCC, are you willing to Allow PAVCC Financial Management Oversight by assigning an PAVCC Auditor or a CFO?",
          name: "willingForFinancialManagementOversight",
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
          rules: {
            required: "Please indicate your willingness to allow oversight",
          },
        },
        {
          component: CheckboxInput,
          label: "Terms and Conditions",
          name: "agreeTermsAndConditions",
          options: [
            {
              value: "agree",
              label: "I have read and agree to the Terms and Conditions",
            },
          ],
          rules: {
            required: "You must agree to the terms and conditions to proceed",
          },
        },
      ],
    },

    {
      title: "Step 11: Review and Submit",
      fields: [
        {
          component: TextInput,
          label: "Name",
          name: "applicantName",
          type: "text",
          rules: { required: "Your name is required" },
        },
        {
          component: TextInput,
          label: "Date",
          name: "deadline",
          type: "date",
          rules: { required: "Date of submission is required" },
        },
        {
          component: CheckboxInput,
          label: "Review and Edit Application",
          name: "reviewAndEditAgreed",
          options: [
            {
              value: "agree",
              label:
                "I have reviewed and confirm that the information provided is accurate",
            },
          ],
          rules: {
            required: "You must review your application before submission",
          },
        },
      ],
    },
  ];

  const onNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const onPrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };
  const token = localStorage.getItem("token");
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((item) => formData.append(key, item));
        } else {
          formData.append(key, value);
        }
      });
      if (data.legalDocuments) {
        formData.append("legalDocuments", data.legalDocuments[0]);
      }
      if (data.projectedProfitLoss) {
        formData.append("projectedProfitLoss", data.projectedProfitLoss[0]);
      }
      if (data.projectedBalanceSheet) {
        formData.append("projectedBalanceSheet", data.projectedBalanceSheet[0]);
      }
      if (data.cashFlowStatement) {
        formData.append("cashFlowStatement", data.cashFlowStatement[0]);
      }

      const response = await axios.post(
        `${back_base_url}/api/v1/ent/entrepreneurs`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(response.data.message);
      navigate('/entrepreneur/ideas')
      setSubmissionStatus("Application submitted successfully!");
    } catch (error) {
      console.error(error);
      setSubmissionStatus("Submission failed. Please try again.");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto rounded-lg">
      <h1 className="text-2xl font-bold mb-4">
        Entrepreneur Online Application Form
      </h1>
      {submissionStatus && (
        <div className="mb-4 p-4 bg-green-100 text-green-800 border border-green-300 rounded">
          {submissionStatus}
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-[#f5f5f5] p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-xl font-bold mb-4">{steps[currentStep].title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {steps[currentStep].fields.map(
            ({ component: Component, ...field }) => (
              <Component key={field.name} control={control} {...field} />
            )
          )}
        </div>

        <div className="flex justify-between">
          <ButtonUi
            label="Previous"
            type="button"
            className="bg-gray-500 hover:bg-gray-600 text-white px-10 py-2"
            onClick={onPrev}
            disabled={currentStep > 0 ? false : true}
          />
          {currentStep < steps.length - 1 ? (
            <ButtonUi
              label="Next"
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-2"
              onClick={onNext}
            />
          ) : (
            <ButtonUi
              label="Submit"
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-10 py-2"
            />
          )}
        </div>
      </form>
    </div>
  );
};
