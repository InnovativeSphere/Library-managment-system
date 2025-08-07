import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-8 px-4 md:px-16 lg:px-24 border-t border-gray-800 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl md:text-2xl font-extrabold mb-4 text-white tracking-wide">
            Library <span className="text-cyan-500">Management</span> System
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            Your one-stop solution for managing library resources efficiently.
            Access, organize, and explore vast collections seamlessly with our
            platform.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:text-cyan-400 transition duration-300 transform hover:scale-[1.02] inline-block"
              >
                Home
              </Link>
            </li>
            <li></li>
            <li>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-cyan-400 transition duration-300 transform hover:scale-[1.02] inline-block"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-400 hover:text-cyan-400 transition duration-300 transform hover:scale-[1.02] inline-block"
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Follow us</h4>
          <div className="flex space-x-4 mb-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition duration-300 transform hover:scale-125"
              aria-label="Facebook"
            >
              <FaFacebook size={26} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition duration-300 transform hover:scale-125"
              aria-label="Twitter"
            >
              <FaTwitter size={26} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition duration-300 transform hover:scale-125"
              aria-label="GitHub"
            >
              <FaGithub size={26} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition duration-300 transform hover:scale-125"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={26} />
            </a>
          </div>
          <form
            className="flex flex-col md:flex-row items-center md:items-center space-y-3 md:space-y-0 md:space-x-3"
            action="#"
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full md:flex-1 p-3 px-5 rounded-lg border border-gray-700 bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition placeholder-gray-500"
            />
            <button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-3 rounded-lg transition transform hover:scale-105 font-semibold shadow-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm space-y-4 md:space-y-0">
          <p className="text-gray-400">
            &copy; 2025 Library Management System. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-cyan-400 transition duration-300 transform hover:scale-[1.02] inline-block"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-conditions"
              className="text-gray-400 hover:text-cyan-400 transition duration-300 transform hover:scale-[1.02] inline-block"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
