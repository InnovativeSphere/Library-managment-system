import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux/store";
import { removeBookFromWishList } from "../Redux/wishListSlice";
import { FaCheckCircle } from "react-icons/fa";

interface SuccessModalProps {
  message: string;
  isVisible: boolean;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ message, isVisible }) => {
  return (
    isVisible && (
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
        <div className=" bg-opacity-50 backdrop-blur-md w-full h-full absolute" />
        <div className="bg-white text-black rounded-lg p-6 z-10 shadow-lg flex flex-col items-center">
          <FaCheckCircle className="text-red-500 text-4xl mb-4" />
          <p className="text-lg font-semibold">{message}</p>
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
    setModalMessage("Book successfully removed!");
    showModal();
  };

  const showModal = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6 font-sans text-white">
      <h2 className="text-5xl font-extrabold mb-6 text-center">
        Your Wishlist
      </h2>
      {wishlistBooks.length === 0 ? (
        <p className="text-gray-400 text-lg text-center">
          Your wishlist is empty.
        </p>
      ) : (
        <ul className="space-y-4">
          {wishlistBooks.map((book, index) => (
            <li
              key={`${book.id}-${index}`}
              className="bg-[#2c3e50] rounded-lg p-4 flex justify-between items-center transition-transform transform hover:scale-102"
            >
              <div className="flex items-center">
                {book.volumeInfo.imageLinks?.thumbnail ? (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={`Cover of ${book.volumeInfo.title}`}
                    className="w-20 h-auto rounded-md mr-4"
                  />
                ) : (
                  <div className="w-20 h-24 bg-gray-700 rounded-md mr-4 flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-semibold mb-1">
                    {book.volumeInfo.title}
                  </h3>
                  <p className="text-gray-400">
                    {book.volumeInfo.authors?.join(", ") || "Unknown Author"}
                  </p>
                  <p className="text-gray-400">
                    {book.volumeInfo.publishedDate || "N/A"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveBook(book.id)}
                className="bg-red-600 hover:bg-red-500 text-white font-semibold py-1 px-4 rounded transition duration-300"
              >
                Remove
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
