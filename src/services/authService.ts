import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL + "/api/auth";

export const login = async (email: string, password: string) => {
  return axios.post(`${API_URL}/login`, { email, password });
};

export const signup = async (email: string, password: string) => {
  return axios.post(`${API_URL}/signup`, { email, password });
};