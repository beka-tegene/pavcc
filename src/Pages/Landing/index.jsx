import React from "react";
import { TextInput } from "../../Components/TextInput";
import { ButtonUi } from "../../Components/Button";
import { useForm } from "react-hook-form";
import axios from "axios";

export const Landing = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await axios.post(
        `http://localhost:4500/api/v1/auth/login`,
        {
          emailOrPhoneNumber: data.email, // Use emailOrPhoneNumber as the key
          password: data.password,
        }
      );
      console.log(response.data);
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
            name="email"
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
