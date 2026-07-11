import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";
import { createResume } from "../services/resumeService";

function ResumeBuilder() {
  const navigate = useNavigate();

  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    skills: "",
    education: "",
    experience: "",
    projects: "",
  });

  const handleSave = async () => {
    try {
      const data = {
        ...resumeData,

        skills: resumeData.skills
          .split("\n")
          .filter((item) => item.trim() !== ""),

        education: resumeData.education
          .split("\n")
          .filter((item) => item.trim() !== ""),

        experience: resumeData.experience
          .split("\n")
          .filter((item) => item.trim() !== ""),

        projects: resumeData.projects
          .split("\n")
          .filter((item) => item.trim() !== ""),
      };

      await createResume(data);

      alert("Resume saved successfully!");

      navigate("/dashboard");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Failed to save resume"
      );

    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-8">
          AI Resume Builder
        </h1>

        <div className="grid lg:grid-cols-2 gap-8">

          <ResumeForm
            resumeData={resumeData}
            setResumeData={setResumeData}
            handleSave={handleSave}
          />

          <ResumePreview
            resumeData={resumeData}
          />

        </div>

      </div>

    </div>
  );
}

export default ResumeBuilder;