import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux/store";
import { removeBookFromWishList } from "../Redux/wishListSlice";
import { FaCheckCircle, FaTrashAlt } from "react-icons/fa";

interface SuccessModalProps {
  message: string;
  isVisible: boolean;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ message, isVisible }) => {
  return (
    isVisible && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm" />
        <div className="relative bg-gray-800 text-white rounded-lg p-8 shadow-2xl flex flex-col items-center animate-fade-in-up">
          <FaCheckCircle className="text-cyan-500 text-5xl mb-5" />
          <p className="text-xl font-semibold text-center">{message}</p>
        </div>
      </div>
    )
  );
};

const Wishlist: React.FC = () => {
  const wishlistBooks = useSelector((state: RootState) => state.wishlist.books);
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleRemoveBook = (id: string) => {
    console.log("Dispatching remove for book id:", id);
    dispatch(removeBookFromWishList(id));
    setModalMessage("Book removed from Wishlist!");
    showModal();
  };

  const showModal = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6 font-sans text-white">
      <h2 className="text-5xl lg:text-6xl font-extrabold mb-10 text-center text-white drop-shadow-lg">
        Your <span className="text-cyan-500">Wishlist</span>
      </h2>

      {wishlistBooks.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-180px)]">
          <p className="text-gray-400 text-xl md:text-2xl text-center mb-4">
            It looks like your wishlist is empty.
          </p>
          <p className="text-gray-500 text-md md:text-lg text-center">
            Start exploring books to add them here!
          </p>
        </div>
      ) : (
        <ul className="space-y-6 max-w-4xl mx-auto">
          {wishlistBooks.map((book, index) => (
            <li
              key={`${book.id}-${index}`}
              className="bg-gray-800 rounded-xl p-5 flex flex-col md:flex-row justify-between items-center transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl border border-transparent hover:border-cyan-700"
            >
              <div className="flex flex-col md:flex-row items-center w-full md:w-auto mb-4 md:mb-0 text-center md:text-left"> {/* Added flex-col and text-center for mobile */}
                {book.volumeInfo.imageLinks?.thumbnail ? (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={`Cover of ${book.volumeInfo.title}`}
                    className="w-24 h-auto rounded-lg mb-3 md:mb-0 md:mr-5 shadow-lg border border-gray-700 object-cover flex-shrink-0" // Adjusted margin for mobile
                  />
                ) : (
                  <div className="w-24 h-32 bg-gray-700 rounded-lg mb-3 md:mb-0 md:mr-5 flex items-center justify-center text-gray-400 text-sm p-2 border border-gray-600 flex-shrink-0">
                    No Image Available
                  </div>
                )}
                <div className="flex-grow"> {/* Removed text-center/left here as parent handles it */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 leading-tight">
                    {book.volumeInfo.title}
                  </h3>
                  <p className="text-cyan-400 text-lg font-medium">
                    {book.volumeInfo.authors?.join(", ") || "Unknown Author"}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Published: {book.volumeInfo.publishedDate || "N/A"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveBook(book.id)}
                className="bg-red-700 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <FaTrashAlt /> Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <SuccessModal message={modalMessage} isVisible={modalVisible} />
    </div>
  );
};

export default Wishlist;