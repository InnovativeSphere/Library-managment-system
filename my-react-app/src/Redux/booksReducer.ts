import { AnyAction } from "redux";

interface BookState {
  books: any[];
  loading: boolean;
  error: string | null;
}

const initialState: BookState = {
  books: [],
  loading: false,
  error: null,
};

interface ImageLinks {
  thumbnail?: string;
}

interface Book {
  id: number;
  volumeInfo: BookVolumeInfo;
}

interface BookVolumeInfo {
  title: string;
  imageLinks?: ImageLinks;
  publishedDate?: string;
  averageRating?: number;
  ratingsCount?: number;
  description?: string;
}




const booksReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "books/fetchBooks/pending":
      return { ...state, loading: true };
      
    case "books/fetchBooks/fulfilled":
      const uniqueBooks = Array.from(
        new Map(action.payload.map((book : Book) => [book.id, book])).values()
      );

      return { ...state, loading: false, books: uniqueBooks };

    case "books/fetchBooks/rejected":
      return { ...state, loading: false, error: action.error };
      
    default:
      return state;
  }
};


export default booksReducer