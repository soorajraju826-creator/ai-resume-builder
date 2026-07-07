const express = require("express");

const {
    createResume,
    getAllResumes,
    getResumeById,
    updateResume,
    deleteResume
} = require("../controllers/resumeController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/resume", protect, createResume);
router.get("/resume", protect, getAllResumes);
router.get("/resume/:id", protect, getResumeById);
router.put("/resume/:id", protect, updateResume);
router.delete("/resume/:id", protect, deleteResume);

module.exports = router;