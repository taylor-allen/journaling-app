import { Link } from "react-router-dom";
import { useActions } from "../../hooks/useActions";

export const Navbar = () => {
  const { test } = useActions();
  return (
    <nav className="bg-white border-b border-gray-200 fixed top-0 w-full shadow z-50">
      <div className="container mx-auto flex items-center justify-between py-2">
        <Link to="/">
          <span className="text-xl font-semibold text-gray-900">
            React Boilerplate
          </span>
        </Link>
        <div>
          <button
            onClick={test}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
          >
            Actions Test
          </button>
        </div>
      </div>
    </nav>
  );
};
