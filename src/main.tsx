import { createRoot } from "react-dom/client";
import "./styles/index.css";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./contexts/authContext";

/* if (import.meta.env.DEV) {
  const { trabalhador } = await import("./mocks/navegador");
  await trabalhador.start({ onUnhandledRequest: "bypass" });
} */

createRoot(document.getElementById("root")!).render(
  /*   <StrictMode> */
  <AuthProvider>
    <AppRoutes />
  </AuthProvider>
  /*  </StrictMode> */
);
