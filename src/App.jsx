import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/navbar.jsx";

import SignIn from "./pages/SignInPage.jsx";
import SignUp from "./pages/SignUpPage.jsx";

import CartPage from "./pages/CartPage.jsx";
import Checkout from "./pages/Checkout.jsx";
import { RequireAuth, AuthProvider } from "./contexts/AuthContext.jsx";
import OrderConfirmation from "./pages/OrderConfirmation.jsx";

import About from "./pages/About.jsx";
import SafetyPage from "./pages/SafetyPage.jsx";

import ProfilePage from "./pages/ProfilePage.jsx";

import ProductDetails from "./pages/ProductDetails.jsx";
import Home from "./pages/Home.jsx";

import { getPublicItems } from "./services/api";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const LOCAL_PRODUCTS_KEY = "rg_local_products";
  const CART_ITEMS_KEY = "rg_cart_items";

  useEffect(() => {
    let mounted = true;

    // Fetch remote items, but always merge with any locally-donated products
    const load = async () => {
      let items = [];
      try {
        const data = await getPublicItems();
        if (Array.isArray(data)) items = data;
        else if (data?.results && Array.isArray(data.results)) items = data.results;
        else if (data?.items && Array.isArray(data.items)) items = data.items;
        else if (data?.data && Array.isArray(data.data)) items = data.data;
        else console.log("[App] Unexpected API shape:", data);
      } catch (err) {
        console.error("Failed to load products:", err);
        items = [];
      }

      // load locally donated products
      let local = [];
      try {
        const raw = localStorage.getItem(LOCAL_PRODUCTS_KEY);
        if (raw) local = JSON.parse(raw);
      } catch (e) {
        console.warn("Failed to parse local products", e);
      }

      if (mounted) setProducts([...(local || []), ...(items || [])]);
    };

    // load cart items from localStorage
    try {
      const cartRaw = localStorage.getItem(CART_ITEMS_KEY);
      if (cartRaw && mounted) {
        const cart = JSON.parse(cartRaw);
        if (Array.isArray(cart)) setCartItems(cart);
      }
    } catch (e) {
      console.warn("Failed to parse cart items", e);
    }

    load();

    return () => {
      mounted = false;
    };
  }, []);

  // Add a new product (donated) locally and persist to localStorage
  const addProduct = (payload) => {
    // payload should match user's provided structure
    const id = `local-${Date.now()}`;
    const slug = payload.slug || Math.random().toString(36).slice(2, 10);
    const newProduct = {
      id,
      slug,
      title: payload.name || payload.title || "Untitled",
      name: payload.name || payload.title || "Untitled",
      description: payload.description || "",
      category: payload.category ?? 0,
      condition: payload.condition || "USED",
      is_free: payload.is_free ?? false,
      price: payload.price ?? "0",
      is_negotiable: payload.is_negotiable ?? false,
      stock: payload.stock ?? 1,
      location: payload.location || "Unknown",
      status: payload.status || "PUBLISHED",
      image: payload.image || null,
      video: payload.video || null,
    };

    // update in-memory products and persist client-only list
    setProducts((prev) => {
      const updated = [newProduct, ...(prev || [])];
      try {
        // persist only locally created products (filter those with id starting with 'local-')
        const localOnly = updated.filter((p) => String(p.id).startsWith("local-"));
        localStorage.setItem(LOCAL_PRODUCTS_KEY, JSON.stringify(localOnly));
      } catch (e) {
        console.warn("Failed to persist local products", e);
      }

      return updated;
    });

    return newProduct;
  };

  const handleAddToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);

    if (exists) {
      alert("Product already in cart");
      return;
    }

    const newCart = [...cartItems, { ...product, qty: 1 }];
    setCartItems(newCart);
    try {
      localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(newCart));
    } catch (e) {
      console.warn("Failed to persist cart items", e);
    }
  };

  const updateQty = (id, type) => {
    const newCart = cartItems.map((item) =>
      item.id === id
        ? {
          ...item,
          qty: type === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1),
        }
        : item
    );
    setCartItems(newCart);
    try {
      localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(newCart));
    } catch (e) {
      console.warn("Failed to persist cart items", e);
    }
  };

  const removeItem = (id) => {
    const newCart = cartItems.filter((item) => item.id !== id);
    setCartItems(newCart);
    try {
      localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(newCart));
    } catch (e) {
      console.warn("Failed to persist cart items", e);
    }
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar cartItems={cartItems} />

        <Routes>
          {/* HOME */}
          <Route path="/" element={<Home products={products} addProduct={addProduct} />} />

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

          {/* PROFILE (Protected) */}
          <Route
            path="/profile"
            element={<ProfilePage />}
          />

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
    </AuthProvider>


  );
}
