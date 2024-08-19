import React from "react";
import { TextInput } from "../../../Components/TextInput";
import { SelectInput } from "../../../Components/SelectInput";
import { useForm } from "react-hook-form";
import countryList from "react-select-country-list";
import { ButtonUi } from "../../../Components/Button";
import { FileInput } from "../../../Components/FIleInput";
import axios from "axios";
import { back_base_url } from "../../../Lib/config";
import { useNavigate } from "react-router-dom";

export const EntrepreneurRegister = () => {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();
  const options = countryList().getData();
  const onSubmit = async (data) => {
    // console.log("Submitted Data:", data);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((item) => formData.append(key, item));
        } else {
          formData.append(key, value);
        }
      });
      if (data.picture) {
        formData.append("picture", data.picture[0]);
      }
      formData.append("role", "Entrepreneur");

      const response = await axios.post(
        `${back_base_url}/api/v1/auth/register`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      localStorage.setItem("token", response.data.token);

      alert(response.data.message);
      navigate("/entrepreneur/ideas/create");
      // setSubmissionStatus("Application submitted successfully!");
    } catch (error) {
      console.error(error);
      // setSubmissionStatus("Submission failed. Please try again.");
    }
  };
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Entrepreneur Register Form</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-[#f5f5f5] p-8 rounded-lg shadow-lg"
      >
        <div className="grid grid-cols-3 gap-3">
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
        </div>
        <div className="grid grid-cols-2 gap-3">
          <TextInput
            label="Email"
            name="email"
            type="email"
            control={control}
            rules={{ required: "Email is required" }}
          />
          <TextInput
            label="Telephone Number"
            name="phoneNumber"
            type="tel"
            control={control}
            rules={{ required: "Telephone Number is required" }}
          />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <TextInput label="City" name="city" control={control} />
          <TextInput label="State" name="state" control={control} />
          <TextInput
            label="Zip code (Postal Code)"
            name="zipCode"
            control={control}
          />
        </div>
        <SelectInput
          label="Country"
          name="country"
          control={control}
          rules={{ required: "Country is required" }}
          options={options}
        />
        <div className="grid grid-cols-2 gap-2">
          <FileInput
            label="Upload Profile"
            name="picture"
            control={control}
            rules={{ required: "File is required" }}
            aspectRatio="1/1"
          />
          <FileInput
            label="Upload ID"
            name="id"
            control={control}
            rules={{ required: "File is required" }}
            aspectRatio="1/1"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <TextInput
            label="Password"
            name="password"
            type="password"
            control={control}
          />
          <TextInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            control={control}
          />
        </div>
        <div className="flex items-center justify-end">
          <ButtonUi
            label="Submit"
            type="submit"
            className="bg-green-500 hover:bg-green-600 px-10 py-2 text-white font-semibold"
          />
        </div>
      </form>
    </div>
  );
};
