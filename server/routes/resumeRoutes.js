const express = require("express");
const {
    createResume,
    getAllResumes,
    getResumeById,
    updateResume,
    deleteResume
} = require("../controllers/resumeController");

const router = express.Router();

router.post("/resume", createResume);

router.get("/resume", getAllResumes);

router.get("/resume/:id", getResumeById);

router.put("/resume/:id", updateResume);

router.delete("/resume/:id", deleteResume);

module.exports = router;