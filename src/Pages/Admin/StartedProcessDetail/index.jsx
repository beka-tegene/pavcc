import React from "react";
import { ButtonUi } from "../../../Components/Button";

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
  return (
    <div className="p-6">
      <div className="flex justify-end gap-5 relative">
        <ButtonUi
          label={`Send Notification`}
          type="button"
          className="bg-green-700 text-white px-8 py-2 rounded-lg hover:bg-green-800 font-semibold"
        />
        <div className="flex flex-col bg-white p-2 absolute top-11 right-0 shadow-lg rounded-md gap-2">
          <ButtonUi
            label={`For Venture Capitalist`}
            type="button"
            className="hover:bg-[#8a94a5] text-sm hover:text-white px-4 py-2 rounded-lg bg-gray-100 text-[#374151] font-semibold"
          />
          <ButtonUi
            label={`For Interpreter`}
            type="button"
            className="hover:bg-[#8a94a5] text-sm hover:text-white px-4 py-2 rounded-lg bg-gray-100 text-[#374151] font-semibold"
          />
        </div>
      </div>
      <div key={opportunity.id} className="bg-white shadow rounded-lg p-3 ">
        <h2 className="text-xl font-semibold mb-2">{opportunity.title}</h2>
        <p className="text-gray-700 mb-4">{opportunity.description}</p>
        <p className="text-gray-900 font-medium mb-2">
          Amount Required: {opportunity.currency} {opportunity.amountRequired}
        </p>
        <p className="text-gray-600 mb-2">Deadline: {opportunity.deadline}</p>
        <p className="text-gray-600 mb-4">
          Location: {opportunity.location.city}, {opportunity.location.state},{" "}
          {opportunity.location.country}
        </p>
        <p className="text-gray-600 mb-4">
          Tags: {opportunity.tags.join(", ")}
        </p>

        {opportunity.interpreterProfiles.length > 0 && (
          <>
            <h3 className="text-lg font-semibold mb-3">
              Potential Interpreters
            </h3>
            {opportunity.interpreterProfiles.map((interpreter) => (
              <div
                key={interpreter.id}
                className="bg-gray-100 p-4 rounded-lg mb-4"
              >
                <div className="flex items-start mb-4">
                  <img
                    src={interpreter.profilePicture}
                    alt={interpreter.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold mb-1">
                      {interpreter.name}
                    </h4>
                    <p className="text-gray-700 mb-2">
                      Languages:{" "}
                      {interpreter.languages
                        .map((lang) => `${lang.language} (${lang.proficiency})`)
                        .join(", ")}
                    </p>
                    <p className="text-gray-700 mb-2">
                      Experience:{" "}
                      {interpreter.experience
                        .map((exp) => `${exp.jobTitle} at ${exp.company}`)
                        .join(", ")}
                    </p>
                    <p className="text-gray-700 mb-2">
                      Availability: {interpreter.availability.days.join(", ")}{" "}
                      from {interpreter.availability.hours.start} to{" "}
                      {interpreter.availability.hours.end}
                    </p>
                    <p className="text-gray-700 mb-2">
                      Rates: {interpreter.rates.currency}{" "}
                      {interpreter.rates.perHour} per hour
                    </p>
                    <p className="text-gray-700 mb-4">
                      Description: {interpreter.description}
                    </p>
                    <a
                      href={interpreter.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
