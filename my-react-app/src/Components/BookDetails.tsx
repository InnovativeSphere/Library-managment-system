import React, { useEffect, useState } from "react";
import { fetchBookDetails } from "../Redux/bookSlice";
import Loader from "./Loader";
import NotFound from "./NotFound";
import { AppDispatch, RootState } from "../Redux/store";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addBookToWishlist } from "../Redux/wishListSlice";
import { FaCheckCircle } from "react-icons/fa";

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
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div className="bg-opacity-50 backdrop-blur-md w-full h-full absolute" />
        <div className="bg-white text-black rounded-lg p-6 z-10 shadow-lg flex flex-col items-center">
          <FaCheckCircle className="text-green-500 text-4xl mb-4" />
          <p className="text-lg font-semibold">{message}</p>
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
      setModalMessage("Book successfully added!");
      showModal();
    }
  };

  const showModal = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 500);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#001f3f] flex items-center justify-center p-6 font-sans text-white">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#001f3f] flex items-center justify-center p-6 font-sans text-red-500">
        <p className="text-xl">{error}</p>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="min-h-screen bg-[#001f3f] flex items-center justify-center p-6 font-sans text-gray-300">
        <NotFound />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-10 p-6 font-sans">
      <div className="bg-[#2c3e50] rounded-xl shadow-lg max-w-4xl w-full p-8 flex flex-col md:flex-row gap-8 transition-transform hover:scale-105 duration-300">
        <button
          onClick={() => navigate(-1)}
          className="bg-[#16213e] hover:bg-[#0f3460] transition duration300 py-2 px-4 rounded-lg mb-4 md:mb-0 self-start text-white font-semibold"
        >
          Back
        </button>

        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center items-start md:items-center">
          {book.volumeInfo?.imageLinks?.thumbnail ? (
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={`Cover of ${book.volumeInfo?.title || "book"}`}
              className="rounded-lg shadow-md max-w-full h-auto md:h-80 hover:scale-105 transition-transform duration-300 object-cover"
            />
          ) : (
            <div className="h-80 w-56 bg-gray-700 flex items-center justify-center rounded-lg text-gray-400 text-sm p-2">
              Cover not available
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col justify-start space-y-4 text-center md:text-left">
          <h2 className="text-4xl text-white md:text-4xl font-bold mb-2">
            {book.volumeInfo?.title || "No Title"}
          </h2>

          <p className="text-gray-400 text-sm mb-4">
            {book.volumeInfo?.publishedDate
              ? new Date(book.volumeInfo.publishedDate).getFullYear()
              : "N/A"}
          </p>

          {book.volumeInfo?.averageRating !== undefined && (
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <svg
                className="w-6 h-6 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.4-.921 1.7 0l1.712 5.265 5.178.75c.927.134 1.308 1.272.63 1.923l-4.185 4.07 1.046 6.094c.2 1.166-.997 2.07-2.03 1.477L10 15.347l-5.603 2.94c-1.033.593-2.23-.311-2.03-1.477l1.046-6.094-4.185-4.07c-.678-.651-.297-1.789.63-1.923l5.178-.75 1.712-5.265z" />
              </svg>
              <span className="text-lg font-semibold">
                {book.volumeInfo?.averageRating?.toFixed(1) || "N/A"} (
                {book.volumeInfo?.ratingsCount || 0} reviews)
              </span>
            </div>
          )}

          <p className="text-gray-300 text-base leading-relaxed max-w-xl mx-auto md:mx-0">
            {book.volumeInfo?.description
              ? book.volumeInfo.description.length > 300
                ? `${book.volumeInfo.description.substring(0, 350)}...`
                : book.volumeInfo.description
              : "No description available."}
          </p>

          <button
            onClick={handleAddToWishlist}
            className="mt-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded transition duration-300"
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
