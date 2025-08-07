import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaList,
  FaUser,
  FaFileContract,
  FaTachometerAlt,
  FaFolder,
  FaKey,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const activeLinkClasses = "bg-cyan-700 text-white font-semibold shadow-lg";
  const hoverLinkClasses =
    "hover:bg-cyan-800 hover:text-white hover:scale-[1.02]";

  // Define navigation items once
  const navItems = [
    { to: "/", icon: FaHome, text: "Home" },
    { to: "/wishList", icon: FaList, text: "Wishlist" },
    { to: "/category", icon: FaFolder, text: "Categories" },
    { to: "/contact", icon: FaFileContract, text: "Contact Us" },
    { to: "/dashboard", icon: FaTachometerAlt, text: "Dashboard" },
    { to: "/profile", icon: FaUser, text: "Profile" },
    { to: "/login", icon: FaKey, text: "Login" },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 shadow-xl p-4 transition-all duration-300 relative border-b border-gray-700">
      <div className="flex items-center justify-between">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide drop-shadow-md">
          Library <span className="text-cyan-500">Management</span> System
        </h1>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-transform duration-200 transform hover:scale-110 active:scale-95 z-50"
          aria-label="Toggle menu"
        >
          <svg
            className="h-7 w-7 text-cyan-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 shadow-2xl transition-transform duration-500 ease-in-out transform ${
          /* Stronger shadow, longer and smoother transition */
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } z-40 w-3/4 sm:w-2/5 md:w-1/4 lg:w-1/5 max-w-xs flex flex-col`}
      >
        <div className="flex justify-end p-4 flex-shrink-0">
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-transform duration-200 transform hover:scale-110 active:scale-95"
            aria-label="Close menu"
          >
            <svg
              className="h-7 w-7 text-cyan-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col items-start space-y-3 px-6 py-4 flex-grow overflow-y-auto custom-scrollbar">
          {" "}
          {/* Added flex-grow, overflow-y-auto, custom-scrollbar */}
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`w-full flex items-center px-4 py-3 rounded-lg text-lg transition-all duration-300 ease-in-out ${
                // Larger padding, larger text, rounded-lg
                location.pathname === item.to
                  ? activeLinkClasses
                  : "text-gray-200 " + hoverLinkClasses
              }`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="mr-4 flex-shrink-0 text-xl">
                {<item.icon />}
              </span>
              <span>{item.text}</span>
            </Link>
          ))}
          <div className="pb-4"></div>
        </nav>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0k bg-opacity-30 backdrop-blur-sm transition-opacity duration-300 z-30" // Blur effect, opacity
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
