import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginLayout from "../layouts/LoginLayout";
import DefaultLaytout from "../layouts/DefaultLayout";
import { RegistroProvider } from "@/contexts/registroContext";
import ProtectedRoute from "./RotasProtegidas";
import RedirectRoute from "./RedirecionamentoRota";
import Loading from "@/components/ui/Loaders/Loading";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const DashBoard = lazy(() => import("../pages/DashBoard"));
const PaginaNaoEncontrada = lazy(() => import("../pages/PaginaNaoEncontrada"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
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
              <LoginLayout>
                <RegistroProvider>
                  <RegisterPage />
                </RegistroProvider>
              </LoginLayout>
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
          <Route
            path="/dashboard/admin"
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
      </Suspense>
    </BrowserRouter>
  );
}
