import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginLayout from "../layouts/LoginLayout";
import DefaultLaytout from "../layouts/DefaultLayout";
import RegistroProvider from "@/contexts/RegistroContext";
import ProtectedRoute from "./ProtectRoute";
import RedirectRoute from "./RedirectRoute";
import Loading from "@/components/ui/Loading";

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
              <RegistroProvider>
                <LoginLayout>
                  <RegisterPage />
                </LoginLayout>
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
      </Suspense>
    </BrowserRouter>
  );
}
