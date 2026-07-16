import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Pencil,
  Download,
  Mail,
  Phone,
} from "lucide-react";

import AppLayout from "../components/AppLayout";
import { getResumeById } from "../services/resumeService";
import { downloadResumePDF } from "../services/pdfService";

function ResumeView() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResume();
  }, []);

  const fetchResume = async () => {
    try {
      const response = await getResumeById(id);
      setResume(response.data.data);
    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.message ||
          "Unable to load resume."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    downloadResumePDF(
      "resume-view",
      `${resume.name || "Resume"}.pdf`
    );
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

  if (!resume) {
    return (
      <AppLayout>
        <div className="text-center py-32 text-2xl font-bold">
          Resume Not Found
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      {/* Top Buttons */}

      <div className="flex flex-wrap gap-4 justify-between items-center mb-8">

        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-5 py-3 rounded-xl"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="flex gap-3">

          <button
            onClick={() =>
              navigate(`/resume/edit/${resume._id}`)
            }
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl flex items-center gap-2"
          >
            <Pencil size={18} />
            Edit
          </button>

          <button
            onClick={handleDownload}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-2"
          >
            <Download size={18} />
            Download PDF
          </button>

        </div>

      </div>

      {/* Resume */}

      <div
        id="resume-view"
        className="bg-white shadow-xl rounded-2xl p-10 max-w-5xl mx-auto"
      >
        {/* Header */}

        <div className="text-center border-b pb-8">

          <h1 className="text-5xl font-bold">
            {resume.name}
          </h1>

          <div className="flex justify-center flex-wrap gap-8 mt-5 text-gray-600">

            <div className="flex items-center gap-2">
              <Mail size={18} />
              {resume.email}
            </div>

            <div className="flex items-center gap-2">
              <Phone size={18} />
              {resume.phone}
            </div>

          </div>

        </div>

        {/* Summary */}

        <section className="mt-10">

          <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-4">
            Professional Summary
          </h2>

          <p className="leading-8 whitespace-pre-line text-gray-700">
            {resume.summary || "No summary available."}
          </p>

        </section>

        {/* Skills */}

        <section className="mt-10">

          <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-4">
            Skills
          </h2>

          <div className="flex flex-wrap gap-3">

            {resume.skills?.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}

          </div>

        </section>

        {/* Education */}

        <section className="mt-10">

          <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-4">
            Education
          </h2>

          <ul className="list-disc pl-6 space-y-2">

            {resume.education?.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}

          </ul>

        </section>

        {/* Experience */}

        <section className="mt-10">

          <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-4">
            Experience
          </h2>

          <ul className="list-disc pl-6 space-y-2">

            {resume.experience?.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}

          </ul>

        </section>

        {/* Projects */}

        <section className="mt-10">

          <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-4">
            Projects
          </h2>

          <ul className="list-disc pl-6 space-y-2">

            {resume.projects?.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}

          </ul>

        </section>

      </div>
    </AppLayout>
  );
}

export default ResumeView;