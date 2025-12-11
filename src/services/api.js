import axios from "axios";

const api = axios.create({
  baseURL: "https://regive.pythonanywhere.com/api/",
  timeout: 10000,
});

export async function getPublicItems(params = {}) {
  const res = await api.get("public-items/", { params });
  return res.data;
}

export async function getItem(id) {
  const res = await api.get(`public-items/${id}/`);
  return res.data;
}

export default api;

// --- Auth helper ---
export function setAuthToken(token) {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
}

// --- Categories ---
export async function getCategories(params = {}) {
  const res = await api.get("categories/", { params });
  return res.data;
}

// --- Items (admin/complete) ---
export async function getItems(params = {}) {
  const res = await api.get("items/", { params });
  return res.data;
}

// --- Reviews ---
export async function getReviews(params = {}) {
  // e.g. { item: id }
  const res = await api.get("reviews/", { params });
  return res.data;
}

export async function createReview(payload) {
  const res = await api.post("reviews/", payload);
  return res.data;
}

// --- Carts ---
export async function getCarts(params = {}) {
  const res = await api.get("carts/", { params });
  return res.data;
}

export async function createCart(payload) {
  const res = await api.post("carts/", payload);
  return res.data;
}

export async function updateCart(id, payload) {
  const res = await api.patch(`carts/${id}/`, payload);
  return res.data;
}

export async function deleteCart(id) {
  const res = await api.delete(`carts/${id}/`);
  return res.data;
}

// --- Wishlist ---
export async function getWishlist(params = {}) {
  const res = await api.get("wishlist/", { params });
  return res.data;
}

export async function addToWishlist(payload) {
  const res = await api.post("wishlist/", payload);
  return res.data;
}

export async function removeFromWishlist(id) {
  const res = await api.delete(`wishlist/${id}/`);
  return res.data;
}

// --- Orders ---
export async function createOrder(payload) {
  const res = await api.post("orders/", payload);
  return res.data;
}

export async function getOrders(params = {}) {
  const res = await api.get("orders/", { params });
  return res.data;
}

export async function getOrder(id) {
  const res = await api.get(`orders/${id}/`);
  return res.data;
}

// --- Addresses ---
export async function getAddresses(params = {}) {
  const res = await api.get("addresses/", { params });
  return res.data;
}

export async function createAddress(payload) {
  const res = await api.post("addresses/", payload);
  return res.data;
}

// Utility: expose raw axios instance for advanced usage
export { api as axiosInstance };

// --- Authentication ---
export async function login(credentials) {
  // expected credentials: { email, password }
  const res = await api.post("auth/login/", credentials);
  return res.data;
}

export async function register(payload) {
  // try common register endpoints; payload may include email, password, name
  try {
    const res = await api.post("auth/register/", payload);
    return res.data;
  } catch (e) {
    // fallback attempt
    const res = await api.post("auth/signup/", payload);
    return res.data;
  }
}
