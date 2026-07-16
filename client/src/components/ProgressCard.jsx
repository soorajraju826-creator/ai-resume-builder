function ProgressCard({ resumeData }) {
  const sections = [
    resumeData.name,
    resumeData.email,
    resumeData.phone,
    resumeData.summary,
    resumeData.skills,
    resumeData.education,
    resumeData.experience,
    resumeData.projects,
  ];

  const completed = sections.filter(
    (item) => item && item.toString().trim() !== ""
  ).length;

  const percentage = Math.round((completed / sections.length) * 100);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">

      <h2 className="text-2xl font-bold mb-4">
        Resume Completion
      </h2>

      <div className="w-full bg-gray-200 rounded-full h-4">

        <div
          className="bg-blue-600 h-4 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />

      </div>

      <p className="mt-3 text-lg font-semibold">
        {percentage}% Completed
      </p>

    </div>
  );
}

export default ProgressCard;