import React from 'react';
import {
    FaUser,
    FaChartLine,
    FaClipboardList,
    FaBell,
    FaEnvelope,
    FaCog,
    FaSignOutAlt,
    FaBook, // Example for borrowed books
    FaCalendarAlt, // Example for events
    FaTasks // Example for pending tasks
} from 'react-icons/fa'; // Importing necessary icons

const Dashboard: React.FC = () => {
    // Example data for demonstration
    const stats = [
        {
            label: "Total Books",
            value: "1,200",
            icon: <FaBook className="text-cyan-400 text-3xl" />
        },
        {
            label: "Borrowed Books",
            value: "150",
            icon: <FaClipboardList className="text-cyan-400 text-3xl" />
        },
        {
            label: "Upcoming Events",
            value: "5",
            icon: <FaCalendarAlt className="text-cyan-400 text-3xl" />
        },
        {
            label: "Pending Tasks",
            value: "3",
            icon: <FaTasks className="text-cyan-400 text-3xl" />
        },
    ];

    const recentActivities = [
        "Borrowed 'The Great Gatsby'",
        "Reserved '1984'",
        "Attended 'Reading Club Meeting'",
        "Returned 'To Kill a Mockingbird'",
        "Renewed 'Sapiens'",
    ];

    return (
        <div className="min-h-screen bg-gray-900 p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <header className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                    <h1 className="text-4xl font-extrabold text-white tracking-tight">
                        <span className="text-cyan-500">My</span> Dashboard
                    </h1>
                    <div className="flex space-x-4">
                        <button className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                            <FaBell className="text-xl" />
                        </button>
                        <button className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                            <FaEnvelope className="text-xl" />
                        </button>
                        <button className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                            <FaUser className="text-xl" />
                        </button>
                    </div>
                </header>

                {/* Quick Stats Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-6 rounded-xl shadow-lg flex items-center space-x-4
                                transform transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-500/50 border border-transparent hover:border-cyan-500"
                        >
                            {stat.icon}
                            <div>
                                <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                                <h3 className="text-white text-3xl font-bold">{stat.value}</h3>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Main Content Area (Recent Activity & Navigation) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Recent Activity Card */}
                    <div className="lg:col-span-2 bg-gray-800 p-6 rounded-xl shadow-lg
                        transform transition-all duration-300 hover:scale-[1.01] hover:shadow-cyan-500/50 border border-transparent hover:border-cyan-500">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                            <FaChartLine className="mr-3 text-cyan-500" /> Recent Activity
                        </h2>
                        <ul className="space-y-4">
                            {recentActivities.map((activity, index) => (
                                <li key={index} className="flex items-center text-gray-300 bg-gray-700 p-3 rounded-lg border border-gray-600">
                                    <FaClipboardList className="mr-3 text-cyan-400" />
                                    {activity}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Navigation / Actions */}
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg
                        transform transition-all duration-300 hover:scale-[1.01] hover:shadow-cyan-500/50 border border-transparent hover:border-cyan-500">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                            <FaCog className="mr-3 text-cyan-500" /> Quick Actions
                        </h2>
                        <nav>
                            <ul className="space-y-4">
                                <li>
                                    <button className="w-full flex items-center p-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                                        <FaBook className="mr-3 text-cyan-400" />
                                        Browse Books
                                    </button>
                                </li>
                                <li>
                                    <button className="w-full flex items-center p-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                                        <FaChartLine className="mr-3 text-cyan-400" />
                                        View Statistics
                                    </button>
                                </li>
                                <li>
                                    <button className="w-full flex items-center p-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                                        <FaCog className="mr-3 text-cyan-400" />
                                        Settings
                                    </button>
                                </li>
                                <li>
                                    <button className="w-full flex items-center p-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500">
                                        <FaSignOutAlt className="mr-3" />
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;