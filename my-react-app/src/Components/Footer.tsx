import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-8 px-4 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Library Management System
          </h3>
          <p className="text-gray-400">
            Your one-stop solution for managing library resources efficiently.
            Access, organize, and explore vast collections seamlessly with our
            platform.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <a
                href="/"
                className="hover:underline transition duration-300 hover:text-indigo-400"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/shop"
                className="hover:underline transition duration-300 hover:text-indigo-400"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:underline transition duration-300 hover:text-indigo-400"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:underline transition duration-300 hover:text-indigo-400"
              >
                About
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Follow us</h4>
          <div className="flex space-x-4 mb-6">
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          <form
            className="flex flex-col md:flex-row items-center md:items-center space-y-2 md:space-y-0 md:space-x-2"
            action="#"
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full md:flex-1 p-2 px-4 rounded-md border border-gray-600 bg-[#2e2e3e] text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md transition transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm space-y-4 md:space-y-0">
          <p>&copy; 2025 Library Management System. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="hover:underline transition duration-300 hover:text-indigo-400"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:underline transition duration-300 hover:text-indigo-400"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
