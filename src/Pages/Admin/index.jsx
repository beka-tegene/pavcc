import React from "react";
import { Layout } from "./Layout";
import { Route, Routes } from "react-router-dom";
import { AdminDashboard } from "./Dashboard";
import { AllIdeas } from "./Ideas";
import { IdeaDetail } from "./IdeaDetail";
import { IdeaSummary } from "./Summary";
import { StartedProcess } from "./StartedProcess";
import { StartedProcessDetail } from "./StartedProcessDetail";

export const Admin = () => {
  return (
    <Layout>
      <Routes>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="all-ideas" element={<AllIdeas />} />
        <Route path="all-ideas/:id" element={<IdeaDetail />} />
        <Route path="ideas-approved" element={<IdeaSummary />} />
        <Route path="start-process" element={<StartedProcess />} />
        <Route path="start-process/:id" element={<StartedProcessDetail />} />
      </Routes>
    </Layout>
  );
};
