import axios from "axios";

const api = axios.create({
  baseURL: "https://69d86738aedd.ngrok-free.app", // backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
