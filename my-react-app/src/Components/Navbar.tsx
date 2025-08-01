import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 text-gray-100 shadow-md p-4 md:flex md:items-center md:justify-between transition duration-300 hover:shadow-xl">
      <div className="mb-4 md:mb-0">
        <h1 className="text-2xl font-bold text-center text-white">
          Library Management System
        </h1>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
        <div className="relative w-full md:w-96 lg:w-[24rem]"></div>
        <div className="hidden md:flex md:justify-center md:space-x-6 mt-4 md:mt-0">
          <Link
            to="/"
            className="font-semibold hover:underline text-gray-100 hover:text-indigo-500 transition duration-300 text-lg"
          >
            Home
          </Link>
          <Link
            to="/wishList"
            className="font-semibold hover:underline text-gray-100 hover:text-indigo-500 transition duration-300 text-lg"
          >
            Wishlist
          </Link>
          <Link
            to="/category"
            className="font-semibold hover:underline text-gray-100 hover:text-indigo-500 transition duration-300 text-lg"
          >
            Categories
          </Link>
          <Link
            to="/login"
            className="font-semibold hover:underline text-gray-100 hover:text-indigo-500 transition duration-300 text-lg"
          >
            Login
          </Link>
        </div>
        <div className="md:hidden mt-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-gray-300"
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
      </div>
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-2 transition duration-300">
          <Link
            to="/"
            className="text-gray-300 hover:text-indigo-400 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/wishList"
            className="text-gray-300 hover:text-indigo-400 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Wishlsi
          </Link>
          <Link
            to="/category"
            className="text-gray-300 hover:text-indigo-400 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Category
          </Link>
          <Link
            to="#"
            className="text-gray-300 hover:text-indigo-400 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
