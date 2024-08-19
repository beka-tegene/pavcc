import React from "react";
import { TextInput } from "../../Components/TextInput";
import { ButtonUi } from "../../Components/Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:4500/api/v1/auth/login`,
        data
      );
      localStorage.setItem("token", response.data.token);
      if (response.data.user.role === "Admin") {
        navigate("/admin/dashboard");
      }
      if (response.data.user.role === "Investor") {
        navigate("/ventura/dashboard");
      }
      if (response.data.user.role === "Entrepreneur") {
        navigate("/entrepreneur/dashboard");
      }
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Email or Phone Number"
            name="emailOrPhoneNumber"
            control={control}
            rules={{
              required: "Email or Phone Number is required",
            }}
            className={"text-white"}
          />
          <TextInput
            label="Password"
            type="password"
            name="password"
            control={control}
            rules={{
              required: "Password is required",
            }}
            className={"text-white"}
          />
          <ButtonUi
            label="Login"
            type="submit"
            className="bg-green-500 hover:bg-green-600 py-2 px-10"
          />
        </form>
      </div>
    </div>
  );
};
