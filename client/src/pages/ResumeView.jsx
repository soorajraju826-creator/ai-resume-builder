import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getResumeById } from "../services/resumeService";

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
      alert(error.response?.data?.message || "Unable to load resume");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-semibold">
        Loading Resume...
      </div>
    );
  }

  if (!resume) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-semibold">
        Resume Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-4xl mx-auto">

        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 mb-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
        >
          <ArrowLeft size={20} />
          Back to Dashboard
        </button>

        <div className="bg-white shadow-xl rounded-xl p-10">

          <h1 className="text-4xl font-bold text-center">
            {resume.name}
          </h1>

          <div className="text-center mt-3 text-gray-600">
            <p>{resume.email}</p>
            <p>{resume.phone}</p>
          </div>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold mb-3">
            Professional Summary
          </h2>

          <p className="whitespace-pre-line">
            {resume.summary || "No summary added."}
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold mb-3">
            Skills
          </h2>

          <ul className="list-disc pl-6">
            {resume.skills?.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold mb-3">
            Education
          </h2>

          <ul className="list-disc pl-6">
            {resume.education?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold mb-3">
            Experience
          </h2>

          <ul className="list-disc pl-6">
            {resume.experience?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold mb-3">
            Projects
          </h2>

          <ul className="list-disc pl-6">
            {resume.projects?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

        </div>

      </div>

    </div>
  );
}

export default ResumeView;