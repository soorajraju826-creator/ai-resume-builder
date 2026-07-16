const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// ========================================
// Generate Professional Summary
// ========================================

const generateProfessionalSummary = async (resumeData) => {
  try {
    const prompt = `
You are an expert resume writer.

Write a professional ATS-friendly resume summary.

Requirements:
- 80 to 120 words
- Professional English
- No bullet points
- Highlight strengths
- Return ONLY the summary.

Resume Information

Name:
${resumeData.name}

Skills:
${resumeData.skills}

Education:
${resumeData.education}

Experience:
${resumeData.experience}

Projects:
${resumeData.projects}
`;

    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL,
      contents: prompt,
    });

    return response.text;

  } catch (error) {

    console.error("========== SUMMARY ERROR ==========");
    console.error(error);
    console.error("==================================");

    throw error;

  }
};

// ========================================
// ATS Resume Checker
// ========================================

const checkATSScore = async (resumeData) => {
  try {

    const prompt = `
You are an ATS Resume Analyzer.

Analyze this resume.

Return ONLY valid JSON.

Example:

{
  "score":86,
  "strengths":[
    "Professional summary is clear",
    "Relevant technical skills"
  ],
  "improvements":[
    "Add measurable achievements",
    "Include more keywords"
  ]
}

Resume

Summary:
${resumeData.summary}

Skills:
${resumeData.skills}

Education:
${resumeData.education}

Experience:
${resumeData.experience}

Projects:
${resumeData.projects}
`;

    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL,
      contents: prompt,
    });

    return response.text;

  } catch (error) {

    console.error("========== ATS ERROR ==========");
    console.error(error);
    console.error("===============================");

    throw error;

  }
};

// ========================================
// Cover Letter
// ========================================

const generateCoverLetter = async (data) => {
  try {

    const prompt = `
Write a professional ATS-friendly cover letter.

Applicant:
${data.name}

Job Title:
${data.jobTitle}

Company:
${data.company}

Summary:
${data.summary}

Skills:
${data.skills}

Experience:
${data.experience}

Requirements

- Professional
- 300-400 words
- Return ONLY the cover letter.
`;

    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL,
      contents: prompt,
    });

    return response.text;

  } catch (error) {

    console.error("======= COVER LETTER ERROR =======");
    console.error(error);
    console.error("==================================");

    throw error;

  }
};

// ========================================
// Improve Experience
// ========================================

const improveExperience = async (experience) => {
  try {

    const prompt = `
Rewrite the following resume experience.

Requirements

- ATS Friendly
- Professional English
- Strong action verbs
- Keep original meaning
- Return ONLY the improved experience.

Experience

${experience}
`;

    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL,
      contents: prompt,
    });

    return response.text;

  } catch (error) {

    console.error("======= EXPERIENCE ERROR =======");
    console.error(error);
    console.error("================================");

    throw error;

  }
};

// ========================================
// Improve Skills
// ========================================

const improveSkills = async (skills) => {
  try {

    const prompt = `
You are an expert resume writer.

Improve the following skills list.

Requirements

- Keep existing skills
- Add closely related professional skills when appropriate
- ATS Friendly
- One skill per line
- Return ONLY the improved skills

Skills

${skills}
`;

    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL,
      contents: prompt,
    });

    return response.text;

  } catch (error) {

    console.error("========== SKILLS ERROR ==========");
    console.error(error);
    console.error("==================================");

    throw error;

  }
};

// ========================================
// Job Match Score
// ========================================

const checkJobMatch = async (data) => {
  try {

    const prompt = `
You are an ATS Resume Expert.

Compare the resume with the job description.

Return ONLY valid JSON.

Example

{
  "matchScore":92,
  "matchedSkills":[
    "React",
    "Node.js",
    "MongoDB"
  ],
  "missingSkills":[
    "Docker",
    "AWS"
  ],
  "suggestions":[
    "Mention REST APIs",
    "Add Docker",
    "Include measurable achievements"
  ]
}

Resume

Summary:
${data.summary}

Skills:
${data.skills}

Experience:
${data.experience}

Projects:
${data.projects}

-----------------------------------

Job Description

${data.jobDescription}
`;

    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL,
      contents: prompt,
    });

    return response.text;

  } catch (error) {

    console.error("======= JOB MATCH ERROR =======");
    console.error(error);
    console.error("===============================");

    throw error;

  }
};

module.exports = {
  generateProfessionalSummary,
  checkATSScore,
  generateCoverLetter,
  improveExperience,
  improveSkills,
  checkJobMatch,
};