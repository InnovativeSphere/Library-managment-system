import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
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

  const setSearchTerm = (term: string) => ({
    type: "SET_SEARCH_TERM",
    payload: term,
  });
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(`/books/search?query=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-start p-8 font-sans text-white relative">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 bg-[#16213e] hover:bg-[#0f3460] transition duration-300 py-2 px-4 rounded-lg font-semibold flex items-center"
      >
        Back
      </button>

      <h1 className="text-4xl font-extrabold mb-8 text-indigo-400 shadow-lg">
        Select a Category
      </h1>

      <form onSubmit={handleSearchSubmit} className="mb-8 w-full max-w-lg">
        <div className="flex shadow-lg rounded-lg overflow-hidden">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search books..."
            className="flex-1 p-3 bg-[#16213e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
          />
          <button
            type="submit"
            className="bg-[#0f3460] hover:bg-[#16213e] duration-300 flex items-center px-4"
          >
            <FaSearch className="text-white text-xl" />
          </button>
        </div>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 w-full max-w-6xl">
        {subjects.map((subject) => (
          <Link
            key={subject}
            to={`/books/${subject}`}
            className="bg-[#16213e] hover:bg-[#0f3460] rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-xl font-semibold text-indigo-300 mb-2">
              {subject.charAt(0).toUpperCase() + subject.slice(1)}
            </h2>
            <p className="text-gray-300">Explore {subject} books</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryLinks;
