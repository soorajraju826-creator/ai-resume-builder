import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";
import {
  getResumeById,
  updateResume,
} from "../services/resumeService";

function ResumeEdit() {
  const { id } = useParams();
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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResume();
  }, []);

  const fetchResume = async () => {
    try {
      const response = await getResumeById(id);
      const resume = response.data.data;

      setResumeData({
        name: resume.name || "",
        email: resume.email || "",
        phone: resume.phone || "",
        summary: resume.summary || "",
        skills: (resume.skills || []).join("\n"),
        education: (resume.education || []).join("\n"),
        experience: (resume.experience || []).join("\n"),
        projects: (resume.projects || []).join("\n"),
      });
    } catch (error) {
      console.log(error);
      alert("Unable to load resume.");
      navigate("/dashboard");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    try {
      const updatedResume = {
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

      await updateResume(id, updatedResume);

      alert("Resume updated successfully!");

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Failed to update resume."
      );

    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Loading Resume...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-8">
          Edit Resume
        </h1>

        <div className="grid lg:grid-cols-2 gap-8">

          <ResumeForm
            resumeData={resumeData}
            setResumeData={setResumeData}
            handleSave={handleUpdate}
            buttonText="Update Resume"
          />

          <ResumePreview
            resumeData={resumeData}
          />

        </div>

      </div>

    </div>
  );
}

export default ResumeEdit;