import {
  FileText,
  LayoutTemplate,
  Download,
} from "lucide-react";

function DashboardStats({ totalResumes }) {
  const stats = [
    {
      title: "Total Resumes",
      value: totalResumes,
      icon: <FileText size={30} />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Templates",
      value: 3,
      icon: <LayoutTemplate size={30} />,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Downloads",
      value: 0,
      icon: <Download size={30} />,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-10">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between hover:shadow-xl transition"
        >
          <div>
            <p className="text-gray-500">
              {item.title}
            </p>

            <h2 className="text-4xl font-bold mt-2">
              {item.value}
            </h2>
          </div>

          <div
            className={`p-4 rounded-2xl ${item.color}`}
          >
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardStats;