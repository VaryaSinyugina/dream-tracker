import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const loginRequest = (email, password) => {
  axios.post(`${API_URL}/login`, { email, password });
};

export const registerRequest = (name, email, password) => {
  axios.post(`${API_URL}/register`, { name, email, password });
};
