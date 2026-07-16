import ClassicTemplate from "../templates/ClassicTemplate";
import ModernTemplate from "../templates/ModernTemplate";
import MinimalTemplate from "../templates/MinimalTemplate";

function ResumePreview({
  resumeData,
  selectedTemplate,
}) {

  const renderTemplate = () => {

    switch (selectedTemplate) {

      case "Modern":
        return (
          <ModernTemplate
            resumeData={resumeData}
          />
        );

      case "Minimal":
        return (
          <MinimalTemplate
            resumeData={resumeData}
          />
        );

      default:
        return (
          <ClassicTemplate
            resumeData={resumeData}
          />
        );
    }

  };

  return (

    <div
      id="resume-preview"
      className="bg-gray-100 rounded-xl p-6"
    >

      {renderTemplate()}

    </div>

  );
}

export default ResumePreview;