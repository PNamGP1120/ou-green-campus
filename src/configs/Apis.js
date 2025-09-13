import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api";

export const endpoints = {
  login: "/auth/login/",
  refresh: "/auth/refresh/",
  register: "/auth/register/",
  me: "/users/me/",
  news: "/news/",
  projects: "/project-contests/",
  documents: "/documents/",
  feedback: "/feedbacks/",
  classify: "/ai/classify/",
  categories: "/categories/",
  tags: "/tags/",
  chatSessions: "/chat-sessions/",
};

const api = axios.create({
  baseURL: BASE_URL,
});

// Gắn token tự động
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
