import { Sparkles, FileCheck, Download } from "lucide-react";

function Stats() {
  return (
    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-10 text-center shadow hover:shadow-xl transition">

            <Sparkles
              className="mx-auto text-blue-600"
              size={48}
            />

            <h2 className="text-3xl font-bold mt-6">
              AI Assisted
            </h2>

            <p className="mt-3 text-gray-600">
              Generate professional resume content using AI.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-10 text-center shadow hover:shadow-xl transition">

            <FileCheck
              className="mx-auto text-blue-600"
              size={48}
            />

            <h2 className="text-3xl font-bold mt-6">
              ATS Optimized
            </h2>

            <p className="mt-3 text-gray-600">
              Templates designed to pass Applicant Tracking Systems.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-10 text-center shadow hover:shadow-xl transition">

            <Download
              className="mx-auto text-blue-600"
              size={48}
            />

            <h2 className="text-3xl font-bold mt-6">
              PDF Export
            </h2>

            <p className="mt-3 text-gray-600">
              Download high-quality resumes instantly.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Stats;