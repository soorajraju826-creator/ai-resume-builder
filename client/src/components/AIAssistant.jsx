import {
  Sparkles,
  CheckCircle,
  Briefcase,
  Brain,
  Target,
  FileText,
} from "lucide-react";

function AIAssistant({
  onGenerateSummary,
  onCheckATS,
  onImproveExperience,
  onImproveSkills,
  onJobMatch,

  aiLoading,
  atsLoading,
  experienceLoading,
  skillsLoading,
  jobMatchLoading,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        🤖 AI Resume Assistant
      </h2>

      <div className="space-y-4">

        {/* Summary */}

        <button
          onClick={onGenerateSummary}
          disabled={aiLoading}
          className="w-full flex items-center gap-4 p-4 rounded-xl border hover:bg-blue-50 transition"
        >
          <Sparkles
            size={24}
            className="text-blue-600"
          />

          <div className="text-left">

            <h3 className="font-semibold">
              Generate Professional Summary
            </h3>

            <p className="text-sm text-gray-500">
              AI writes an ATS-friendly summary.
            </p>

          </div>

        </button>

        {/* ATS */}

        <button
          onClick={onCheckATS}
          disabled={atsLoading}
          className="w-full flex items-center gap-4 p-4 rounded-xl border hover:bg-green-50 transition"
        >
          <CheckCircle
            size={24}
            className="text-green-600"
          />

          <div className="text-left">

            <h3 className="font-semibold">
              ATS Resume Checker
            </h3>

            <p className="text-sm text-gray-500">
              Analyze ATS compatibility.
            </p>

          </div>

        </button>

        {/* Improve Experience */}

        <button
          onClick={onImproveExperience}
          disabled={experienceLoading}
          className="w-full flex items-center gap-4 p-4 rounded-xl border hover:bg-purple-50 transition"
        >
          <Briefcase
            size={24}
            className="text-purple-600"
          />

          <div className="text-left">

            <h3 className="font-semibold">
              Improve Experience
            </h3>

            <p className="text-sm text-gray-500">
              Rewrite experience professionally.
            </p>

          </div>

        </button>

        {/* Improve Skills */}

        <button
          onClick={onImproveSkills}
          disabled={skillsLoading}
          className="w-full flex items-center gap-4 p-4 rounded-xl border hover:bg-indigo-50 transition"
        >
          <Brain
            size={24}
            className="text-indigo-600"
          />

          <div className="text-left">

            <h3 className="font-semibold">
              Improve Skills
            </h3>

            <p className="text-sm text-gray-500">
              Expand and optimize your skills.
            </p>

          </div>

        </button>

        {/* Job Match */}

        <button
          onClick={onJobMatch}
          disabled={jobMatchLoading}
          className="w-full flex items-center gap-4 p-4 rounded-xl border hover:bg-orange-50 transition"
        >
          <Target
            size={24}
            className="text-orange-600"
          />

          <div className="text-left">

            <h3 className="font-semibold">
              Job Match Score
            </h3>

            <p className="text-sm text-gray-500">
              Compare resume with a job description.
            </p>

          </div>

        </button>

        {/* Cover Letter */}

        <button
          disabled
          className="w-full flex items-center gap-4 p-4 rounded-xl border bg-gray-100 cursor-not-allowed"
        >
          <FileText
            size={24}
            className="text-gray-500"
          />

          <div className="text-left">

            <h3 className="font-semibold text-gray-600">
              Cover Letter Generator
            </h3>

            <p className="text-sm text-gray-500">
              Open from the sidebar.
            </p>

          </div>

        </button>

      </div>

    </div>
  );
}

export default AIAssistant;