import { Routes, Route, Navigate } from "react-router";
import RootLayout from "@/components/root-layout";
import LoginPage from "@/pages/auth/LoginPage";
import ForgotPasswordPage from "@/pages/auth/ForgotPasswordPage";
import DashboardLayout from "@/components/dashboard-layout";
import DashboardPage from "@/pages/dashboard/DashboardPage";

export default function Page() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Navigate to="/login" replace />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />

        {/* Protectected Routes */}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
