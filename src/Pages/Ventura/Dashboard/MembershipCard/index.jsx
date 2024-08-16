import React from "react";
import { ButtonUi } from "../../../../Components/Button";

const MembershipCard = ({ title, description, price, onRegister }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-700 mb-2">{description}</p>
    <p className="text-xl font-bold mb-4">{price}</p>
    <ButtonUi
      label={`${price === "Free" ? "Register" : "Register & Pay"} `}
      type="button"
      onClick={onRegister}
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
    />
  </div>
);

export default MembershipCard;
