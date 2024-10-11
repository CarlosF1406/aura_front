import axios from "axios"

export const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Origin": '*',
    //"Authorization": `Bearer ${localStorage.getItem(`@token`)}`
    //"x-access-token": localStorage.getItem("@TOKEN_KEY") || null
  },
  validateStatus: (status) => {
    return status < 500;
  }
})

export const getConnection = async () => {
  const { data, status } = await http.get("/");
  return { data, status }
};


export type TResponseData = {
  error?: string;
  data?: any;
  status?: number;
  statusText?: string;
  token?: string;
};