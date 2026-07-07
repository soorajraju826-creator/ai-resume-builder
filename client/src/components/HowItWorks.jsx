function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose a Template",
      description: "Select a professional resume template that matches your career."
    },
    {
      number: "02",
      title: "Fill Your Details",
      description: "Enter your education, skills, experience, and projects."
    },
    {
      number: "03",
      title: "AI Improves Resume",
      description: "Use AI to generate summaries and improve your resume content."
    },
    {
      number: "04",
      title: "Download PDF",
      description: "Download your ATS-friendly resume instantly in PDF format."
    }
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-16">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step) => (
            <div
              key={step.number}
              className="text-center p-8 rounded-2xl border hover:shadow-lg transition"
            >

              <div className="text-5xl font-bold text-blue-600 mb-6">
                {step.number}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {step.title}
              </h3>

              <p className="text-gray-600">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;