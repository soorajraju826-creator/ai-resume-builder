function MinimalTemplate({ resumeData }) {
  const skills = (resumeData.skills || "")
    .split("\n")
    .filter((skill) => skill.trim() !== "");

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg p-12">

      {/* Header */}

      <div className="border-b pb-6">

        <h1 className="text-5xl font-light tracking-wide text-gray-900">
          {resumeData.name || "Your Name"}
        </h1>

        <div className="mt-3 text-gray-600 flex flex-wrap gap-6">

          <span>
            {resumeData.email || "email@example.com"}
          </span>

          <span>
            {resumeData.phone || "+91 9876543210"}
          </span>

        </div>

      </div>

      {/* Summary */}

      <section className="mt-8">

        <h2 className="uppercase tracking-widest text-sm font-bold text-gray-500 mb-3">
          Professional Summary
        </h2>

        <p className="leading-8 text-gray-700 whitespace-pre-line">
          {resumeData.summary ||
            "Professional summary appears here."}
        </p>

      </section>

      {/* Skills */}

      <section className="mt-8">

        <h2 className="uppercase tracking-widest text-sm font-bold text-gray-500 mb-3">
          Skills
        </h2>

        <div className="flex flex-wrap gap-2">

          {skills.length > 0 ? (

            skills.map((skill, index) => (

              <span
                key={index}
                className="border border-gray-300 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>

            ))

          ) : (

            <span className="text-gray-500">
              Skills
            </span>

          )}

        </div>

      </section>

      {/* Education */}

      <section className="mt-8">

        <h2 className="uppercase tracking-widest text-sm font-bold text-gray-500 mb-3">
          Education
        </h2>

        <div className="whitespace-pre-line leading-8 text-gray-700">
          {resumeData.education ||
            "Education details appear here."}
        </div>

      </section>

      {/* Experience */}

      <section className="mt-8">

        <h2 className="uppercase tracking-widest text-sm font-bold text-gray-500 mb-3">
          Experience
        </h2>

        <div className="whitespace-pre-line leading-8 text-gray-700">
          {resumeData.experience ||
            "Experience details appear here."}
        </div>

      </section>

      {/* Projects */}

      <section className="mt-8">

        <h2 className="uppercase tracking-widest text-sm font-bold text-gray-500 mb-3">
          Projects
        </h2>

        <div className="whitespace-pre-line leading-8 text-gray-700">
          {resumeData.projects ||
            "Project details appear here."}
        </div>

      </section>

    </div>
  );
}

export default MinimalTemplate;