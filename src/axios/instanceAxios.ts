import axios from "axios";

const instance = axios.create({
  baseURL: process.env.url || "http://localhost:5000",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, POST, PATCH, DELETE",
  },
});

export default instance;
