import axios from "axios";

export const httpsClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
});
