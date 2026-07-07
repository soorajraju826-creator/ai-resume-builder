import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />

      <section className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center py-32 px-6">

        <h1 className="text-6xl font-extrabold leading-tight">

          Build Professional

          <span className="text-blue-600">
            {" "}AI Resumes
          </span>

        </h1>

        <p className="mt-8 text-xl text-gray-600 max-w-3xl">

          Create ATS-friendly resumes using AI.

          Design beautiful resumes, edit them easily,
          and download professional PDFs instantly.

        </p>

        <div className="mt-10 flex gap-6">

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition">

            Create Resume Free

          </button>

          <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition">

            View Templates

          </button>

        </div>

      </section>

    </div>
  );
}

export default Home;