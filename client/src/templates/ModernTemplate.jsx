function ModernTemplate({ resumeData }) {
  const skills = (resumeData.skills || "")
    .split("\n")
    .filter((skill) => skill.trim() !== "");

  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-5xl mx-auto">

      {/* Header */}

      <div className="bg-slate-800 text-white p-10">

        <h1 className="text-4xl font-bold">
          {resumeData.name || "Your Name"}
        </h1>

        <div className="mt-3 flex flex-wrap gap-6 text-gray-300">

          <span>
            📧 {resumeData.email || "your@email.com"}
          </span>

          <span>
            📱 {resumeData.phone || "+91 9876543210"}
          </span>

        </div>

      </div>

      {/* Body */}

      <div className="grid md:grid-cols-3">

        {/* Left Sidebar */}

        <div className="bg-slate-100 p-8">

          <h2 className="text-lg font-bold border-b pb-2 mb-4">
            Skills
          </h2>

          <div className="space-y-2">

            {skills.length > 0 ? (

              skills.map((skill, index) => (

                <div
                  key={index}
                  className="bg-white rounded-lg px-3 py-2 shadow-sm"
                >
                  {skill}
                </div>

              ))

            ) : (

              <p className="text-gray-500">
                Skills
              </p>

            )}

          </div>

          <h2 className="text-lg font-bold border-b pb-2 mt-10 mb-4">
            Education
          </h2>

          <div className="whitespace-pre-line text-gray-700 leading-7">

            {resumeData.education ||
              "Education"}

          </div>

        </div>

        {/* Right Content */}

        <div className="md:col-span-2 p-10">

          <section>

            <h2 className="text-xl font-bold border-b pb-2 mb-3">
              Professional Summary
            </h2>

            <p className="text-gray-700 whitespace-pre-line leading-7">

              {resumeData.summary ||
                "Professional summary"}

            </p>

          </section>

          <section className="mt-8">

            <h2 className="text-xl font-bold border-b pb-2 mb-3">
              Experience
            </h2>

            <div className="whitespace-pre-line text-gray-700 leading-7">

              {resumeData.experience ||
                "Experience"}

            </div>

          </section>

          <section className="mt-8">

            <h2 className="text-xl font-bold border-b pb-2 mb-3">
              Projects
            </h2>

            <div className="whitespace-pre-line text-gray-700 leading-7">

              {resumeData.projects ||
                "Projects"}

            </div>

          </section>

        </div>

      </div>

    </div>
  );
}

export default ModernTemplate;