import React from "react";
import { useParams } from "react-router-dom";
const ideas = [
    {
      id: "1",
      title: "AI Translation Tool Development",
      description:
        "Seeking funding for a revolutionary AI translation tool that supports multiple languages with high accuracy.",
      industry: "Technology",
      amountRequired: 500000,
      currency: "USD",
      deadline: "2024-12-31",
      status: "open",
      postedDate: "2024-08-01",
      location: {
        city: "San Francisco",
        state: "CA",
        country: "USA",
      },
      tags: ["AI", "Technology", "Translation"],
      contactInfo: {
        email: "contact@aitech.com",
        phone: "+1-234-567-8900",
      },
      interpreterProfiles: [
        {
          id: "101",
          name: "Anna Smith",
          languages: [
            {
              language: "English",
              proficiency: "native",
            },
            {
              language: "Spanish",
              proficiency: "advanced",
            },
          ],
          experience: [
            {
              jobTitle: "Freelance Translator",
              company: "Various",
              duration: "5 years",
              description:
                "Translated documents, software, and communications for clients across various industries.",
            },
          ],
          availability: {
            days: ["Monday", "Wednesday", "Friday"],
            hours: {
              start: "09:00 AM",
              end: "05:00 PM",
            },
          },
          rates: {
            perHour: 50,
            perDay: 400,
            currency: "USD",
          },
          description:
            "Experienced translator with a strong background in technical and business translation.",
          website: "https://annasmithtranslator.com",
          certifications: [
            {
              certification: "Certified Translator",
              issuingOrganization: "American Translators Association",
              dateIssued: "2020-01-15",
            },
          ],
          profilePicture: "https://via.placeholder.com/150",
        },
      ],
    },
    {
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
    },
  ];
export const StartProcessDetail = () => {
  const { id } = useParams();
  const idea = ideas.find((idea) => idea.id === id);

  if (!idea) {
    return <p>Idea not found</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">{idea.title}</h1>
      <p className="text-gray-700 mb-4">{idea.description}</p>
      <p className="text-gray-900 font-medium mb-2">
        Amount Required: {idea.currency} {idea.amountRequired}
      </p>
      <p className="text-gray-600 mb-2">
        Deadline: {idea.deadline}
      </p>
      <p className="text-gray-600 mb-4">
        Location: {idea.location.city}, {idea.location.state}, {idea.location.country}
      </p>
      <h3 className="text-lg font-semibold mb-3">Interpreter Profiles</h3>
      {idea.interpreterProfiles.length > 0 ? (
        idea.interpreterProfiles.map((interpreter) => (
          <div
            key={interpreter.id}
            className="bg-gray-100 p-4 rounded-lg mb-4"
          >
            <h4 className="text-lg font-semibold mb-2">{interpreter.name}</h4>
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
              Availability: {interpreter.availability.days.join(", ")} from {interpreter.availability.hours.start} to {interpreter.availability.hours.end}
            </p>
            <p className="text-gray-700 mb-2">
              Rates: {interpreter.rates.currency} {interpreter.rates.perHour} per hour
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
        ))
      ) : (
        <p>No interpreters available for this idea.</p>
      )}
    </div>
  );
};

