import { GiBookshelf } from "react-icons/gi";
import { Link } from "react-router-dom"; // Use react-router-dom for Link
import BookGrid from "../Components/BookGrid";

const Home = () => {
  return (
    <>
      <div className="relative flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-4 py-16 overflow-hidden"> {/* Added relative, min-h-screen, gradient, padding, overflow-hidden */}
        {/* Decorative background elements for visual interest */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-cyan-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-fuchsia-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="relative z-10 text-center mb-10 max-w-2xl px-4"> {/* Increased max-width, added padding */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg animate-fade-in-down"> {/* Larger, bolder, leading, shadow, animation */}
            Explore Books Like Never Before
          </h1>
          <p className="text-lg md:text-xl italic text-gray-300 animate-fade-in-up"> {/* Larger, animation */}
            Discover new titles daily and expand your horizons with our curated
            recommendations.
          </p>
        </div>

        {/* Updated Bookshelf Icon */}
        <GiBookshelf className="relative z-10 text-cyan-500 text-7xl md:text-8xl animate-bounce-custom mb-8 drop-shadow-xl" /> {/* Larger, cyan, custom bounce, shadow */}

        <div className="relative z-10 mt-6 text-center">
          <Link to="/category">
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 animate-fade-in"> {/* Styled button */}
              Start Exploring
            </button>
          </Link>
          <p className="text-md md:text-lg text-gray-400 mt-4 animate-fade-in animation-delay-500"> {/* Larger text, animation */}
            Join thousands of readers worldwide.
          </p>
        </div>
      </div>
      <BookGrid /> {/* Assuming BookGrid has its own consistent styling */}
    </>
  );
};

export default Home;