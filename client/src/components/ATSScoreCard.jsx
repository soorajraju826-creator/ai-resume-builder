import { CheckCircle, AlertTriangle } from "lucide-react";

function ATSScoreCard({ atsResult }) {
  if (!atsResult) return null;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        📊 ATS Resume Analysis
      </h2>

      <div className="text-center">

        <h1 className="text-6xl font-bold text-blue-600">
          {atsResult.score}
        </h1>

        <p className="text-gray-500">
          ATS Score
        </p>

      </div>

      <div className="mt-8">

        <h3 className="text-xl font-bold mb-4">
          Strengths
        </h3>

        <div className="space-y-3">

          {atsResult.strengths.map((item, index) => (

            <div
              key={index}
              className="flex items-start gap-3"
            >

              <CheckCircle
                className="text-green-600 mt-1"
                size={20}
              />

              <span>{item}</span>

            </div>

          ))}

        </div>

      </div>

      <div className="mt-8">

        <h3 className="text-xl font-bold mb-4">
          Improvements
        </h3>

        <div className="space-y-3">

          {atsResult.improvements.map((item, index) => (

            <div
              key={index}
              className="flex items-start gap-3"
            >

              <AlertTriangle
                className="text-yellow-500 mt-1"
                size={20}
              />

              <span>{item}</span>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default ATSScoreCard;