import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import LoginLayout from "../layouts/LoginLayout";
import DashBoard from "../pages/DashBoard";
import DefaultLaytout from "../layouts/DefaultLayout";
import RegisterPage from "../pages/RegisterPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LoginLayout>
              <LoginPage />
            </LoginLayout>
          }
        />
        <Route
          path="/register"
          element={
            <LoginLayout>
              <RegisterPage />
            </LoginLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <DefaultLaytout>
              <DashBoard />
            </DefaultLaytout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
