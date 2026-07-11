import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FileText, PlusCircle, LogOut } from "lucide-react";
import { getResumes } from "../services/resumeService";

function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      const response = await getResumes();
      setResumes(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-white shadow">

        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between">

          <div>
            <h1 className="text-3xl font-bold">
              Welcome,
              <span className="text-blue-600">
                {" "}
                {user?.name}
              </span>
            </h1>

            <p className="text-gray-500">
              Build ATS Friendly Resumes
            </p>

          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-lg flex items-center gap-2"
          >
            <LogOut size={18}/>
            Logout
          </button>

        </div>

      </div>

      <div className="max-w-7xl mx-auto px-8 py-10">

        <button
          onClick={() => navigate("/resume-builder")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl flex items-center gap-2"
        >
          <PlusCircle size={20}/>
          Create Resume
        </button>

        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-6">
            My Resumes
          </h2>

          {resumes.length === 0 ? (

            <div className="bg-white rounded-xl p-8 text-center shadow">

              No resumes yet.

            </div>

          ) : (

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {resumes.map((resume) => (

                <div
                  key={resume._id}
                  className="bg-white rounded-xl shadow p-6"
                >

                  <FileText
                    size={40}
                    className="text-blue-600"
                  />

                  <h3 className="text-xl font-bold mt-4">
                    {resume.name}
                  </h3>

                  <p className="text-gray-500">
                    {resume.email}
                  </p>

                  <button
                    className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
                  >
                    View Resume
                  </button>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;