import { FileText, Sparkles, Download } from "lucide-react";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-8 py-24 flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* Left Side */}
        <div className="max-w-2xl">

          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
            <Sparkles size={18} />
            <span>AI Powered Resume Builder</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
            Build Your
            <span className="block text-yellow-300">
              Dream Resume
            </span>
            in Minutes
          </h1>

          <p className="mt-8 text-xl text-blue-100 leading-8">
            Create ATS-friendly resumes with AI.
            Choose beautiful templates, improve your resume with one click,
            and download professional PDFs instantly.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition duration-300">
              Create Resume Free
            </button>

            <button className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition duration-300">
              View Templates
            </button>

          </div>

          <div className="flex flex-wrap gap-8 mt-10 text-blue-100">

            <div className="flex items-center gap-2">
              <FileText size={20} />
              ATS Friendly
            </div>

            <div className="flex items-center gap-2">
              <Download size={20} />
              Free PDF Download
            </div>

            <div className="flex items-center gap-2">
              <Sparkles size={20} />
              AI Writing Assistant
            </div>

          </div>

        </div>

        {/* Right Side - Resume Preview */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 w-[360px] rotate-2">

          <div className="text-gray-800">

            <h2 className="text-3xl font-bold">
              Daniel Thompson
            </h2>

            <p className="text-blue-600 font-semibold mt-1">
              Senior Software Engineer
            </p>

            <hr className="my-5" />

            <h3 className="font-bold mb-2">
              Professional Summary
            </h3>

            <p className="text-sm text-gray-600 mb-6">
              Experienced software engineer with 6+ years of expertise
              in building scalable web applications using React,
              Node.js, Express.js, and MongoDB.
            </p>

            <h3 className="font-bold mb-2">
              Skills
            </h3>

            <div className="flex flex-wrap gap-2 mb-6">

              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                React
              </span>

              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                JavaScript
              </span>

              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                Node.js
              </span>

              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                MongoDB
              </span>

              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                Express.js
              </span>

            </div>

            <h3 className="font-bold mb-2">
              Experience
            </h3>

            <div className="bg-gray-100 rounded-lg p-4">

              <p className="font-semibold">
                Senior Full Stack Developer
              </p>

              <p className="text-sm text-gray-500">
                NexaTech Solutions
              </p>

              <p className="text-sm text-gray-500">
                2021 – Present
              </p>

            </div>

            <h3 className="font-bold mt-6 mb-2">
              Education
            </h3>

            <div className="bg-gray-100 rounded-lg p-4">

              <p className="font-semibold">
                B.Sc. Computer Science
              </p>

              <p className="text-sm text-gray-500">
                Stanford University
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;