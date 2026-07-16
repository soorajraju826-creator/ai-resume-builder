function ClassicTemplate({ resumeData }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-10 max-w-4xl mx-auto">

      {/* Header */}

      <div className="text-center border-b pb-6">

        <h1 className="text-4xl font-bold text-gray-900">
          {resumeData.name || "Your Name"}
        </h1>

        <div className="mt-3 text-gray-600 flex justify-center gap-6 flex-wrap">

          <span>
            {resumeData.email || "your@email.com"}
          </span>

          <span>
            {resumeData.phone || "+91 9876543210"}
          </span>

        </div>

      </div>

      {/* Summary */}

      <section className="mt-8">

        <h2 className="text-xl font-bold border-b pb-2 mb-3">
          Professional Summary
        </h2>

        <p className="text-gray-700 whitespace-pre-line leading-7">
          {resumeData.summary ||
            "Your professional summary will appear here."}
        </p>

      </section>

      {/* Skills */}

      <section className="mt-8">

        <h2 className="text-xl font-bold border-b pb-2 mb-4">
          Skills
        </h2>

        <div className="flex flex-wrap gap-3">

          {(resumeData.skills || "")
            .split("\n")
            .filter(skill => skill.trim() !== "")
            .map((skill, index) => (

              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </span>

            ))}

        </div>

      </section>

      {/* Education */}

      <section className="mt-8">

        <h2 className="text-xl font-bold border-b pb-2 mb-3">
          Education
        </h2>

        <div className="text-gray-700 whitespace-pre-line leading-7">

          {resumeData.education ||
            "Your education details will appear here."}

        </div>

      </section>

      {/* Experience */}

      <section className="mt-8">

        <h2 className="text-xl font-bold border-b pb-2 mb-3">
          Experience
        </h2>

        <div className="text-gray-700 whitespace-pre-line leading-7">

          {resumeData.experience ||
            "Your experience will appear here."}

        </div>

      </section>

      {/* Projects */}

      <section className="mt-8">

        <h2 className="text-xl font-bold border-b pb-2 mb-3">
          Projects
        </h2>

        <div className="text-gray-700 whitespace-pre-line leading-7">

          {resumeData.projects ||
            "Your projects will appear here."}

        </div>

      </section>

    </div>
  );
}

export default ClassicTemplate;