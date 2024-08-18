import React from "react";
import { Route, Routes } from "react-router-dom";
import { EntrepreneurDashboard } from "./dashboard";
import { Layout } from "./Layout";
import { Ideas } from "./Ideas";
import { IdeaDetails } from "./IdeasDetail";
import { IdeasCreate } from "./IdeasCreate";
import { Setting } from "./Setting";
import { EntrepreneurNotification } from "./EntrepreneurNotification";
import NotificationDetail from "./NotificationDetail";

export const Entrepreneur = () => {
  return (
    <Layout>
      <Routes>
        <Route path="dashboard" element={<EntrepreneurDashboard />} />
        <Route path="ideas" element={<Ideas />} />
        <Route path="ideas/create" element={<IdeasCreate />} />
        <Route path="ideas/:id" element={<IdeaDetails />} />
        <Route path="setting" element={<Setting />} />
        <Route path="notifications" element={<EntrepreneurNotification />} />
        <Route path="notifications/:id" element={<NotificationDetail />} />
      </Routes>
    </Layout>
  );
};
