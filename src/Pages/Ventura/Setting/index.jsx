import React from "react";
import { useForm } from "react-hook-form";
import countryList from "react-select-country-list";
import { SelectInput } from "../../../Components/SelectInput";
import { TextInput } from "../../../Components/TextInput";
import { ButtonUi } from "../../../Components/Button";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router-dom for navigation

export const Setting = () => {
  const {
    control: profileControl,
    handleSubmit: handleProfileSubmit,
    formState: { errors: profileErrors },
  } = useForm();

  const {
    control: passwordControl,
    handleSubmit: handlePasswordSubmit,
    formState: { errors: passwordErrors },
  } = useForm();

  const navigate = useNavigate();
  const options = countryList().getData();

  const onProfileSubmit = (data) => {
    console.log("Profile Submitted Data:", data);
  };

  const onPasswordSubmit = (data) => {
    console.log("Password Submitted Data:", data);
  };

  const handleLogout = () => {
    console.log("User logged out");
    navigate("/login");
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-4 text-gray-700">
        <button className="font-semibold underline hover:text-blue-600 cursor-pointer">
          Change profile
        </button>
        <button className="hover:text-blue-600 cursor-pointer">My Profile</button>
        <span className="hover:text-blue-600 cursor-pointer">Setting</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
        <div className="col-span-1 flex flex-col gap-2">
          <h1 className="text-lg font-bold mb-4">Change Profile Photo</h1>
          <div className="w-full h-60 overflow-hidden bg-gray-200 m-auto flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
              alt="Profile"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-3 items-center mt-4">
            <ButtonUi
              label="Update Profile"
              type="button"
              className="bg-green-700 w-full"
            />
            <ButtonUi
              label="Delete Profile"
              type="button"
              className="bg-transparent text-red-800 w-fit py-0 border-b-[2px] border-dotted border-red-800"
            />
          </div>
        </div>
        <div className="col-span-2">
          <h1 className="text-lg font-bold mb-4">Change Profile</h1>
          <form
            onSubmit={handleProfileSubmit(onProfileSubmit)}
            className="space-y-4 bg-gray-50 p-4 rounded-lg shadow-md"
          >
            <TextInput
              label="First Name"
              name="firstName"
              control={profileControl}
              rules={{ required: "First Name is required" }}
              error={profileErrors.firstName?.message}
            />
            <TextInput
              label="Middle Name"
              name="middleName"
              control={profileControl}
            />
            <TextInput
              label="Last Name"
              name="lastName"
              control={profileControl}
              rules={{ required: "Last Name is required" }}
              error={profileErrors.lastName?.message}
            />
            <TextInput
              label="Email"
              name="email"
              type="email"
              control={profileControl}
              rules={{ required: "Email is required" }}
              error={profileErrors.email?.message}
            />
            <TextInput
              label="Telephone Number"
              name="telephone"
              type="tel"
              control={profileControl}
              rules={{ required: "Telephone Number is required" }}
              error={profileErrors.telephone?.message}
            />
            <TextInput
              label="Street Number"
              name="streetNumber"
              control={profileControl}
            />
            <TextInput
              label="Suite/Apt No."
              name="suiteAptNo"
              control={profileControl}
            />
            <TextInput label="City" name="city" control={profileControl} />
            <TextInput label="State" name="state" control={profileControl} />
            <TextInput
              label="Zip code (Postal Code)"
              name="zipCode"
              control={profileControl}
            />
            <SelectInput
              label="Country"
              name="country"
              control={profileControl}
              rules={{ required: "Country is required" }}
              options={options}
              error={profileErrors.country?.message}
            />
            <ButtonUi
              label="Update Profile"
              type="submit"
              className="bg-green-700 w-full"
            />
          </form>
        </div>
        <div className="col-span-1">
          <h1 className="text-lg font-bold mb-4">Change Password</h1>
          <form
            onSubmit={handlePasswordSubmit(onPasswordSubmit)}
            className="space-y-4 bg-gray-100 p-4 rounded-lg shadow-md"
          >
            <TextInput
              label="Old Password"
              name="oldPassword"
              type="password"
              control={passwordControl}
              rules={{ required: "Old Password is required" }}
              error={passwordErrors.oldPassword?.message}
            />
            <TextInput
              label="New Password"
              name="newPassword"
              type="password"
              control={passwordControl}
              rules={{ required: "New Password is required" }}
              error={passwordErrors.newPassword?.message}
            />
            <TextInput
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              control={passwordControl}
              rules={{ required: "Confirm Password is required" }}
              error={passwordErrors.confirmPassword?.message}
            />
            <ButtonUi
              label="Change Password"
              type="submit"
              className="bg-green-700 w-full"
            />
          </form>
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <ButtonUi
          label="Logout"
          type="button"
          onClick={handleLogout}
          className="bg-red-700 text-white"
        />
      </div>
    </div>
  );
};
