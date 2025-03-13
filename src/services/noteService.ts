import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL + "/api/notes";

export const uploadNote = async (noteData: any, token: string) => {
  return axios.post(`${API_URL}/upload-note`, noteData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getNotes = async () => {
  return axios.get(`${API_URL}/notes`);
};