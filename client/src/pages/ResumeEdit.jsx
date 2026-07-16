import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import AppLayout from "../components/AppLayout";
import ResumeHeader from "../components/ResumeHeader";
import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";
import TemplateSelector from "../components/TemplateSelector";

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

  const [selectedTemplate, setSelectedTemplate] =
    useState("Classic");

  const [saved, setSaved] = useState(true);

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

      alert(
        error.response?.data?.message ||
        "Unable to load resume."
      );

      navigate("/dashboard");

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {

    setSaved(false);

    const timer = setTimeout(() => {
      setSaved(true);
    }, 500);

    return () => clearTimeout(timer);

  }, [resumeData]);

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
      <AppLayout>
        <div className="text-center py-32 text-2xl font-bold">
          Loading Resume...
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>

      <ResumeHeader saved={saved} />

      <TemplateSelector
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
      />

      <div className="grid xl:grid-cols-2 gap-8 items-start">

        <div>

          <ResumeForm
            resumeData={resumeData}
            setResumeData={setResumeData}
            handleSave={handleUpdate}
            buttonText="Update Resume"
          />

        </div>

        <ResumePreview
          resumeData={resumeData}
          selectedTemplate={selectedTemplate}
        />

      </div>

    </AppLayout>
  );
}

export default ResumeEdit;