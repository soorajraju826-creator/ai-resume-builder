import API from "./api";

export const createResume = (resumeData) => {
  return API.post("/resume", resumeData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const getResumes = () => {
  return API.get("/resume", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};