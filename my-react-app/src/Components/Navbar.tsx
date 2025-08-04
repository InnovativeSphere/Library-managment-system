import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 text-gray-100 shadow-md p-4 transition-shadow duration-300 hover:shadow-xl md:flex md:items-center md:justify-between relative">
      <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
        <h1 className="text-2xl font-bold text-[#F5F5F5]">
          Library Management System
        </h1>
      </div>

      <div className="hidden md:flex md:space-x-8 md:justify-center md:items-center">
        <Link
          to="/"
          className="font-semibold hover:underline hover:text-indigo-400 transition-colors duration-300 text-lg"
        >
          Home
        </Link>
        <Link
          to="/wishList"
          className="font-semibold hover:underline hover:text-indigo-400 transition-colors duration-300 text-lg"
        >
          Wishlist
        </Link>
        <Link
          to="/category"
          className="font-semibold hover:underline hover:text-indigo-400 transition-colors duration-300 text-lg"
        >
          Categories
        </Link>
        <Link
          to="/contact"
          className="font-semibold hover:underline hover:text-indigo-400 transition-colors duration-300 text-lg"
        >
          Contact Us
        </Link>
      </div>

      <div className="md:hidden flex items-center justify-end">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-transform duration-200 transform hover:scale-105"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-gray-300 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        } transition-all duration-300 overflow-hidden md:hidden  absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center space-y-2 px-4 py-2 mt-2 rounded-b-lg shadow-lg`}
      >
        <Link
          to="/"
          className="w-full text-center py-2 px-4 rounded hover:underline hover:text-indigo-400 transition-colors duration-300"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/wishList"
          className="w-full text-center py-2 px-4 rounded hover:underline hover:text-indigo-400 transition-colors duration-300"
          onClick={() => setMenuOpen(false)}
        >
          Wishlist
        </Link>
        <Link
          to="/category"
          className="w-full text-center py-2 px-4 rounded hover:underline hover:text-indigo-400 transition-colors duration-300"
          onClick={() => setMenuOpen(false)}
        >
          Categories
        </Link>
        <Link
          to="/contact"
          className="w-full text-center py-2 px-4 rounded hover:underline hover:text-indigo-400 transition-colors duration-300"
          onClick={() => setMenuOpen(false)}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
