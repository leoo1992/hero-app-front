import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import LoginLayout from "../layouts/LoginLayout";
import DashBoard from "../pages/DashBoard";
import DefaultLaytout from "../layouts/DefaultLayout";
import RegisterPage from "../pages/RegisterPage";
import RegistroProvider from "@/contexts/RegistroContext";
import PaginaNaoEncontrada from "@/pages/PaginaNaoEncontrada";
import ProtectedRoute from "./ProtectRoute";
import RedirectRoute from "./RedirectRoute";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RedirectRoute>
              <LoginLayout>
                <LoginPage />
              </LoginLayout>
            </RedirectRoute>
          }
        />
        <Route
          path="/register"
          element={
            <RegistroProvider>
              <RedirectRoute>
                <LoginLayout>
                  <RegisterPage />
                </LoginLayout>
              </RedirectRoute>
            </RegistroProvider>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DefaultLaytout>
                <DashBoard />
              </DefaultLaytout>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<PaginaNaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}
