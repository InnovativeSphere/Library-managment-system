import React, { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../Redux/bookSlice";
import Loader from "./Loader";
import NotFound from "./NotFound";
import { AppDispatch } from "../Redux/store";

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
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
       <NotFound/>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <NotFound />
      </div>
    );
  }


  
  return (
    <div className="max-w-7xl mx-auto p-6 py-10">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book: Book) => (
          <Link
            key={book.id}
            to={`/books/detail/${book.id}`}
            className="bg-[#1a1a2e] text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 p-4"
            style={{ width: "100%" }}
          >
            <div className="h-40 bg-gray-800 flex items-center justify-center overflow-hidden rounded-t-lg">
              {book.volumeInfo.imageLinks?.thumbnail ? (
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={`Cover of ${book.volumeInfo.title}`}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              ) : (
                <div className="text-gray-400 font-medium text-center p-2 text-sm">
                  Cover not available
                </div>
              )}
            </div>
            <div className="p-2 space-y-1 border-t border-gray-600">
              <h3 className="text-md font-semibold line-clamp-2">
                {book.volumeInfo.title}
              </h3>
              <p className="text-xs">
                Published: {getPublishedYear(book.volumeInfo.publishedDate)}
              </p>
              {book.volumeInfo.averageRating !== undefined && (
                <div className="flex items-center space-x-1 mt-1">
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.037a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.037a1 1 0 00-1.175 0l-2.8 2.037c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.049 9.719c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs">
                    {book.volumeInfo.averageRating.toFixed(1)} (
                    {book.volumeInfo.ratingsCount || 0} reviews)
                  </span>
                </div>
              )}
              {book.volumeInfo.description && (
                <p className="text-gray-300 text-xs line-clamp-2 mt-1">
                  {book.volumeInfo.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookGrid;
