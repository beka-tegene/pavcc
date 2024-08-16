import React from 'react';

const Switch = ({ checked, onChange, label }) => {
  return (
    <div className="flex items-center">
      {label && <span className="mr-3 text-sm font-medium text-gray-700">{label}</span>}
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-700 peer-checked:bg-green-700 transition-colors duration-300 ease-in-out">
          <div
            className={`absolute top-0 bottom-0 w-6 h-6 bg-white rounded-full border border-gray-300 transition-transform duration-300 ease-in-out ${
              checked ? 'translate-x-5' : 'translate-x-0'
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default Switch;
