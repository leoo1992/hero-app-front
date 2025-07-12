import axios from "axios";

const api = axios.create({
  baseURL: "/",
  withCredentials: true,
});

let refreshTokenPromise: Promise<import("axios").AxiosResponse> | null = null;

export async function refreshTokenManualmente() {
  try {
    const resposta = await api.post("/auth/refresh");
    const novoToken = resposta.data.token;
    if (novoToken) {
      localStorage.setItem("token", novoToken);
      console.log("Token atualizado manualmente:", novoToken);
    }
    return novoToken;
  } catch (error) {
    console.error("Erro no refresh manual:", error);
    throw error;
  }
}

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (!refreshTokenPromise) {
        originalRequest._retry = true;
        refreshTokenPromise = api
          .post("/auth/refresh")
          .then((res) => {
            const novoToken = res.data.token;
            if (novoToken) {
              localStorage.setItem("token", novoToken);
            }
            refreshTokenPromise = null;
            return res;
          })
          .catch((err) => {
            refreshTokenPromise = null;
            throw err;
          });
      }
      await refreshTokenPromise;
      return api(originalRequest);
    }

    return Promise.reject(
      error instanceof Error
        ? error
        : new Error(error?.message || "Unknown error")
    );
  }
);

export default api;
