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
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import PrivateRoute from "./Components/PrivateRoute";
import AboutUs from "./Pages/About";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<CategoryLinks />} />
        <Route path="/books/:category" element={<BookGrid />} />
        <Route path="/books/detail/:id" element={<BookDetail />} />

        <Route
          path="/wishList"
          element={<PrivateRoute element={<Wishlist />} />}
        />
        <Route
          path="/contact"
          element={<PrivateRoute element={<ContactUs />} />}
        />
        <Route
          path="/dashboard"
          element={<PrivateRoute element={<Dashboard />} />}
        />
        <Route
          path="/profile"
          element={<PrivateRoute element={<Profile />} />}
        />

        <Route path="/about" element={<AboutUs />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </Router>
  );
}
