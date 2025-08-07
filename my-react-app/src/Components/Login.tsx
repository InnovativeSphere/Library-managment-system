
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { useDispatch } from "react-redux";
import { login } from "../Redux/userSlice"; // Import the login action
import { users } from "./users"; // Import your hard-coded user data

const Login: React.FC = () => {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch(); // Initialize the useDispatch hook
    const navigate = useNavigate(); // Initialize the useNavigate hook for redirection

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();

        const user = users.find(
            (user) =>
                (user.username === identifier || user.email === identifier) && 
                user.password === password
        );

        if (user) {
            dispatch(login({ 
                username: user.username, 
                fullname: user.fullname, 
                email: user.email, 
                password: user.password 
            }));

            alert(`Login successful! Welcome, ${user.fullname}.`);
            navigate("/dashboard");
        } else {
            alert("Invalid username/email or password.");
        }

        setIdentifier("");
        setPassword("");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50 border border-transparent hover:border-cyan-500">
                <h2 className="text-3xl font-extrabold text-white mb-6 text-center tracking-wide">
                    Welcome Back!
                </h2>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label htmlFor="identifier" className="sr-only">
                            Username or Email
                        </label>
                        <input
                            type="text"
                            id="identifier"
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                            placeholder="Username or Email"
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
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-8 text-center text-gray-400 text-sm">
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                        className="text-cyan-500 hover:text-cyan-400 font-medium transition duration-300 ease-in-out"
                    >
                        Sign up here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
 