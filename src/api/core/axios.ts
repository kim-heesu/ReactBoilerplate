import axios from "axios";

// 테스트 BASE_URL
// .env생성후 VITE_API_BASE_URL = https://692568c582b59600d72380f0.mockapi.io

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log(VITE_API_BASE_URL)

export const api = axios.create({
  baseURL: `${VITE_API_BASE_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});