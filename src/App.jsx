import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/navbar.jsx";

import SignIn from "./pages/SignInPage.jsx";
import SignUp from "./pages/SignUpPage.jsx";

import CartPage from "./pages/CartPage.jsx";
import Checkout from "./pages/Checkout.jsx";
import { RequireAuth } from "./contexts/AuthContext.jsx";
import OrderConfirmation from "./pages/OrderConfirmation.jsx";

import About from "./pages/About.jsx";
import SafetyPage from "./pages/SafetyPage.jsx";

import ProductDetails from "./pages/ProductDetails.jsx";
import Home from "./pages/Home.jsx";

import { getPublicItems } from "./services/api";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let mounted = true;

    getPublicItems()
      .then((data) => {
        let items = [];

        if (Array.isArray(data)) items = data;
        else if (data?.results && Array.isArray(data.results)) items = data.results;
        else if (data?.items && Array.isArray(data.items)) items = data.items;
        else if (data?.data && Array.isArray(data.data)) items = data.data;
        else console.log("[App] Unexpected API shape:", data);

        if (mounted) setProducts(items);
      })
      .catch((err) => console.error("Failed to load products:", err));

    return () => {
      mounted = false;
    };
  }, []);

  const handleAddToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);

    if (exists) {
      alert("Product already in cart");
      return;
    }

    setCartItems((prev) => [...prev, { ...product, qty: 1 }]);
  };

  const updateQty = (id, type) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: type === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <BrowserRouter>
      <Navbar cartItems={cartItems} />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home products={products} />} />

        {/* PRODUCT DETAILS */}
        <Route
          path="/product/:id"
          element={<ProductDetails products={products} handleAddToCart={handleAddToCart} />}
        />

        {/* AUTH */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* CART */}
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              updateQty={updateQty}
              removeItem={removeItem}
            />
          }
        />

        {/* ABOUT */}
        <Route path="/about" element={<About />} />

        {/* CHECKOUT (Protected) */}
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout
                cartItems={cartItems}
                clearCart={() => setCartItems([])}
              />
            </RequireAuth>
          }
        />

        {/* ORDER CONFIRMATION */}
        <Route path="/order-confirmation/:id" element={<OrderConfirmation />} />

        {/* SAFETY */}
        <Route path="/safety" element={<SafetyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
