import API from "./api";

const getAuthConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// Create Resume
export const createResume = async (resumeData) => {
  return await API.post("/resume", resumeData, getAuthConfig());
};

// Get All Resumes
export const getResumes = async () => {
  return await API.get("/resume", getAuthConfig());
};

// Get Single Resume
export const getResumeById = async (id) => {
  return await API.get(`/resume/${id}`, getAuthConfig());
};

// Update Resume
export const updateResume = async (id, resumeData) => {
  return await API.put(`/resume/${id}`, resumeData, getAuthConfig());
};

// Delete Resume
export const deleteResume = async (id) => {
  return await API.delete(`/resume/${id}`, getAuthConfig());
};