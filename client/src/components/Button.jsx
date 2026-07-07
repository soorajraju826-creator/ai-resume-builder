import { Link } from "react-router-dom";

function Button({
  text,
  to,
  primary = true,
}) {
  return (
    <Link
      to={to}
      className={`px-8 py-4 rounded-xl font-semibold transition duration-300 ${
        primary
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "border border-blue-600 text-blue-600 hover:bg-blue-50"
      }`}
    >
      {text}
    </Link>
  );
}

export default Button;