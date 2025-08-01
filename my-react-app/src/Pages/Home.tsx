import { GiBookshelf } from "react-icons/gi";
import { Link } from "react-router";
import BookGrid from "../Components/BookGrid";

const Home = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white px-4">
      <hr />
      <div className="text-center mb-8 max-w-xl">
        <h1 className="text-4xl font-bold mb-4">
          Explore Books Like Never Before
        </h1>
        {/* <p className="text-lg mb-6">Your digital library awaits. Dive into a world of knowledge, stories, and adventures right at your fingertips.</p> */}
        <p className="text-md italic text-gray-300">
          Discover new titles daily and expand your horizons with our curated
          recommendations.
        </p>
      </div>
      <GiBookshelf className="text-blue-400 text-6xl animate-pulse mb-4" />
      <div className="mt-6 text-center">
        <Link to="/category">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded transition-colors hover:bg-blue-600 mb-4">
            Start Reading
          </button>
        </Link>
        <p className="text-sm text-gray-400">
          Join thousands of readers worldwide.
        </p>
      </div>
    </div>
    <BookGrid/>
    </>
  
  );
};

export default Home;
