import { useEffect, useState } from "react";
import AppLayout from "../components/AppLayout";
import { generateCoverLetter } from "../services/aiService";
import { getResumes } from "../services/resumeService";
import jsPDF from "jspdf";

function CoverLetter() {
  const [resumes, setResumes] = useState([]);
  const [selectedResume, setSelectedResume] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    company: "",
    summary: "",
    skills: "",
    experience: "",
  });

  const [coverLetter, setCoverLetter] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadResumes();
  }, []);

  const loadResumes = async () => {
    try {
      const response = await getResumes();
      setResumes(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleResumeSelect = (e) => {
    const id = e.target.value;

    setSelectedResume(id);

    const resume = resumes.find((item) => item._id === id);

    if (!resume) return;

    setFormData({
      name: resume.name,
      jobTitle: "",
      company: "",
      summary: resume.summary,
      skills: resume.skills.join(", "),
      experience: resume.experience.join("\n"),
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenerate = async () => {
    try {
      setLoading(true);

      const response = await generateCoverLetter(formData);

      setCoverLetter(response.data.coverLetter);

    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
        "Failed to generate cover letter."
      );

    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(coverLetter);
      alert("Cover letter copied!");
    } catch (error) {
      alert("Unable to copy.");
    }
  };

  const handleDownload = () => {
    const doc = new jsPDF();

    doc.setFontSize(12);

    const lines = doc.splitTextToSize(
      coverLetter,
      180
    );

    doc.text(lines, 15, 20);

    doc.save("CoverLetter.pdf");
  };

  return (
    <AppLayout>

      <h1 className="text-4xl font-bold mb-8">
        AI Cover Letter Generator
      </h1>

      <div className="grid lg:grid-cols-2 gap-8">

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <label className="font-semibold">
            Select Resume
          </label>

          <select
            value={selectedResume}
            onChange={handleResumeSelect}
            className="w-full border rounded-lg p-3 mt-2 mb-5"
          >

            <option value="">
              Select Resume
            </option>

            {resumes.map((resume) => (

              <option
                key={resume._id}
                value={resume._id}
              >
                {resume.name}
              </option>

            ))}

          </select>

          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mb-5"
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mb-5"
          />

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
          >
            {loading
              ? "Generating..."
              : "Generate Cover Letter"}
          </button>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-2xl font-bold">
              Cover Letter
            </h2>

            <div className="flex gap-3">

              <button
                onClick={handleCopy}
                disabled={!coverLetter}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg disabled:bg-gray-400"
              >
                Copy
              </button>

              <button
                onClick={handleDownload}
                disabled={!coverLetter}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg disabled:bg-gray-400"
              >
                PDF
              </button>

            </div>

          </div>

          <div className="whitespace-pre-line leading-8">

            {coverLetter ||
              "Your AI-generated cover letter will appear here."}

          </div>

        </div>

      </div>

    </AppLayout>
  );
}

export default CoverLetter;