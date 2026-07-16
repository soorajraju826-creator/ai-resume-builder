const express = require("express");

const {
  generateSummary,
  checkATS,
  generateLetter,
  improveResumeExperience,
  improveResumeSkills,
  jobMatch,
} = require("../controllers/aiController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// ========================================
// Generate Professional Summary
// ========================================

router.post(
  "/ai/generate-summary",
  protect,
  generateSummary
);

// ========================================
// ATS Resume Checker
// ========================================

router.post(
  "/ai/check-ats",
  protect,
  checkATS
);

// ========================================
// Generate Cover Letter
// ========================================

router.post(
  "/ai/generate-cover-letter",
  protect,
  generateLetter
);

// ========================================
// Improve Experience
// ========================================

router.post(
  "/ai/improve-experience",
  protect,
  improveResumeExperience
);

// ========================================
// Improve Skills
// ========================================

router.post(
  "/ai/improve-skills",
  protect,
  improveResumeSkills
);

// ========================================
// Job Match Score
// ========================================

router.post(
  "/ai/job-match",
  protect,
  jobMatch
);

module.exports = router;