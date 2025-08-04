import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import BookGrid from "./Components/BookGrid";
import Footer from "./Components/Footer";
import CategoryLinks from "./Components/CategoryLinks";
import BookDetail from "./Components/BookDetails";
import Wishlist from "./Components/WishList";
import ContactUs from "./Pages/ContactUs";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<CategoryLinks />} />
        <Route path="/books/:category" element={<BookGrid />} />
        <Route path="/books/detail/:id" element={<BookDetail />} />
        <Route path="/wishList" element={<Wishlist />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

