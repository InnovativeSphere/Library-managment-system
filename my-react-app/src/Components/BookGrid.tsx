import React, { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../Redux/bookSlice";
import Loader from "./Loader";
import NotFound from "./NotFound";
import { AppDispatch } from "../Redux/store";
import { FaStar } from 'react-icons/fa'; // Import FaStar for ratings

interface BookVolumeInfo {
  title: string;
  imageLinks?: { thumbnail?: string };
  publishedDate?: string;
  averageRating?: number;
  ratingsCount?: number;
  description?: string;
}

interface Book {
  id: string;
  volumeInfo: BookVolumeInfo;
}

const BookGrid: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { books, loading, error } = useSelector((state: any) => state.books);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("query") || "";

  useEffect(() => {
    dispatch(fetchBooks(searchTerm));
  }, [searchTerm, dispatch])
  ;

  const getPublishedYear = (dateString?: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.getFullYear();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex justify-center items-center text-red-500">
       <NotFound/>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 flex justify-center items-center">
        <NotFound />
      </div>
    );
  }


  
  return (
    <div className="min-h-screen bg-gray-900 p-4 sm:p-6 lg:p-8"> {/* Added consistent background and padding */}
      <div className="max-w-7xl mx-auto py-6"> {/* Adjusted padding */}
        {/* <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8 text-center tracking-wide">
          Search Results for "<span className="text-cyan-500">{searchTerm}</span>"
        </h2> */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"> {/* Adjusted gap and added xl column */}
          {books.map((book: Book) => (
            <Link
              key={book.id}
              to={`/books/detail/${book.id}`}
              className="bg-gray-800 text-white rounded-xl shadow-lg overflow-hidden
                         transition-all duration-300 transform hover:scale-[1.02] hover:shadow-cyan-500/50
                         border border-transparent hover:border-cyan-500 flex flex-col group" // Added group class for image hover
            >
              <div className="h-48 bg-gray-700 flex items-center justify-center overflow-hidden rounded-t-xl relative"> {/* Increased height and darker background */}
                {book.volumeInfo.imageLinks?.thumbnail ? (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={`Cover of ${book.volumeInfo.title}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" // Apply group-hover
                  />
                ) : (
                  <div className="text-gray-400 font-medium text-center p-4 text-sm"> {/* Increased padding */}
                    Cover not available
                  </div>
                )}
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between"> {/* Adjusted padding, added flex-grow */}
                <h3 className="text-lg font-semibold line-clamp-2 mb-2"> {/* Increased font size */}
                  {book.volumeInfo.title}
                </h3>
                <p className="text-gray-400 text-sm mb-1"> {/* Adjusted text color and size */}
                  Published: <span className="text-gray-300">{getPublishedYear(book.volumeInfo.publishedDate)}</span>
                </p>
                {book.volumeInfo.averageRating !== undefined && (
                  <div className="flex items-center space-x-1 mb-2"> {/* Adjusted spacing and margin */}
                    <FaStar className="w-4 h-4 text-yellow-400" /> {/* Replaced SVG with FaStar icon */}
                    <span className="text-gray-300 text-sm"> {/* Adjusted text color and size */}
                      {book.volumeInfo.averageRating.toFixed(1)} (
                      {book.volumeInfo.ratingsCount || 0} reviews)
                    </span>
                  </div>
                )}
                {book.volumeInfo.description && (
                  <p className="text-gray-400 text-xs line-clamp-3 leading-snug"> {/* Adjusted text color, increased line clamp, leading-snug */}
                    {book.volumeInfo.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookGrid;