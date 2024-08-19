import React, { useEffect, useState } from "react";
import IdeaCard from "../IdeaCard";
import { useNavigate } from "react-router-dom";
import { ButtonUi } from "../../../Components/Button";
import axios from "axios";

export const Ideas = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/entrepreneur/ideas/${id}`);
  };

  const [idea, setIdea] = useState(null);
  useEffect(() => {
    fetchIdeas();
  }, []);
  const token = localStorage.getItem("token");
  const fetchIdeas = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4500/api/v1/ent/user`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIdea(response.data.entrepreneurs);
    } catch (error) {
      console.error("Error fetching idea details:", error);
    }
  };
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold ">Posted Opportunities</h1>
        <ButtonUi
          onClick={() => navigate(`/entrepreneur/ideas/create`)}
          label="Create Ideas"
          className="bg-green-500 hover:bg-green-600 px-10 font-semibold py-2 text-white"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {idea?.map((idea, index) => (
          <IdeaCard key={index} idea={idea} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
};
