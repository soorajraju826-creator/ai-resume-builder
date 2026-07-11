const Resume = require("../models/Resume");

// ================= CREATE RESUME =================
const createResume = async (req, res) => {
    try {

        console.log("========== CREATE RESUME REQUEST ==========");
        console.log("User:", req.user);
        console.log("Body:", req.body);

        req.body.user = req.user.id;

        const resume = await Resume.create(req.body);

        res.status(201).json({
            success: true,
            data: resume
        });

    } catch (error) {

        console.log("========== CREATE RESUME ERROR ==========");
        console.log(error);

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

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// ================= GET RESUME BY ID =================
const getResumeById = async (req, res) => {
    try {

        const resume = await Resume.findOne({
            _id: req.params.id,
            user: req.user.id
        });

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

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// ================= UPDATE RESUME =================
const updateResume = async (req, res) => {
    try {

        const resume = await Resume.findOneAndUpdate(
            {
                _id: req.params.id,
                user: req.user.id
            },
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!resume) {
            return res.status(404).json({
                success: false,
                message: "Resume not found or unauthorized"
            });
        }

        res.status(200).json({
            success: true,
            data: resume
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// ================= DELETE RESUME =================
const deleteResume = async (req, res) => {
    try {

        const resume = await Resume.findOneAndDelete({
            _id: req.params.id,
            user: req.user.id
        });

        if (!resume) {
            return res.status(404).json({
                success: false,
                message: "Resume not found or unauthorized"
            });
        }

        res.status(200).json({
            success: true,
            message: "Resume deleted successfully"
        });

    } catch (error) {

        console.log(error);

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