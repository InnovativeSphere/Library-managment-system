import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold">Library Management System</h3>
          <p className="mt-4">
            You're one step from all your needs. Shop wiht us and experience the
            best online shopping experiences.
          </p>
        </div>

        <div className="flex flex-col md:items-center ">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 ">
            <li>
              <Link className="hover:underline" to="/">
                Home
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link className="hover:underline" to="/shop">
                Shop
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link className="hover:underline" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link className="hover:underline" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className="">
          <h4 className="text-lg font-semibold"> Follow us</h4>

          <div className="flex space-x-4 mt-4">
            <a href="" className="hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="" className="hover:text-gray-400">
              <FaGithub />
            </a>
            <a href="" className="hover:text-gray-400">
              <FaLinkedin />
            </a>
          </div>
          <form className="flex items-center mt-8 justify-center" action="">
            <input
              className="w-full p-2  bg-gray-80 border border-gray-600"
              placeholder="Enter Your Email"
              type="email"
              name="name"
              autoComplete="additional-name"
            />
            <button className=" cursor-pointer bg-blue-400 text-white px-4 py-2 rounded-r-md border border-gray-800 hover:scale-105 transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Library Management System All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a className="hover:underline" href="">
              Privacy Policy
            </a>
            <a className="hover:underline" href="">
              Terms & Coniditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
