import {
  User,
  Mail,
  Phone,
  FileText,
  Briefcase,
  GraduationCap,
  Wrench,
  FolderOpen,
} from "lucide-react";

function ResumeForm({
  resumeData,
  setResumeData,
  handleSave,
  buttonText = "Save Resume",
}) {
  const handleChange = (e) => {
    setResumeData({
      ...resumeData,
      [e.target.name]: e.target.value,
    });
  };

  const inputClass =
    "w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500";

  const sectionTitle = "flex items-center gap-2 text-xl font-semibold mb-4 text-gray-800";

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-3xl font-bold mb-8">
        Resume Builder
      </h2>

      {/* Personal Information */}

      <div className="mb-8">

        <h3 className={sectionTitle}>
          <User size={22} />
          Personal Information
        </h3>

        <div className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={resumeData.name}
            onChange={handleChange}
            className={inputClass}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={resumeData.email}
            onChange={handleChange}
            className={inputClass}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={resumeData.phone}
            onChange={handleChange}
            className={inputClass}
          />

        </div>

      </div>

      {/* Summary */}

      <div className="mb-8">

        <h3 className={sectionTitle}>
          <FileText size={22} />
          Professional Summary
        </h3>

        <textarea
          rows="4"
          name="summary"
          placeholder="Write a short professional summary..."
          value={resumeData.summary}
          onChange={handleChange}
          className={inputClass}
        />

      </div>

      {/* Experience */}

      <div className="mb-8">

        <h3 className={sectionTitle}>
          <Briefcase size={22} />
          Experience
        </h3>

        <textarea
          rows="4"
          name="experience"
          placeholder="One experience per line"
          value={resumeData.experience}
          onChange={handleChange}
          className={inputClass}
        />

      </div>

      {/* Education */}

      <div className="mb-8">

        <h3 className={sectionTitle}>
          <GraduationCap size={22} />
          Education
        </h3>

        <textarea
          rows="4"
          name="education"
          placeholder="One education entry per line"
          value={resumeData.education}
          onChange={handleChange}
          className={inputClass}
        />

      </div>

      {/* Skills */}

      <div className="mb-8">

        <h3 className={sectionTitle}>
          <Wrench size={22} />
          Skills
        </h3>

        <textarea
          rows="4"
          name="skills"
          placeholder="One skill per line"
          value={resumeData.skills}
          onChange={handleChange}
          className={inputClass}
        />

      </div>

      {/* Projects */}

      <div className="mb-8">

        <h3 className={sectionTitle}>
          <FolderOpen size={22} />
          Projects
        </h3>

        <textarea
          rows="4"
          name="projects"
          placeholder="One project per line"
          value={resumeData.projects}
          onChange={handleChange}
          className={inputClass}
        />

      </div>

      <button
        onClick={handleSave}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg"
      >
        {buttonText}
      </button>

    </div>
  );
}

export default ResumeForm;