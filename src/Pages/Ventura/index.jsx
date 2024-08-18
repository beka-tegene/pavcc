import React from "react";
import { Route, Routes } from "react-router-dom";
import { VenturaDashboard } from "./Dashboard";
import { Layout } from "./Layout";
import { AllIdeas } from "./Ideas";
import { Setting } from "./Setting";
import { IdeaDetails } from "./IdeasDetail";
import { StartProcess } from "./StartProcess";
import { StartProcessDetail } from "./StartProcessDetail";
import { RegisterAndPay } from "./Register";
import { VenturaNotification } from "./VenturaNotification";
import NotificationDetail from "./NotificationDetail";

export const Ventura = () => {
  return (
    <Layout>
      <Routes>
        <Route path="dashboard" element={<VenturaDashboard />} />
        <Route path="all-ideas" element={<AllIdeas />} />
        <Route path="all-ideas/:id" element={<IdeaDetails />} />
        <Route path="start-process" element={<StartProcess />} />
        <Route path="start-process/:id" element={<StartProcessDetail />} />
        <Route path="register-pay" element={<RegisterAndPay />} />
        <Route path="setting" element={<Setting />} />
        <Route path="notifications" element={<VenturaNotification />} />
        <Route path="notifications/:id" element={<NotificationDetail />} />
      </Routes>
    </Layout>
  );
};
