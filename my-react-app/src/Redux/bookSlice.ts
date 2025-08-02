import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API_KEY from "../../apiConfig";

interface ImageLinks {
  thumbnail?: string;
}

interface Book {
  id: number;
  volumeInfo: BookVolumeInfo;
}

interface BookVolumeInfo {
  authors: any;
  title: string;
  imageLinks?: ImageLinks;
  publishedDate?: string;
  averageRating?: number;
  ratingsCount?: number;
  description?: string;
}

interface BookDetails {
  id: string | number;
  volumeInfo: BookVolumeInfo;
}

interface BooksState {
  books: Book[];
  selectedBook: BookDetails | null;
  loading: boolean;
  error: string | null;
}

const initialState: BooksState = {
  books: [],
  selectedBook: null,
  loading: false,
  error: null,
};

const subjects = [
  "fiction",
  "science",
  "technology",
  "sci-fi",
  "fantasy",
  "thriller",
  "romance",
  "mystery",
  "horror",
  "biography",
  "self-help",
  "historical",
  "young adult",
  "children",
  "poetry",
  "cookbook",
  "travel",
  "health",
  "graphic novel",
  "true crime",
  "spirituality",
  "art",
  "business",
  "children's books",
  "comics",
  "dystopian",
  "economics",
  "education",
  "engineering",
  "environment",
  "fantasy fiction",
  "gaming",
  "government",
  "horror fiction",
  "music",
  "philosophy",
  "psychology",
  "religion",
  "science fiction",
  "sports",
  "technology books",
  "travel memoir",
  "web development",
  "poetry collection",
  "women's fiction",
  "young adult fantasy",
  "zoology",
];

export const fetchBooks = createAsyncThunk<any, string | undefined>(
  "books/fetchBooks",
  async (searchTerm) => {
    let apiUrl;

    if (searchTerm) {
      apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        searchTerm
      )}&maxResults=9&key=${API_KEY}`;
    } else {
      const randomSubject =
        subjects[Math.floor(Math.random() * subjects.length)];
      apiUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:${randomSubject}&maxResults=16&key=${API_KEY}`;
    }

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }
    const data = await response.json();
    return data.items || [];
  }
);


export const fetchBookDetails = createAsyncThunk<BookDetails, string>(
  "books/fetchBookDetails",
  async (id: string) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch book details for ID: ${id}`);
    }

    const data = await response.json();

    if (!data.volumeInfo) {
      throw new Error("No volume info found in the response");
    }

    return {
      id: data.id || "unknown-id",
      volumeInfo: {
        title: data.volumeInfo?.title || "No Title",
        authors: data.volumeInfo?.authors || [], 
        imageLinks: data.volumeInfo?.imageLinks,
        publishedDate: data.volumeInfo?.publishedDate || "N/A", 
        averageRating: data.volumeInfo?.averageRating || null, 
        ratingsCount: data.volumeInfo?.ratingsCount || 0,
        description: data.volumeInfo?.description || "No Description",
      },
    };
  }
);


const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;

        const uniqueBooks: Book[] = Array.from(
          new Map<string, Book>(
            action.payload.map((item: any) => [
              item.id,
              {
                id: item.id,
                volumeInfo: {
                  title: item.volumeInfo?.title || "No Title",
                  imageLinks: item.volumeInfo?.imageLinks,
                  publishedDate: item.volumeInfo?.publishedDate,
                  averageRating: item.volumeInfo?.averageRating,
                  ratingsCount: item.volumeInfo?.ratingsCount,
                  description: item.volumeInfo?.description,
                },
              },
            ])
          ).values()
        );

        state.books = uniqueBooks;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch books";
      })

      .addCase(fetchBookDetails.pending, (state) => {
        state.loading = true;
        state.selectedBook = null;
        state.error = null;
      })
      .addCase(fetchBookDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedBook = action.payload;
      })
      .addCase(fetchBookDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch book details";
      });
  },
});

export default booksSlice.reducer;
