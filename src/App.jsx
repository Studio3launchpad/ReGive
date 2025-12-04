import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/navbar.jsx";

import SignIn from "../src/pages/SignInPage.jsx";
import SignUp from "../src/pages/SignUpPage.jsx";

import CartPage from "../src/pages/CartPage.jsx";

import Checkout from "./pages/Checkout.jsx";
import { RequireAuth } from "./contexts/AuthContext.jsx";

import About from "./pages/About.jsx";

import SafetyPage from "./pages/SafetyPage.jsx";

import ProductDetails from "./pages/ProductDetails.jsx";

import Home from "./pages/Home.jsx";

// import "./styles/navbar.css";

// import "../src/styles/cart.css"

export default function App() {

  const products = [
    { id: 1, title: "Vintage Wooden Chair", image: "/src/assets/images/wooden-chair.jpg",description: "", location: "Lagos, Nigeria", distance: "3km away", price: 0, status: "Hot Deal", condition: "Good", likes: 127, views: 18, comments: 3, qty: 1, },
    { id: 2, title: "Kids Bicycle", image: "/src/assets/images/kids-bicycle.jpeg",description: "A lightweight kids’ bicycle designed for easy riding, balance, and fun outdoor adventures.", location: "Abuja, Nigeria", distance: "5km away", price: 10000, oldPrice: "₦25,000", status: "Reserved", condition: "Good", likes: 94, views: 12, comments: 6, qty: 1, },
    { id: 3, title: "Kitchen Blender", image: "/src/assets/images/blender.jpeg",description: "", location: "Port Harcourt", distance: "11km away", price: 0, condition: "Like New", likes: 189, views: 26, comments: 25, status: "Free", qty: 1, },
    { id: 4, title: "Modern Desk Lamp", image: "/src/assets/images/lamp.webp",description: "", location: "Lagos Nigeria", distance: "3km away", price: 5000, oldPrice: "₦12,000", condition: "Good", likes: 189, views: 26, comments: 25, qty: 1, },
    { id: 5, title: "Travel Bag", image: "/src/assets/images/travel bag.jpg",description: "", location: "Ibadan Nigeria", distance: "7km away", price: 0, condition: "Good", likes: 16, views: 112, comments: 25, status: "Free", qty: 1, },
    { id: 6, title: "Educational Books Set", image: "/src/assets/images/books.jpg",description: "", location: "Enugu Nigeria", distance: "4km away", price: 0, condition: "Excellent", likes: 21, views: 143, comments: 25, status: "Free", qty: 1, }
  ];

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart =(product) => {
    const isProductInCart = cartItems.find((item) => item.id === product.id);

    if (isProductInCart) {
      alert("product is already in the cart");
    } else {
      setCartItems((prevItems) => [...prevItems, product] )
    }

  }
    

   
   
   
   
    const updateQty = (id, type) => {
    setCartItems(cartItems.map(item =>
      item.id === id
        ? { ...item, qty: type === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1) }
        : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };


  return (
    <BrowserRouter>
      <Navbar cartItems={cartItems} />

      <Routes>
        {/* 🏠 HOME PAGE */}
        <Route
          path="/"
          element={<Home products={products}/>}
        />

        {/* 📄 PRODUCT DETAILS PAGE */}
        <Route path="/product/:id" element={<ProductDetails products={products} handleAddToCart={handleAddToCart} />} />

        {/* 🔐 AUTH PAGES */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

        {/* 🛒 CART PAGE */}
        <Route path="/cart" element={<CartPage cartItems={cartItems} updateQty={updateQty} removeItem={removeItem} />} />

        {/* ℹ️ ABOUT PAGE */}
        <Route path="/about" element={<About />} />

        {/* 💳 CHECKOUT PAGE (protected) */}
        <Route path="/checkout" element={<RequireAuth><Checkout /></RequireAuth>} />

        {/* 🛡️ SAFETY PAGE */}
        <Route path="/safety" element={<SafetyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
