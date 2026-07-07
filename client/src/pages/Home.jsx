function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 bg-white shadow">

        <h1 className="text-3xl font-bold text-blue-600">
          AI Resume Builder
        </h1>

        <div className="space-x-4">
          <button className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50">
            Login
          </button>

          <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
            Register
          </button>
        </div>

      </nav>

      {/* Hero Section */}

      <section className="flex flex-col items-center justify-center text-center mt-24 px-6">

        <h2 className="text-6xl font-extrabold text-gray-900">
          Build Professional
          <span className="text-blue-600"> AI Resumes</span>
        </h2>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl">
          Create ATS-friendly resumes in minutes using AI.
          Choose beautiful templates, edit with ease,
          and download instantly.
        </p>

        <div className="mt-10 flex gap-5">

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold">
            Create Resume Free
          </button>

          <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50">
            View Templates
          </button>

        </div>

      </section>

    </div>
  );
}

export default Home;