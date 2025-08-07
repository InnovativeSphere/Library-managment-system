import React, { useEffect, useState } from "react";
import { fetchBookDetails } from "../Redux/bookSlice";
import Loader from "./Loader";
import NotFound from "./NotFound";
import { AppDispatch, RootState } from "../Redux/store";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addBookToWishlist } from "../Redux/wishListSlice";
import { FaCheckCircle, FaStar, FaArrowLeft } from "react-icons/fa"; // Import FaStar and FaArrowLeft

interface ImageLinks {
  thumbnail?: string;
}

interface Book {
  id: string;
  volumeInfo: BookVolumeInfo;
}

interface BookVolumeInfo {
  title: string;
  authors?: string[];
  publishedDate?: string;
  imageLinks?: ImageLinks;
  averageRating?: number;
  ratingsCount?: number;
  description?: string;
}

interface SuccessModalProps {
  message: string;
  isVisible: boolean;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ message, isVisible }) => {
  return (
    isVisible && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4"> {/* Use inset-0 for full screen */}
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm" /> {/* Darker, more blur */}
        <div className="relative bg-gray-800 text-white rounded-lg p-8 shadow-2xl flex flex-col items-center animate-fade-in-up"> {/* Darker modal, shadow, animation */}
          <FaCheckCircle className="text-cyan-500 text-5xl mb-5" /> {/* Cyan icon, larger */}
          <p className="text-xl font-semibold text-center">{message}</p> {/* Larger text */}
        </div>
      </div>
    )
  );
};

const BookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const {
    selectedBook: book,
    loading,
    error,
  } = useSelector((state: RootState) => state.books);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    if (id) {
      dispatch(fetchBookDetails(id))
        .unwrap()
        .then((response) => {
          console.log("Book details fetched:", response);
        })
        .catch((error) => {
          console.error("Failed to fetch book details:", error);
        });
    }
  }, [dispatch, id]);

  const handleAddToWishlist = () => {
    if (book) {
      const bookToAdd: Book = {
        id: String(book.id),
        volumeInfo: {
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors || [],
          imageLinks: book.volumeInfo.imageLinks || {},
          publishedDate: book.volumeInfo.publishedDate,
          averageRating: book.volumeInfo.averageRating,
          ratingsCount: book.volumeInfo.ratingsCount,
          description: book.volumeInfo.description,
        },
      };

      dispatch(addBookToWishlist(bookToAdd));
      setModalMessage("Book successfully added to Wishlist!"); // More specific message
      showModal();
    }
  };

  const showModal = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 1500); // Increased duration for better readability
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6 font-sans text-white">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6 font-sans text-red-500">
        <p className="text-xl">{error}</p>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6 font-sans text-gray-300">
        <NotFound />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center py-10 p-4 relative"> {/* Added flex-col and relative for back button */}
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 z-10 p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transform hover:scale-105"
      >
        <FaArrowLeft className="text-xl" />
      </button>

      <div className="bg-gray-800 rounded-xl shadow-2xl max-w-5xl w-full p-8 flex flex-col md:flex-row gap-8 transition-transform duration-300 mt-12 md:mt-0 border border-transparent hover:border-cyan-500"> {/* Updated background, shadow, hover effect, padding, margin */}
        <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 flex justify-center items-center"> {/* Adjusted width for image */}
          {book.volumeInfo?.imageLinks?.thumbnail ? (
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={`Cover of ${book.volumeInfo?.title || "book"}`}
              className="rounded-lg shadow-xl max-w-full h-auto object-cover border border-gray-700 transform transition-transform duration-300 hover:scale-105" // Added shadow, border, hover effect
              style={{ maxHeight: '400px' }} // Set max height for larger images
            />
          ) : (
            <div className="h-96 w-64 bg-gray-700 flex items-center justify-center rounded-lg text-gray-400 text-sm p-4 border border-gray-600"> {/* Increased size, added border */}
              Cover not available
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col justify-start space-y-4 text-center md:text-left text-gray-100"> {/* Adjusted text color */}
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-2 leading-tight"> {/* Larger, bolder title */}
            {book.volumeInfo?.title || "No Title"}
          </h2>
          {book.volumeInfo?.authors && book.volumeInfo.authors.length > 0 && (
            <p className="text-cyan-400 text-lg font-medium"> {/* Cyan authors */}
              By {book.volumeInfo.authors.join(", ")}
            </p>
          )}

          <p className="text-gray-400 text-sm">
            Published: <span className="text-gray-300">{book.volumeInfo?.publishedDate
              ? new Date(book.volumeInfo.publishedDate).getFullYear()
              : "N/A"}</span>
          </p>

          {book.volumeInfo?.averageRating !== undefined && (
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <FaStar className="w-5 h-5 text-yellow-400" /> {/* FaStar icon, slightly larger */}
              <span className="text-lg font-semibold text-gray-300">
                {book.volumeInfo?.averageRating?.toFixed(1) || "N/A"} (
                {book.volumeInfo?.ratingsCount || 0} reviews)
              </span>
            </div>
          )}

          <div className="text-gray-300 text-base leading-relaxed max-w-full md:max-w-none text-left"> {/* Full width, text-left */}
            <h3 className="text-xl font-semibold text-white mb-2 mt-4">Description:</h3>
            <p>
              {book.volumeInfo?.description
                ? book.volumeInfo.description
                : "No description available."}
            </p>
          </div>

          <button
            onClick={handleAddToWishlist}
            className="mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 self-center md:self-start transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900" // Styled button
          >
            Add to Wishlist
          </button>
        </div>
      </div>

      <SuccessModal message={modalMessage} isVisible={modalVisible} />
    </div>
  );
};

export default BookDetail;