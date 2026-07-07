import { Link } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">

      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-3xl font-extrabold text-blue-600"
        >
          AI Resume Builder
        </Link>

        <div className="flex items-center gap-4">

          <Button
            text="Login"
            to="/login"
            primary={false}
          />

          <Button
            text="Register"
            to="/register"
          />

        </div>

      </div>

    </nav>
  );
}

export default Navbar;