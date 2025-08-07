import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaArrowLeft } from "react-icons/fa"; // Import FaArrowLeft
import { useDispatch, useSelector } from "react-redux";

const subjects = [
  "fiction",
  "science",
  "technology",
  "sci-fi",
  "fantasy",
  "thriller",
  "romance",
  "mystery",
  "horror",
  "biography",
  "self-help",
  "historical",
  "young adult",
  "children",
  "poetry",
  "cookbook",
  "travel",
  "health",
  "graphic novel",
  "true crime",
  "spirituality",
  "art",
  "business",
  "children's books",
  "comics",
  "dystopian",
  "economics",
  "education",
  "engineering",
  "environment",
  "fantasy fiction",
  "gaming",
  "government",
  "horror fiction",
  "music",
  "philosophy",
  "psychology",
  "religion",
  "science fiction",
  "sports",
  "technology books",
  "travel memoir",
  "web development",
  "poetry collection",
  "women's fiction",
  "young adult fantasy",
  "zoology",
];

const CategoryLinks: React.FC = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(
    (state: { search: { searchTerm: string } }) => state.search.searchTerm
  );
  const navigate = useNavigate();

  // This should ideally be an action creator defined in your Redux actions file
  // For this example, keeping it inline for direct application.
  const setSearchTerm = (term: string) => ({
    type: "SET_SEARCH_TERM",
    payload: term,
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Only navigate if searchTerm is not empty
    if (searchTerm.trim()) {
      navigate(`/books/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-start p-4 sm:p-6 lg:p-8 text-gray-100">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-20 left-4 z-10 p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transform hover:scale-105"
      >
        <FaArrowLeft className="text-xl" />
      </button>

      {/* Header */}
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-white tracking-wide text-center mt-12 sm:mt-0">
        <span className="text-cyan-500">Explore</span> Categories
      </h1>

      {/* Search Form */}
      <form onSubmit={handleSearchSubmit} className="mb-10 w-full max-w-lg px-4">
        <div className="flex shadow-xl rounded-lg overflow-hidden border border-gray-700 focus-within:border-cyan-500 transition-all duration-300">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search books by title or author..."
            className="flex-1 p-3 sm:p-4 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-0 transition-all duration-200"
          />
          <button
            type="submit"
            className="bg-cyan-600 hover:bg-cyan-700 duration-300 flex items-center px-5 sm:px-6 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <FaSearch className="text-white text-xl" />
          </button>
        </div>
      </form>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 px-4 w-full max-w-6xl">
        {subjects.map((subject) => (
          <Link
            key={subject}
            to={`/books/${subject}`}
            className="bg-gray-800 rounded-xl p-6 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-cyan-500/50 border border-transparent hover:border-cyan-500 flex flex-col justify-between items-start"
          >
            <h2 className="text-2xl font-semibold text-white mb-2 tracking-wide">
              {subject.charAt(0).toUpperCase() + subject.slice(1)}
            </h2>
            <p className="text-gray-400 text-sm">Explore books in {subject} category</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryLinks;