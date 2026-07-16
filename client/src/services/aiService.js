import API from "./api";

const getAuthConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// ========================================
// Generate Professional Summary
// ========================================

export const generateSummary = async (resumeData) => {
  return await API.post(
    "/ai/generate-summary",
    resumeData,
    getAuthConfig()
  );
};

// ========================================
// ATS Resume Checker
// ========================================

export const checkATS = async (resumeData) => {
  return await API.post(
    "/ai/check-ats",
    resumeData,
    getAuthConfig()
  );
};

// ========================================
// Generate Cover Letter
// ========================================

export const generateCoverLetter = async (data) => {
  return await API.post(
    "/ai/generate-cover-letter",
    data,
    getAuthConfig()
  );
};

// ========================================
// Improve Experience
// ========================================

export const improveExperience = async (experience) => {
  return await API.post(
    "/ai/improve-experience",
    { experience },
    getAuthConfig()
  );
};

// ========================================
// Improve Skills
// ========================================

export const improveSkills = async (skills) => {
  return await API.post(
    "/ai/improve-skills",
    { skills },
    getAuthConfig()
  );
};

// ========================================
// Job Match Score
// ========================================

export const checkJobMatch = async (data) => {
  return await API.post(
    "/ai/job-match",
    data,
    getAuthConfig()
  );
};