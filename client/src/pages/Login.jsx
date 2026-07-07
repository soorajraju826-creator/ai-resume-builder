import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/auth/login", formData);

      // Save JWT Token
      localStorage.setItem("token", response.data.token);

      // Save User
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert(response.data.message);

      navigate("/dashboard");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Login failed"
      );

    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

        <h2 className="text-center text-blue-600 text-lg font-semibold mb-2">
          ✨ AI Resume Builder
        </h2>

        <h1 className="text-3xl font-bold text-center">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Login to continue building your resume.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          <div>

            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className="w-full border rounded-lg px-4 py-4 outline-none focus:ring-4 focus:ring-blue-200"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              required
              className="w-full border rounded-lg px-4 py-4 outline-none focus:ring-4 focus:ring-blue-200"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">

          Don't have an account?

          <Link
            to="/register"
            className="text-blue-600 ml-2 font-semibold hover:underline"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;