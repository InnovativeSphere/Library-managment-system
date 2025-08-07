import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../Redux/bookSlice";
import searchReducer from "./searchSlice";
import wishListSlice from "./wishListSlice";
import userReducer from "../Redux/userSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
    search: searchReducer,
    wishlist: wishListSlice,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
