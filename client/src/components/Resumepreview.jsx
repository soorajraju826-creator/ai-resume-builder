function ResumePreview({ resumeData }) {

  return (
    <div className="bg-white rounded-2xl shadow-lg p-10">

      <h1 className="text-4xl font-bold text-center">
        {resumeData.name || "Your Name"}
      </h1>

      <div className="text-center mt-3 text-gray-600">

        <p>
          {resumeData.email || "your@email.com"}
        </p>

        <p>
          {resumeData.phone || "+91 9876543210"}
        </p>

      </div>

      <hr className="my-8" />

      <h2 className="text-xl font-bold mb-2">
        Professional Summary
      </h2>

      <p className="text-gray-700 whitespace-pre-line">
        {resumeData.summary ||
          "Your professional summary will appear here."}
      </p>

      <hr className="my-8" />

      <h2 className="text-xl font-bold mb-2">
        Skills
      </h2>

      <p className="text-gray-700 whitespace-pre-line">
        {resumeData.skills ||
          "Your skills will appear here."}
      </p>

      <hr className="my-8" />

      <h2 className="text-xl font-bold mb-2">
        Education
      </h2>

      <p className="text-gray-700 whitespace-pre-line">
        {resumeData.education ||
          "Your education will appear here."}
      </p>

      <hr className="my-8" />

      <h2 className="text-xl font-bold mb-2">
        Experience
      </h2>

      <p className="text-gray-700 whitespace-pre-line">
        {resumeData.experience ||
          "Your experience will appear here."}
      </p>

      <hr className="my-8" />

      <h2 className="text-xl font-bold mb-2">
        Projects
      </h2>

      <p className="text-gray-700 whitespace-pre-line">
        {resumeData.projects ||
          "Your projects will appear here."}
      </p>

    </div>
  );
}

export default ResumePreview;