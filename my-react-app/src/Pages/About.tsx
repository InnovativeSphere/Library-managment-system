import React from "react";
import {
  MdOutlineTag,
  MdOutlineVisibility,
  MdGroups,
  MdOutlineMailOutline,
} from "react-icons/md";
import { Link } from "react-router-dom";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            About <span className="text-cyan-500">Us</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our journey, mission, and the values that drive us to
            innovate and excel.
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-2xl mb-16 border border-gray-700 transform transition-all duration-300 hover:scale-[1.01] hover:border-cyan-600">
          <p className="text-lg leading-relaxed text-gray-300">
            Welcome to{" "}
            <span className="text-cyan-400 font-semibold">
              Your Company Name
            </span>
            , where we are passionate about revolutionizing digital experiences.
            Founded in 2023, our commitment has always been to deliver
            unparalleled quality. We believe in the power of technology to
            transform businesses and lives.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-300">
            Our team is comprised of dedicated professionals who bring a wealth
            of expertise and creativity to every project. We thrive on
            challenges and constantly strive to push the boundaries of what's
            possible, ensuring that our clients and users always receive the
            best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700 transform transition-all duration-300 hover:scale-[1.01] hover:border-cyan-600">
            <div className="text-center mb-6">
              <MdOutlineTag className="text-cyan-500 text-6xl mx-auto mb-4" />{" "}
              {/* Larger icon */}
              <h3 className="text-3xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              Our mission is to empower individuals and businesses by providing
              innovative, reliable, and user-friendly solutions that drive
              growth and foster success in the digital age. We aim to
              consistently exceed expectations through our dedication to
              quality, integrity, and continuous improvement.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700 transform transition-all duration-300 hover:scale-[1.01] hover:border-cyan-600">
            <div className="text-center mb-6">
              <MdOutlineVisibility className="text-cyan-500 text-6xl mx-auto mb-4" />{" "}
              {/* Larger icon */}
              <h3 className="text-3xl font-bold text-white">Our Vision</h3>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              We envision a future where technology is seamlessly integrated
              into everyday life, making it simpler, more efficient, and more
              connected. We strive to be a leading innovator, setting new
              benchmarks for excellence and positively impacting the world
              through our technological advancements.
            </p>
          </div>
        </div>

        <div className="bg-gray-800 p-8 rounded-xl shadow-2xl mb-16 border border-gray-700 transform transition-all duration-300 hover:scale-[1.01] hover:border-cyan-600">
          <div className="text-center mb-6">
            {/* React Icon: MdGroups */}
            <MdGroups className="text-cyan-500 text-6xl mx-auto mb-4" />{" "}
            {/* Larger icon */}
            <h3 className="text-3xl font-bold text-white">
              Our People & Values
            </h3>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
            At Your Company Name, we believe in a culture of collaboration,
            continuous learning, and mutual respect. Our team is our greatest
            asset, and we foster an environment where creativity thrives and
            every voice is heard. We are committed to integrity, transparency,
            and delivering tangible value to our clients.
          </p>
        </div>

        <div className="text-center bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700 transform transition-all duration-300 hover:scale-[1.01] hover:border-cyan-600">
          <h3 className="text-3xl font-bold text-white mb-4">
            Have Questions?
          </h3>
          <p className="text-lg text-gray-300 mb-6">
            We'd love to hear from you! Reach out to us for any inquiries or
            collaborations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          >
            <MdOutlineMailOutline className="mr-3 text-2xl" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
