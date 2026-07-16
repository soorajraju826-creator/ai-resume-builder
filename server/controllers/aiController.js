const {
  generateProfessionalSummary,
  checkATSScore,
  generateCoverLetter,
  improveExperience,
  improveSkills,
  checkJobMatch,
} = require("../services/geminiService");

// ========================================
// AI Summary
// ========================================

const generateSummary = async (req, res) => {
  try {

    const summary = await generateProfessionalSummary(req.body);

    res.status(200).json({
      success: true,
      summary,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to generate summary.",
    });

  }
};

// ========================================
// ATS Checker
// ========================================

const checkATS = async (req, res) => {
  try {

    const result = await checkATSScore(req.body);

    res.status(200).json({
      success: true,
      result: JSON.parse(result),
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to analyze ATS score.",
    });

  }
};

// ========================================
// Cover Letter
// ========================================

const generateLetter = async (req, res) => {
  try {

    const coverLetter = await generateCoverLetter(req.body);

    res.status(200).json({
      success: true,
      coverLetter,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to generate cover letter.",
    });

  }
};

// ========================================
// Improve Experience
// ========================================

const improveResumeExperience = async (req, res) => {
  try {

    const experience = await improveExperience(
      req.body.experience
    );

    res.status(200).json({
      success: true,
      experience,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to improve experience.",
    });

  }
};

// ========================================
// Improve Skills
// ========================================

const improveResumeSkills = async (req, res) => {
  try {

    const skills = await improveSkills(
      req.body.skills
    );

    res.status(200).json({
      success: true,
      skills,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to improve skills.",
    });

  }
};

// ========================================
// Job Match
// ========================================

const jobMatch = async (req, res) => {
  try {

    const result = await checkJobMatch(req.body);

    res.status(200).json({
      success: true,
      result: JSON.parse(result),
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to analyze job match.",
    });

  }
};

module.exports = {
  generateSummary,
  checkATS,
  generateLetter,
  improveResumeExperience,
  improveResumeSkills,
  jobMatch,
};