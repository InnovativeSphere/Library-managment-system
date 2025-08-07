import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link

const Signup: React.FC = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Handle signup submission
  const handleSignup = (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Emulating a successful signup scenario without an API call
    const newUser = {
      fullname,
      username,
      email,
      password: "hashed_password_placeholder", // Just for demonstration, password would be hashed
    };

    console.log("Emulating new user registration:", newUser);
    alert(`Registration successful for ${username}! You can now log in.`);

    // Reset form fields after successful "registration"
    setFullname("");
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500 border border-transparent hover:border-cyan-500">
        <h2 className="text-3xl font-extrabold text-white mb-6 text-center tracking-wide">
          Create Your Account
        </h2>
        <form onSubmit={handleSignup} className="space-y-6">
          <div>
            <label htmlFor="fullname" className="sr-only">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Full Name"
              required
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent placeholder-gray-400 transition duration-300 ease-in-out transform hover:scale-[1.01]"
            />
          </div>
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent placeholder-gray-400 transition duration-300 ease-in-out transform hover:scale-[1.01]"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent placeholder-gray-400 transition duration-300 ease-in-out transform hover:scale-[1.01]"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent placeholder-gray-400 transition duration-300 ease-in-out transform hover:scale-[1.01]"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="sr-only">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent placeholder-gray-400 transition duration-300 ease-in-out transform hover:scale-[1.01]"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-8 text-center text-gray-400 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-cyan-500 hover:text-cyan-400 font-medium transition duration-300 ease-in-out"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
