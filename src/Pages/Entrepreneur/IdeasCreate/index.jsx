import { useForm } from "react-hook-form";
import { FileInput } from "../../../Components/FIleInput";
import { SelectInput } from "../../../Components/SelectInput";
import { TextInput } from "../../../Components/TextInput";
import { useState } from "react";
import { ButtonUi } from "../../../Components/Button";
import { Textarea } from "../../../Components/Textarea";
import { CheckboxInput } from "../../../Components/CheckboxInput";
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
          label: "Attach Identification Documents",
          name: "idDocuments",
          rules: { required: "Identification document is required" },
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
          name: "revenueYear1",
          type: "number",
        },
        {
          component: TextInput,
          label: "Revenue Last Three Years (Year 2)",
          name: "revenueYear2",
          type: "number",
        },
        {
          component: TextInput,
          label: "Revenue Last Three Years (Year 3)",
          name: "revenueYear3",
          type: "number",
        },
        {
          component: TextInput,
          label: "Number of Existing Employees",
          name: "employees",
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
          name: "problem",
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
          name: "marketSize",
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
          name: "advantage",
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
          name: "forecastAssumptions",
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
          name: "revenueYear1",
          type: "number",
        },
        {
          component: TextInput,
          label: "Revenue Forecast Next 5 Years (Year 2)",
          name: "revenueYear2",
          type: "number",
        },
        {
          component: TextInput,
          label: "Revenue Forecast Next 5 Years (Year 3)",
          name: "revenueYear3",
          type: "number",
        },
        {
          component: TextInput,
          label: "Revenue Forecast Next 5 Years (Year 4)",
          name: "revenueYear4",
          type: "number",
        },
        {
          component: TextInput,
          label: "Revenue Forecast Next 5 Years (Year 5)",
          name: "revenueYear5",
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
          name: "expensesYear1",
          type: "number",
        },
        {
          component: TextInput,
          label: "Expenses Forecast Next 5 Years (Year 2)",
          name: "expensesYear2",
          type: "number",
        },
        {
          component: TextInput,
          label: "Expenses Forecast Next 5 Years (Year 3)",
          name: "expensesYear3",
          type: "number",
        },
        {
          component: TextInput,
          label: "Expenses Forecast Next 5 Years (Year 4)",
          name: "expensesYear4",
          type: "number",
        },
        {
          component: TextInput,
          label: "Expenses Forecast Next 5 Years (Year 5)",
          name: "expensesYear5",
          type: "number",
        },
        {
          component: TextInput,
          label: "Forecasted Net Profit (or Loss) Next 5 Years (Year 1)",
          name: "netProfitYear1",
          type: "number",
        },
        {
          component: TextInput,
          label: "Forecasted Net Profit (or Loss) Next 5 Years (Year 2)",
          name: "netProfitYear2",
          type: "number",
        },
        {
          component: TextInput,
          label: "Forecasted Net Profit (or Loss) Next 5 Years (Year 3)",
          name: "netProfitYear3",
          type: "number",
        },
        {
          component: TextInput,
          label: "Forecasted Net Profit (or Loss) Next 5 Years (Year 4)",
          name: "netProfitYear4",
          type: "number",
        },
        {
          component: TextInput,
          label: "Forecasted Net Profit (or Loss) Next 5 Years (Year 5)",
          name: "netProfitYear5",
          type: "number",
        },
        {
          component: TextInput,
          label: "Amount of Investment Needed (in USD)",
          name: "investmentAmount",
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
          label: "Type of Funding Requested",
          name: "fundingType",
          options: fundingTypes,
          rules: { required: "Funding Type is required" },
        },
        {
          component: Textarea,
          label: "Specify Funding Type (if 'Other')",
          name: "fundingTypeSpecify",
          rows: 3,
          rules: {
            validate: (value, { fundingType }) =>
              fundingType !== "Other" ||
              value.trim().length > 0 ||
              "Specify funding type if 'Other' is selected",
          },
        },
        {
          component: Textarea,
          label: "Investment Plan",
          name: "investmentPlan",
          rows: 3,
          rules: { required: "Investment Plan is required" },
        },
        {
          component: TextInput,
          label: "Amount of Investment Needed (in USD)",
          name: "investmentAmount",
          type: "number",
          rules: { required: "Investment Amount is required" },
        },
      ],
    },
    {
      title: "Step 10: Contact Information",
      fields: [
        {
          component: TextInput,
          label: "Primary Contact Name",
          name: "contactName",
          rules: { required: "Primary Contact Name is required" },
        },
        {
          component: TextInput,
          label: "Primary Contact Email",
          name: "contactEmail",
          type: "email",
          rules: {
            required: "Primary Contact Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          },
        },
        {
          component: TextInput,
          label: "Primary Contact Phone",
          name: "contactPhone",
          type: "tel",
          rules: { required: "Primary Contact Phone is required" },
        },
        {
          component: Textarea,
          label: "Additional Comments",
          name: "comments",
          rows: 3,
        },
      ],
    },
    {
      title: "Step 11: Review and Submit",
      fields: [
        {
          component: Textarea,
          label: "Review Your Information",
          name: "reviewInfo",
          rows: 5,
          readOnly: true,
        },
        {
          component: CheckboxInput,
          label:
            "I confirm that the information provided is accurate and complete",
          name: "confirmation",
          rules: {
            required: "You must confirm that the information is accurate",
          },
        },
        {
          component: ButtonUi,
          label: "Submit",
          name: "submit",
          type: "submit",
          rules: {},
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

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    setSubmissionStatus("Application submitted successfully!");
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
          {currentStep > 0 && (
            <ButtonUi
              label="Previous"
              type="button"
              className="bg-gray-500 hover:bg-gray-600 text-white"
              onClick={onPrev}
            />
          )}
          {currentStep < steps.length - 1 ? (
            <ButtonUi
              label="Next"
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white"
              onClick={onNext}
            />
          ) : (
            <ButtonUi
              label="Submit"
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white"
            />
          )}
        </div>
      </form>
    </div>
  );
};
