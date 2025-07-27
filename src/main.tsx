import { loadStoredTheme } from "./utils/loadStoredTheme";
loadStoredTheme();

import { createRoot } from "react-dom/client";
import "./styles/index.css";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./contexts/authContext";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#ecfdf5",
          color: "#1e3a8a",
          border: "1px solid #1e3a8a",
          textAlign: "center",
          fontSize: ".875rem",
        },
        success: {
          iconTheme: {
            primary: "#1e3a8a",
            secondary: "#ecfdf5",
          },
        },
        error: {
          iconTheme: {
            primary: "#1e3a8a",
            secondary: "#ecfdf5",
          },
        },
      }}
    />
    <AppRoutes />
  </AuthProvider>
);
