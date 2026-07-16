import {
  PlusCircle,
  FileText,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function QuickActions() {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-10">

      <h2 className="text-2xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid md:grid-cols-3 gap-5">

        <button
          onClick={() => navigate("/resume-builder")}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-5 flex flex-col items-center gap-3 transition"
        >
          <PlusCircle size={34} />
          <span>Create Resume</span>
        </button>

        <button
          onClick={() => navigate("/cover-letter")}
          className="bg-green-600 hover:bg-green-700 text-white rounded-xl p-5 flex flex-col items-center gap-3 transition"
        >
          <FileText size={34} />
          <span>Cover Letter</span>
        </button>

        <button
          onClick={() => navigate("/resume-builder")}
          className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl p-5 flex flex-col items-center gap-3 transition"
        >
          <Sparkles size={34} />
          <span>AI Resume Builder</span>
        </button>

      </div>

    </div>
  );
}

export default QuickActions;