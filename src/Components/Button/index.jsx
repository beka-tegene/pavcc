import React from "react";

export const ButtonUi = ({
  label = "Button",
  onClick,
  type = "button",
  disabled = false,
  className = "py-2 px-4",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`  rounded  focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    >
      {label}
    </button>
  );
};
