import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  FileText,
} from "lucide-react";

import { AuthContext } from "../context/AuthContext";
import {
  getResumes,
  deleteResume,
} from "../services/resumeService";

import AppLayout from "../components/AppLayout";
import ResumeCard from "../components/ResumeCard";
import DashboardStats from "../components/DashboardStats";
import QuickActions from "../components/QuickActions";

function Dashboard() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      const response = await getResumes();
      setResumes(response.data.data);
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
        "Unable to load resumes."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this resume?"
    );

    if (!confirmDelete) return;

    try {
      await deleteResume(id);

      alert("Resume deleted successfully!");

      fetchResumes();

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Failed to delete resume."
      );

    }
  };

  const filteredResumes = useMemo(() => {
    return resumes.filter((resume) =>
      resume.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search, resumes]);

  return (
    <AppLayout>

      {/* Header */}

      <div className="mb-10">

        <h1 className="text-4xl font-bold">

          Welcome,

          <span className="text-blue-600">

            {" "}
            {user?.name}

          </span>

          👋

        </h1>

        <p className="text-gray-500 mt-2">
          Manage your AI-powered resumes.
        </p>

      </div>

      {/* Statistics */}

      <DashboardStats
        totalResumes={resumes.length}
      />

      {/* Quick Actions */}

      <QuickActions />

      {/* Search */}

      <div className="relative w-full md:w-96 mb-8">

        <Search
          className="absolute left-4 top-3.5 text-gray-400"
          size={20}
        />

        <input
          type="text"
          placeholder="Search Resume..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
        />

      </div>

      {/* Resume List */}

      {loading ? (

        <div className="bg-white rounded-2xl shadow p-12 text-center">

          Loading...

        </div>

      ) : filteredResumes.length === 0 ? (

        <div className="bg-white rounded-2xl shadow p-12 text-center">

          <FileText
            size={70}
            className="mx-auto text-gray-400"
          />

          <h2 className="text-3xl font-bold mt-6">
            No Resumes Found
          </h2>

          <p className="text-gray-500 mt-3">
            Create your first AI Resume.
          </p>

        </div>

      ) : (

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {filteredResumes.map((resume) => (

            <ResumeCard
              key={resume._id}
              resume={resume}
              onDelete={handleDelete}
            />

          ))}

        </div>

      )}

    </AppLayout>
  );
}

export default Dashboard;