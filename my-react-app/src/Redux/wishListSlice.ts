import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VolumeInfo {
  title: string;
  authors?: string[];
  publishedDate?: string;
  imageLinks?: {
    thumbnail?: string;
  };
}

interface Book {
  volumeInfo: VolumeInfo;
  id: string; 
}

interface WishListState {
  books: Book[];
}

const initialState: WishListState = {
  books: [] as Book[],
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addBookToWishlist(state, action: PayloadAction<Book>) {
      const existingBook = state.books.find(
        (book) => book.id === action.payload.id 
      );
      if (!existingBook) {
        state.books.push(action.payload);
      }
    },
    removeBookFromWishList(state, action: PayloadAction<string>) {
      const idToRemove = action.payload;
      console.log("Removing book with id: " + idToRemove);
      
     
      state.books = state.books.filter((book) => book.id !== idToRemove);
      
      
      console.log("Remaining books:", state.books.map(book => book.id));
    },
  },
});

export const { addBookToWishlist, removeBookFromWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
