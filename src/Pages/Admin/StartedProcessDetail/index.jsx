import React, { useEffect, useState } from "react";
import { ButtonUi } from "../../../Components/Button";
import axios from "axios";
import { useParams } from "react-router-dom";
import { back_base_url } from "../../../Lib/config";

export const StartedProcessDetail = () => {
  const opportunity = {
    id: "2",
    title: "Healthcare App for Multilingual Patients",
    description:
      "Funding required for developing a mobile app aimed at improving healthcare accessibility for multilingual patients.",
    industry: "Healthcare",
    amountRequired: 750000,
    currency: "USD",
    deadline: "2025-03-15",
    status: "open",
    postedDate: "2024-08-10",
    location: {
      city: "New York",
      state: "NY",
      country: "USA",
    },
    tags: ["Healthcare", "App", "Multilingual"],
    contactInfo: {
      email: "contact@healthcareapp.com",
      phone: "+1-987-654-3210",
    },
    interpreterProfiles: [
      {
        id: "102",
        name: "Luis Gomez",
        languages: [
          {
            language: "English",
            proficiency: "native",
          },
          {
            language: "French",
            proficiency: "fluent",
          },
        ],
        experience: [
          {
            jobTitle: "Medical Interpreter",
            company: "HealthCorp",
            duration: "7 years",
            description:
              "Provided medical interpretation services in various healthcare settings.",
          },
        ],
        availability: {
          days: ["Tuesday", "Thursday", "Saturday"],
          hours: {
            start: "10:00 AM",
            end: "04:00 PM",
          },
        },
        rates: {
          perHour: 60,
          perDay: 480,
          currency: "USD",
        },
        description:
          "Experienced medical interpreter with expertise in complex healthcare terminology.",
        website: "https://luisgomezinterpreter.com",
        certifications: [
          {
            certification: "Certified Medical Interpreter",
            issuingOrganization:
              "National Board of Certification for Medical Interpreters",
            dateIssued: "2019-07-22",
          },
        ],
        profilePicture: "https://via.placeholder.com/150",
      },
    ],
  };
  const { id } = useParams();
  const [popup, setPopup] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [message, setMessage] = useState("");

  const handleButtonClick = (type) => {
    setSelectedNotification(type);

    setPopup(true);
  };
  const token = localStorage.getItem("token");

  const [ideaById, setIdeaById] = useState(null);

  useEffect(() => {
    fetchIdeasById();
  }, []);

  const fetchIdeasById = async () => {
    try {
      const response = await axios.get(
        `${back_base_url}/api/v1/ent/entrepreneurs/${id}`
      );
      const entrepreneur = response.data.entrepreneur;
      setIdeaById(entrepreneur);
    } catch (error) {
      console.error("Error fetching idea details:", error);
    }
  };
  console.log(ideaById);

  const handleSendNotification = async () => {
    try {
      const response = await axios.post(
        `${back_base_url}/api/v1/not/notifications/send`,
        {
          receiverId: ideaById?.updatedBy?._id,
          type: "likePost",
          message: message,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log({ error });
    }
    setPopup(false);
    setMessage("");
  };

  return (
    <div className="p-6">
      <div className="flex justify-end gap-5 relative">
        <ButtonUi
          onClick={() => handleButtonClick("Venture Capitalist")}
          label="To Venture Capitalist"
          type="button"
          className="bg-green-700 text-white px-8 py-2 rounded-lg hover:bg-green-800 font-semibold"
        />
        <ButtonUi
          onClick={() => handleButtonClick("Interpreter")}
          label="To Interpreter"
          type="button"
          className="bg-blue-700 text-white px-8 py-2 rounded-lg hover:bg-blue-800 font-semibold"
        />
      </div>

      {popup && (
        <div className="fixed w-full z-10">
          <div
            className="bg-black opacity-50 top-0 right-0 left-0 bottom-0 fixed"
            onClick={() => setPopup(false)}
          ></div>
          <div className="flex flex-col bg-white p-6 fixed top-[50%]  left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-md gap-4 z-20">
            <h3 className="text-xl font-semibold">
              Send Notification to {selectedNotification}
            </h3>
            <textarea
              className="w-full h-40 p-2 border border-gray-300 rounded-md resize-none"
              placeholder="Type your notification message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="flex justify-end gap-4">
              <ButtonUi
                onClick={() => setPopup(false)}
                label="Cancel"
                type="button"
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
              />
              <ButtonUi
                onClick={handleSendNotification}
                label="Send"
                type="button"
                className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
              />
            </div>
          </div>
        </div>
      )}

      <div key={ideaById?._id} className="bg-white shadow rounded-lg p-3 mt-4">
        <h2 className="text-xl font-semibold mb-2">
          {ideaById?.businessSector}
        </h2>
        <p className="text-gray-900 font-medium mb-2">
          Amount Required: {ideaById?.investmentNeededUSD}
        </p>
        <p className="text-gray-600 mb-2">Deadline: {ideaById?.deadline}</p>
        <p className="text-gray-600 mb-4">
          {ideaById?.yearsInBusiness} Years in Business, {ideaById?.legalStatus}
        </p>

        <>
          <h3 className="text-lg font-semibold mb-3">Potential Interpreters</h3>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <div className="flex items-start mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-50 shadow mr-4">
                <img
                  src={ideaById?.updatedBy?.picture}
                  alt={ideaById?.updatedBy?.firstName}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-1">
                  {ideaById?.updatedBy?.firstName}{" "}
                  {ideaById?.updatedBy?.lastName}{" "}
                  {ideaById?.updatedBy?.middleName}
                </h4>
                <p className="text-gray-700 mb-1 text-sm">
                  {ideaById?.updatedBy?.email}
                </p>
                <p className="text-gray-700 mb-1 text-sm">
                  {ideaById?.updatedBy?.zipCode} , {ideaById?.updatedBy?.city} ,
                  {ideaById?.updatedBy?.state} ,{ideaById?.updatedBy?.country}
                </p>
                <p className="text-gray-700 mb-1 text-sm">
                  {ideaById?.updatedBy?.phoneNumber}
                </p>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};
