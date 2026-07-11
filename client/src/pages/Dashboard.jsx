import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { getResumes } from "../services/resumeService";
import { FileText, LogOut, PlusCircle } from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext);

  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      const response = await getResumes();
      setResumes(response.data.data);
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Unable to load resumes");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}

      <div className="bg-white shadow">

        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">

          <div>

            <h1 className="text-3xl font-bold">
              Welcome,
              <span className="text-blue-600">
                {" "}
                {user?.name}
              </span>{" "}
              👋
            </h1>

            <p className="text-gray-500 mt-2">
              Manage all your resumes from one place.
            </p>

          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-lg"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>

      </div>

      {/* Body */}

      <div className="max-w-7xl mx-auto px-8 py-10">

        <button
          onClick={() => navigate("/resume-builder")}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl mb-10"
        >
          <PlusCircle size={22} />
          Create Resume
        </button>

        <h2 className="text-3xl font-bold mb-8">
          My Resumes
        </h2>

        {loading ? (

          <div className="bg-white rounded-xl shadow p-8 text-center">
            Loading...
          </div>

        ) : resumes.length === 0 ? (

          <div className="bg-white rounded-xl shadow p-8 text-center text-gray-500">
            No resumes found.
          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {resumes.map((resume) => (

              <div
                key={resume._id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border"
              >

                <FileText
                  size={45}
                  className="text-blue-600"
                />

                <h3 className="text-2xl font-bold mt-5">
                  {resume.name}
                </h3>

                <p className="text-gray-600 mt-2">
                  {resume.email}
                </p>

                <p className="text-gray-500">
                  {resume.phone}
                </p>

                <div className="mt-6 flex gap-3">

                  <button
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
                  >
                    View
                  </button>

                  <button
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
                  >
                    Edit
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default Dashboard;