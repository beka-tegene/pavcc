import React from "react";
import { TextInput } from "../../../Components/TextInput";
import { SelectInput } from "../../../Components/SelectInput";
import { useForm } from "react-hook-form";
import countryList from "react-select-country-list";

export const EntrepreneurRegister = () => {
  const { control, handleSubmit } = useForm();
  const options = countryList().getData();
  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
  };
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">
        Entrepreneur Online Application Form
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-[#f5f5f5] p-8 rounded-lg shadow-lg"
      >
        <TextInput
          label="First Name"
          name="firstName"
          control={control}
          rules={{ required: "First Name is required" }}
        />
        <TextInput label="Middle Name" name="middleName" control={control} />
        <TextInput
          label="Last Name"
          name="lastName"
          control={control}
          rules={{ required: "Last Name is required" }}
        />
        <TextInput
          label="Email"
          name="email"
          type="email"
          control={control}
          rules={{ required: "Email is required" }}
        />
        <TextInput
          label="Telephone Number"
          name="telephone"
          type="tel"
          control={control}
          rules={{ required: "Telephone Number is required" }}
        />
        <TextInput
          label="Street Number"
          name="streetNumber"
          control={control}
        />
        <TextInput label="Suite/Apt No." name="suiteAptNo" control={control} />
        <TextInput label="City" name="city" control={control} />
        <TextInput label="State" name="state" control={control} />
        <TextInput
          label="Zip code (Postal Code)"
          name="zipCode"
          control={control}
        />
        <SelectInput
          label="Country"
          name="country"
          control={control}
          rules={{ required: "Country is required" }}
          options={options}
        />
      </form>
    </div>
  );
};
