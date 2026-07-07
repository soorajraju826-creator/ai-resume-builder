function Features() {

  const features = [
    {
      title: "AI Powered",
      description: "Generate professional summaries and improve your resume using AI."
    },
    {
      title: "ATS Friendly",
      description: "Templates optimized for Applicant Tracking Systems."
    },
    {
      title: "Free PDF Download",
      description: "Download high-quality PDF resumes instantly."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-14">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
            >

              <h3 className="text-2xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;