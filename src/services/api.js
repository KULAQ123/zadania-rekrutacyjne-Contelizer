// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://gorest.co.in/public/v2",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
