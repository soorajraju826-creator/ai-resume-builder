import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ResumeHeader from "../components/ResumeHeader";
import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";
import ProgressCard from "../components/ProgressCard";
import TemplateSelector from "../components/TemplateSelector";
import AIAssistant from "../components/AIAssistant";
import ATSScoreCard from "../components/ATSScoreCard";
import AppLayout from "../components/AppLayout";

import { createResume } from "../services/resumeService";
import {
  generateSummary,
  checkATS,
} from "../services/aiService";

const STORAGE_KEY = "resumeDraft";

function ResumeBuilder() {
  const navigate = useNavigate();

  const [resumeData, setResumeData] = useState(() => {
    const draft = localStorage.getItem(STORAGE_KEY);

    if (draft) {
      return JSON.parse(draft);
    }

    return {
      name: "",
      email: "",
      phone: "",
      summary: "",
      skills: "",
      education: "",
      experience: "",
      projects: "",
    };
  });

  const [selectedTemplate, setSelectedTemplate] =
    useState("Classic");

  const [saved, setSaved] = useState(true);

  const [aiLoading, setAiLoading] = useState(false);

  const [atsLoading, setAtsLoading] = useState(false);

  const [atsResult, setAtsResult] = useState(null);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(resumeData)
    );

    setSaved(false);

    const timer = setTimeout(() => {
      setSaved(true);
    }, 500);

    return () => clearTimeout(timer);

  }, [resumeData]);

  // ============================
  // Generate AI Summary
  // ============================

  const handleGenerateSummary = async () => {
    try {

      setAiLoading(true);

      const response =
        await generateSummary(resumeData);

      setResumeData((prev) => ({
        ...prev,
        summary: response.data.summary,
      }));

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Failed to generate summary."
      );

    } finally {

      setAiLoading(false);

    }
  };

  // ============================
  // ATS Resume Checker
  // ============================

  const handleCheckATS = async () => {
    try {

      setAtsLoading(true);

      const response =
        await checkATS(resumeData);

      setAtsResult(response.data.result);

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Failed to analyze ATS score."
      );

    } finally {

      setAtsLoading(false);

    }
  };

  // ============================
  // Save Resume
  // ============================

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

      localStorage.removeItem(STORAGE_KEY);

      alert("Resume saved successfully!");

      navigate("/dashboard");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Failed to save resume."
      );

    }
  };

  return (
    <AppLayout>

      <ResumeHeader saved={saved} />

      <TemplateSelector
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
      />

      <ProgressCard
        resumeData={resumeData}
      />

      <div className="grid xl:grid-cols-2 gap-8 items-start">

        <div>

          <ResumeForm
            resumeData={resumeData}
            setResumeData={setResumeData}
            handleSave={handleSave}
          />

          <AIAssistant
            onGenerateSummary={handleGenerateSummary}
            onCheckATS={handleCheckATS}
            aiLoading={aiLoading}
            atsLoading={atsLoading}
          />

          <ATSScoreCard
            atsResult={atsResult}
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

export default ResumeBuilder;