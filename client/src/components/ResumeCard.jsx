import {
  FileText,
  Trash2,
  Pencil,
  Eye,
  Download,
  CalendarDays,
  Star,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function ResumeCard({ resume, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden">

      {/* Header */}

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-5 text-white">

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-3">

            <FileText size={34} />

            <div>

              <h2 className="text-xl font-bold">
                {resume.name}
              </h2>

              <p className="text-blue-100 text-sm">
                {resume.email}
              </p>

            </div>

          </div>

          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-xs font-bold">
            Resume
          </span>

        </div>

      </div>

      {/* Body */}

      <div className="p-6">

        <div className="space-y-4">

          <div className="flex justify-between">

            <span className="text-gray-500">
              Phone
            </span>

            <span className="font-medium">
              {resume.phone}
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-gray-500">
              Template
            </span>

            <span className="flex items-center gap-1 text-green-600 font-medium">

              <Star size={16} />

              Classic

            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-gray-500">
              ATS Score
            </span>

            <span className="font-bold text-green-600">
              --
            </span>

          </div>

          <div className="flex items-center gap-2 text-gray-500">

            <CalendarDays size={16} />

            <span className="text-sm">

              Updated{" "}

              {new Date(
                resume.updatedAt
              ).toLocaleDateString()}

            </span>

          </div>

        </div>

        {/* Actions */}

        <div className="grid grid-cols-4 gap-3 mt-8">

          <button
            onClick={() =>
              navigate(`/resume/${resume._id}`)
            }
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 flex justify-center"
          >
            <Eye size={18} />
          </button>

          <button
            onClick={() =>
              navigate(`/resume/edit/${resume._id}`)
            }
            className="bg-green-600 hover:bg-green-700 text-white rounded-lg py-3 flex justify-center"
          >
            <Pencil size={18} />
          </button>

          <button
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg py-3 flex justify-center"
          >
            <Download size={18} />
          </button>

          <button
            onClick={() =>
              onDelete(resume._id)
            }
            className="bg-red-600 hover:bg-red-700 text-white rounded-lg py-3 flex justify-center"
          >
            <Trash2 size={18} />
          </button>

        </div>

      </div>

    </div>
  );
}

export default ResumeCard;