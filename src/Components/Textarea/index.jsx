import React from 'react';
import { Controller } from 'react-hook-form';

export const Textarea = ({
  label,
  name,
  control,
  rows = 3,
  placeholder = '',
  rules = {},
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={name} className="text-gray-600 font-medium">{label}</label>}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <textarea
              id={name}
              rows={rows}
              placeholder={placeholder}
              {...field}
              {...props}
              className="w-full border border-gray-300 p-2 rounded bg-transparent outline-none resize-none"
            />
            {fieldState.error && <span className="font-light text-sm text-red-700">{fieldState.error.message}</span>}
          </>
        )} 
      />
    </div>
  );
};
