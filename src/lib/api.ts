import axios from "axios";

const api = axios.create({
  baseURL: "/",
  withCredentials: true,
});

let precisaRefeshToken = false;

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const requisicaoOriginal = error.config;

    if (error.response?.status === 401 && !requisicaoOriginal._retry) {
      requisicaoOriginal._retry = true;

      try {
        if (!precisaRefeshToken) {
          precisaRefeshToken = true;
          await api.post("/auth/refresh");
          precisaRefeshToken = false;
        }

        return api(requisicaoOriginal);
      } catch (err) {
        console.error("Erro ao renovar token:", err);
        window.location.href = "/";
        return Promise.reject(
          err instanceof Error ? err : new Error(String(err))
        );
      }
    }

    return Promise.reject(
      error instanceof Error ? error : new Error(String(error))
    );
  }
);

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default api;
