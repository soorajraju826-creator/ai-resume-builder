function TemplateSelector({
  selectedTemplate,
  setSelectedTemplate,
}) {
  const templates = [
    "Classic",
    "Modern",
    "Minimal",
    "Executive",
    "Creative",
    "Corporate",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">

      <h2 className="text-2xl font-bold mb-5">
        Resume Templates
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        {templates.map((template) => (

          <button
            key={template}
            onClick={() => setSelectedTemplate(template)}
            className={`p-4 rounded-xl border-2 transition font-semibold ${
              selectedTemplate === template
                ? "border-blue-600 bg-blue-50 text-blue-600"
                : "border-gray-300 hover:border-blue-500"
            }`}
          >
            {template}
          </button>

        ))}

      </div>

    </div>
  );
}

export default TemplateSelector;