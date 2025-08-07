import React, { useState } from 'react';
import {
    FaUserCircle,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaEdit,
    FaSave,
    FaTimes,
    FaLock,
    FaHistory,
    FaHeart, // Example for interests
    FaBook, // Example for borrowed books
    FaCog // For settings
} from 'react-icons/fa';

const Profile: React.FC = () => {
    // Example user data
    const [user, setUser] = useState({
        fullname: "John Doe",
        username: "john.doe",
        email: "john.doe@example.com",
        phone: "+1 (555) 123-4567",
        address: "123 Library Lane, Booktown, UK",
        memberSince: "January 15, 2022",
        bio: "Avid reader and lover of classic literature. Always looking for new recommendations!",
        interests: "Science Fiction, Fantasy, History, Cooking"
    });

    const [isEditing, setIsEditing] = useState(false);
    const [editableUser, setEditableUser] = useState({ ...user });

    const handleEditToggle = () => {
        if (isEditing) {
            // If exiting edit mode, revert changes if cancelled, or save if confirmed
            // For this example, we'll just toggle. In a real app, you'd have a save/cancel
        } else {
            setEditableUser({ ...user }); // Copy current user data to editable state
        }
        setIsEditing(!isEditing);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEditableUser(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        setUser(editableUser); // Save changes to actual user state
        setIsEditing(false); // Exit edit mode
        alert('Profile updated successfully!');
    };

    const handleCancel = () => {
        setEditableUser({ ...user }); // Revert changes
        setIsEditing(false); // Exit edit mode
    };

    const recentActivity = [
        "Borrowed 'Dune' on March 10, 2024",
        "Returned 'The Hobbit' on March 5, 2024",
        "Reserved 'Project Hail Mary' on February 28, 2024",
        "Updated profile picture on February 20, 2024",
    ];

    return (
        <div className="min-h-screen bg-gray-900 p-4 sm:p-6 lg:p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <header className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                    <h1 className="text-4xl font-extrabold text-white tracking-tight">
                        <span className="text-cyan-500">My</span> Profile
                    </h1>
                    <div className="flex space-x-3">
                        {isEditing ? (
                            <>
                                <button
                                    onClick={handleSave}
                                    className="px-5 py-2 rounded-lg bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 flex items-center space-x-2"
                                >
                                    <FaSave /> <span>Save</span>
                                </button>
                                <button
                                    onClick={handleCancel}
                                    className="px-5 py-2 rounded-lg bg-gray-600 text-white font-semibold hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 flex items-center space-x-2"
                                >
                                    <FaTimes /> <span>Cancel</span>
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={handleEditToggle}
                                className="px-5 py-2 rounded-lg bg-gray-700 text-white font-semibold hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 flex items-center space-x-2"
                            >
                                <FaEdit /> <span>Edit Profile</span>
                            </button>
                        )}
                        <button className="px-5 py-2 rounded-lg bg-gray-700 text-white font-semibold hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 flex items-center space-x-2">
                            <FaLock /> <span>Change Password</span>
                        </button>
                    </div>
                </header>

                {/* Profile Card */}
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-8
                                transform transition-all duration-300 hover:scale-[1.005] hover:shadow-cyan-500/50 border border-transparent hover:border-cyan-500">
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                        {/* Profile Picture / Icon */}
                        <div className="relative">
                            <FaUserCircle className="text-gray-500 text-9xl md:text-8xl lg:text-9xl" />
                            {/* You could add an overlay for changing picture here */}
                        </div>

                        {/* User Details */}
                        <div className="flex-1 text-center md:text-left">
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="fullname"
                                    value={editableUser.fullname}
                                    onChange={handleChange}
                                    className="text-3xl font-bold text-white bg-gray-700 p-2 rounded w-full mb-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                            ) : (
                                <h2 className="text-3xl font-bold text-white">{user.fullname}</h2>
                            )}

                            {isEditing ? (
                                <input
                                    type="text"
                                    name="username"
                                    value={editableUser.username}
                                    onChange={handleChange}
                                    className="text-gray-400 text-xl bg-gray-700 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                            ) : (
                                <p className="text-gray-400 text-xl mb-4">@{user.username}</p>
                            )}


                            <div className="space-y-3">
                                <div className="flex items-center text-gray-300">
                                    <FaEnvelope className="mr-3 text-cyan-400" />
                                    {isEditing ? (
                                        <input
                                            type="email"
                                            name="email"
                                            value={editableUser.email}
                                            onChange={handleChange}
                                            className="bg-gray-700 p-1 rounded w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                        />
                                    ) : (
                                        <span>{user.email}</span>
                                    )}
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <FaPhone className="mr-3 text-cyan-400" />
                                    {isEditing ? (
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={editableUser.phone}
                                            onChange={handleChange}
                                            className="bg-gray-700 p-1 rounded w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                        />
                                    ) : (
                                        <span>{user.phone}</span>
                                    )}
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <FaMapMarkerAlt className="mr-3 text-cyan-400" />
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            name="address"
                                            value={editableUser.address}
                                            onChange={handleChange}
                                            className="bg-gray-700 p-1 rounded w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                        />
                                    ) : (
                                        <span>{user.address}</span>
                                    )}
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <FaCalendarAlt className="mr-3 text-cyan-400" />
                                    <span>Member Since: {user.memberSince}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bio and Interests */}
                    <div className="mt-8 pt-6 border-t border-gray-700">
                        <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                            <FaUserCircle className="mr-3 text-cyan-500" /> About Me
                        </h3>
                        {isEditing ? (
                            <textarea
                                name="bio"
                                value={editableUser.bio}
                                onChange={handleChange}
                                rows={4}
                                className="w-full bg-gray-700 p-3 rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        ) : (
                            <p className="text-gray-300 leading-relaxed mb-6">{user.bio}</p>
                        )}

                        <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                            <FaHeart className="mr-3 text-cyan-500" /> Interests
                        </h3>
                        {isEditing ? (
                            <input
                                type="text"
                                name="interests"
                                value={editableUser.interests}
                                onChange={handleChange}
                                className="w-full bg-gray-700 p-3 rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        ) : (
                            <p className="text-gray-300">{user.interests}</p>
                        )}
                    </div>
                </div>

                {/* Recent Activity Section */}
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg
                                transform transition-all duration-300 hover:scale-[1.005] hover:shadow-cyan-500/50 border border-transparent hover:border-cyan-500">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <FaHistory className="mr-3 text-cyan-500" /> Recent Activity
                    </h2>
                    <ul className="space-y-4">
                        {recentActivity.map((activity, index) => (
                            <li key={index} className="flex items-center text-gray-300 bg-gray-700 p-3 rounded-lg border border-gray-600">
                                <FaBook className="mr-3 text-cyan-400" />
                                {activity}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;