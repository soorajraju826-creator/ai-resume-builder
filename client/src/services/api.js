import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-resume-builder-3272.onrender.com/api",
});

export default API;