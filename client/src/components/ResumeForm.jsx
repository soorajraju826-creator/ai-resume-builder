function ResumeForm({
  resumeData,
  setResumeData,
  handleSave,
}) {

  const handleChange = (e) => {
    setResumeData({
      ...resumeData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-6">
        Resume Details
      </h2>

      <div className="space-y-5">

        <input
          type="text"
          name="name"
          value={resumeData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="email"
          name="email"
          value={resumeData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="text"
          name="phone"
          value={resumeData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full border rounded-lg px-4 py-3"
        />

        <textarea
          rows="4"
          name="summary"
          value={resumeData.summary}
          onChange={handleChange}
          placeholder="Professional Summary"
          className="w-full border rounded-lg px-4 py-3"
        />

        <textarea
          rows="4"
          name="skills"
          value={resumeData.skills}
          onChange={handleChange}
          placeholder="Skills (One per line)"
          className="w-full border rounded-lg px-4 py-3"
        />

        <textarea
          rows="4"
          name="education"
          value={resumeData.education}
          onChange={handleChange}
          placeholder="Education (One per line)"
          className="w-full border rounded-lg px-4 py-3"
        />

        <textarea
          rows="4"
          name="experience"
          value={resumeData.experience}
          onChange={handleChange}
          placeholder="Experience (One per line)"
          className="w-full border rounded-lg px-4 py-3"
        />

        <textarea
          rows="4"
          name="projects"
          value={resumeData.projects}
          onChange={handleChange}
          placeholder="Projects (One per line)"
          className="w-full border rounded-lg px-4 py-3"
        />

        <button
          onClick={handleSave}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold"
        >
          Save Resume
        </button>

      </div>

    </div>
  );
}

export default ResumeForm;