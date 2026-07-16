import {
  CheckCircle,
  XCircle,
  Lightbulb,
  Target,
} from "lucide-react";

function JobMatchCard({ jobMatch }) {
  if (!jobMatch) return null;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

      <div className="flex items-center gap-3 mb-6">

        <Target
          className="text-blue-600"
          size={30}
        />

        <h2 className="text-2xl font-bold">
          Job Match Analysis
        </h2>

      </div>

      <div className="text-center mb-8">

        <h1 className="text-6xl font-bold text-green-600">
          {jobMatch.matchScore}%
        </h1>

        <p className="text-gray-500 mt-2">
          Resume Match Score
        </p>

      </div>

      {/* Matched Skills */}

      <div className="mb-8">

        <h3 className="text-xl font-bold mb-4">
          Matched Skills
        </h3>

        <div className="space-y-3">

          {jobMatch.matchedSkills.map((skill, index) => (

            <div
              key={index}
              className="flex items-center gap-3"
            >

              <CheckCircle
                className="text-green-600"
                size={20}
              />

              <span>{skill}</span>

            </div>

          ))}

        </div>

      </div>

      {/* Missing Skills */}

      <div className="mb-8">

        <h3 className="text-xl font-bold mb-4">
          Missing Skills
        </h3>

        <div className="space-y-3">

          {jobMatch.missingSkills.map((skill, index) => (

            <div
              key={index}
              className="flex items-center gap-3"
            >

              <XCircle
                className="text-red-500"
                size={20}
              />

              <span>{skill}</span>

            </div>

          ))}

        </div>

      </div>

      {/* Suggestions */}

      <div>

        <h3 className="text-xl font-bold mb-4">
          Suggestions
        </h3>

        <div className="space-y-3">

          {jobMatch.suggestions.map((item, index) => (

            <div
              key={index}
              className="flex items-start gap-3"
            >

              <Lightbulb
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

export default JobMatchCard;