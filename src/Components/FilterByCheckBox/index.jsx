import React from "react";
import { useForm } from "react-hook-form";
import { CheckboxInput } from "../CheckboxInput";

export const FilterByCheckBox = ({ filters = [], onFilterChange }) => {
  const { control  } = useForm();
  const handleChange = (filterName, optionValue, checked) => {
    onFilterChange(filterName, optionValue, checked);
  };
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Filter By</h3>
      <form className="grid grid-cols-1 gap-4">
        {filters.map(({ label, name, options }, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h4 className="font-medium text-gray-700">{label}</h4>
            <div className="flex flex-col gap-2">
              {options.map((option, idx) => (
                <CheckboxInput
                  key={idx}
                  label={option.label}
                  name={`${option.value}`}
                  control={control}
                  rules={{}}
                  onChange={(e) =>
                    handleChange(name, option.value, e.target.checked)
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};
