import axios from "axios";


export const baseApi = axios.create({
  // baseURL: "http://localhost:5000/api",
  // baseURL: "https://techzu-server.vercel.app/api",
  // baseURL: "https://techzu-server.onrender.com/api",
  baseURL: import.meta.env.VITE_API,
});
