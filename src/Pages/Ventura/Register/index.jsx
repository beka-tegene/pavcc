import React from "react";
import { useForm } from "react-hook-form";
import { SelectInput } from "../../../Components/SelectInput";
import { CheckboxInput } from "../../../Components/CheckboxInput";
import { TextInput } from "../../../Components/TextInput";
import countryList from "react-select-country-list";
import { ButtonUi } from "../../../Components/Button";

export const RegisterAndPay = () => {
  const { handleSubmit, control } = useForm();
  const options = countryList().getData();
  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <div className="p-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Register and Pay</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-3 gap-2 ">
            <SelectInput
              label="Member Category"
              name="memberCategory"
              control={control}
              rules={{ required: "Member Category is required" }}
              options={[
                { value: "Free", label: "Free" },
                { value: "Premium", label: "Premium" },
                { value: "Gold", label: "Gold" },
              ]}
            />

            <TextInput
              label="Company Name"
              name="companyName"
              control={control}
              rules={{
                required: "Company Name is required",
              }}
              className={"text-white"}
            />
          
            <TextInput
              label="Contact Title"
              name="contactTitle"
              control={control}
              className={"text-white"}
            />
            <TextInput
              label="Company Website"
              name="companyWebsite"
              control={control}
              rules={{}}
              className={"text-white"}
            />
            <SelectInput
              label="Previous Experience Investing in Africa?"
              name="experienceInAfrica"
              control={control}
              rules={{ required: "Country is required" }}
              options={[
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
              ]}
            />
            <TextInput
              label="Number of Years in business"
              name="yearsInBusiness"
              control={control}
              type="number"
              rules={{}}
              className={"text-white"}
            />

            <TextInput
              label="Number of Employees"
              name="numberOfEmployees"
              control={control}
              type="number"
              rules={{}}
              className={"text-white"}
            />
            <TextInput
              label="Current Asset $ Amount Under Management"
              name="currentAssetAmount"
              control={control}
              rules={{
                required: "Current Asset $ Amount Under Management is required",
              }}
              className={"text-white"}
              type="number"
            />
            <SelectInput
              label="Business Sector you prefer to invest"
              name="businessSector"
              control={control}
              rules={{ required: "Country is required" }}
              options={[
                { value: "Agriculture", label: "Agriculture" },
                { value: "Agro-processing", label: "Agro-processing" },
                { value: "Ecommerce", label: "Ecommerce" },
                { value: "Education", label: "Education" },
                { value: "Health", label: "Health" },
                { value: "Manufacturing", label: "Manufacturing" },
                { value: "Mining", label: "Mining" },
                { value: "Retail", label: "Retail" },
                { value: "Service", label: "Service" },
                { value: "Technology", label: "Technology" },
                { value: "Transportation", label: "Transportation" },
                { value: "Other", label: "Other" },
              ]}
            />
            <TextInput
              label="Preferred Single Investment Amount You are Interested to Make (you may provide range)"
              name="investmentAmount"
              control={control}
              rules={{}}
              className={"text-white"}
            />
            <TextInput
              label="Normal Equity Percentage You Demand"
              name="equityPercentage"
              control={control}
              rules={{}}
              className={"text-white"}
            />
            <TextInput
              label="Preferred Number of Years for Exit"
              name="preferredExitYears"
              control={control}
              type="number"
              className={"text-white"}
            />
            <TextInput
              label="Expected Return (%)"
              name="expectedReturn"
              control={control}
              type="number"
              className={"text-white"}
            />

            <TextInput
              label="Name"
              name="name"
              control={control}
              rules={{ required: "Name is required" }}
              className={"text-white"}
            />
            <TextInput
              label="Date"
              name="date"
              control={control}
              type="date"
              rules={{ required: "Date is required" }}
              className={"text-white"}
            />
            <CheckboxInput
              label="I agree to the Terms and Conditions"
              name="termsAndConditions"
              control={control}
              rules={{ required: "You must agree to the terms and conditions" }}
            />
            <CheckboxInput
              label="I have reviewed and edited my application"
              name="reviewAndEditApplication"
              control={control}
              rules={{
                required: "You must review and agree to the application",
              }}
            />
            <div className="mb-4">
              <h3 className="text-lg font-semibold">
                Preferred Exit Strategy (Pick all that apply)
              </h3>
              <CheckboxInput
                label="Buyback"
                name="exitStrategies"
                control={control}
              />
              <CheckboxInput
                label="Merger & Acquisition"
                name="exitStrategies"
                control={control}
              />
              <CheckboxInput
                label="Secondary Sale"
                name="exitStrategies"
                control={control}
              />
              <CheckboxInput
                label="IPO"
                name="exitStrategies"
                control={control}
              />
              <CheckboxInput
                label="Convertible Note"
                name="exitStrategies"
                control={control}
              />
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">
                Investor Category (Mark all that apply)
              </h3>
              <CheckboxInput
                label="Venture Capital"
                name="investorCategories"
                control={control}
                rules={{ required: "You must accept the terms and conditions" }}
              />
              <CheckboxInput
                label="Private Equity"
                name="investorCategories"
                control={control}
                rules={{ required: "You must accept the terms and conditions" }}
              />
              <CheckboxInput
                label="High Net-worth"
                name="investorCategories"
                control={control}
                rules={{ required: "You must accept the terms and conditions" }}
              />
              <CheckboxInput
                label="Foundation"
                name="investorCategories"
                control={control}
                rules={{ required: "You must accept the terms and conditions" }}
              />
              <CheckboxInput
                label="Not-for-profit"
                name="investorCategories"
                control={control}
                rules={{ required: "You must accept the terms and conditions" }}
              />
              <CheckboxInput
                label="Public Entity / Government"
                name="investorCategories"
                control={control}
                rules={{ required: "You must accept the terms and conditions" }}
              />
            </div>
          </div>
          <ButtonUi
            label="Submit"
            type="submit"
            className="bg-green-700 w-full"
          />
        </form>
      </div>
    </div>
  );
};
