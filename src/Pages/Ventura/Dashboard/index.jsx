import React from "react";
import { SummaryCard } from "../../../Components/Summary";
import { FaRegLightbulb } from "react-icons/fa";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";
import MembershipCard from "./MembershipCard";
import CurrentStatusCard from "./CurrentStatusCard";
import { useNavigate } from "react-router-dom";

export const VenturaDashboard = () => {
  const barData = {
    labels: [
      "Total Ideas",
      "Accepted Ideas",
      "Pending Ideas",
      "Rejected Ideas",
    ],
    datasets: [
      {
        label: `Count`,
        data: [5, 2, 2, 1],
        backgroundColor: ["#3B82F6", "#22C55E", "#EAB308", "#EF4444"],
      },
    ],
  };

  const pieData = {
    labels: [
      "Total Ideas",
      "Accepted Ideas",
      "Pending Ideas",
      "Rejected Ideas",
    ],
    datasets: [
      {
        data: [5, 2, 2, 1],
        backgroundColor: ["#3B82F6", "#22C55E", "#EAB308", "#EF4444"],
      },
    ],
  };
  const navigate = useNavigate();
  const handleRegister = (membershipType) => {
    console.log(`Register and pay for ${membershipType}`);
    navigate("/ventura/register-pay");
    // Implement registration and payment logic here
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <SummaryCard
          title="Total Started Process"
          value="3"
          icon={<FaRegLightbulb />}
          bgColor="bg-blue-500"
        />
        <SummaryCard
          title="Accepted Ideas"
          value="1"
          icon={<FaRegLightbulb />}
          bgColor="bg-green-500"
        />
        <SummaryCard
          title="Pending Ideas"
          value="2"
          icon={<FaRegLightbulb />}
          bgColor="bg-yellow-500"
        />
        <SummaryCard
          title="Rejected Ideas"
          value="0"
          icon={<FaRegLightbulb />}
          bgColor="bg-red-500"
        />
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-4 gap-4 items-start">
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="md:col-span-2 max-h-[45vh] w-full flex flex-col bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">
              Ideas Distribution (Bar Chart)
            </h2>
            <Bar data={barData} />
          </div>
          <div className="max-h-[45vh] w-full flex flex-col bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">
              Ideas Distribution (Pie Chart)
            </h2>
            <Pie data={pieData} />
          </div>
          <div className="col-span-4">
            <CurrentStatusCard
              title="Membership Status"
              status="active"
              description="Your current membership status is active. You have full access to all features."
              bgColor="border-green-500"
            />
          </div>
        </div>
        {/* <div className="md:col-span-1 mt-6">
          <MembershipCard
            title="Free Membership"
            description="Basic access to all features."
            price="Free"
            onRegister={() => handleRegister("Free Membership")}
          />
          <MembershipCard
            title="Premium Membership"
            description="Includes advanced features and priority support."
            price="$19.99/month"
            onRegister={() => handleRegister("Premium Membership")}
          />
          <MembershipCard
            title="Gold Membership"
            description="All benefits of Premium plus exclusive content."
            price="$49.99/month"
            onRegister={() => handleRegister("Gold Membership")}
          />
        </div> */}
      </div>
    </div>
  );
};
