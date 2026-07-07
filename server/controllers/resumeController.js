const Resume = require("../models/Resume");

// ================= CREATE RESUME =================
const createResume = async (req, res) => {
    try {

        // Attach logged-in user's ID
        req.body.user = req.user.id;

        const resume = await Resume.create(req.body);

        res.status(201).json({
            success: true,
            data: resume
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// ================= GET ALL RESUMES =================
const getAllResumes = async (req, res) => {
    try {

        const resumes = await Resume.find({
            user: req.user.id
        });

        res.status(200).json({
            success: true,
            count: resumes.length,
            data: resumes
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// ================= GET RESUME BY ID =================
const getResumeById = async (req, res) => {
    try {

        const resume = await Resume.findById(req.params.id);

        if (!resume) {
            return res.status(404).json({
                success: false,
                message: "Resume not found"
            });
        }

        res.status(200).json({
            success: true,
            data: resume
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// ================= UPDATE RESUME =================
const updateResume = async (req, res) => {
    try {

        const resume = await Resume.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!resume) {
            return res.status(404).json({
                success: false,
                message: "Resume not found"
            });
        }

        res.status(200).json({
            success: true,
            data: resume
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// ================= DELETE RESUME =================
const deleteResume = async (req, res) => {
    try {

        const resume = await Resume.findByIdAndDelete(req.params.id);

        if (!resume) {
            return res.status(404).json({
                success: false,
                message: "Resume not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Resume deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createResume,
    getAllResumes,
    getResumeById,
    updateResume,
    deleteResume
};