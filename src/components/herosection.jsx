import "./../styles/hero.css";
import SearchBar from "./searchbar";
import hero from "../assets/images/Screenshot (2).png";
import { useState } from "react";

export default function HeroSection({ addProduct }) {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: 0,
    condition: "USED",
    is_free: false,
    price: "0",
    is_negotiable: false,
    stock: 1,
    location: "",
    status: "PUBLISHED",
    image: "",
    video: "",
  });

  const onChange = (k, v) => setForm((s) => ({ ...s, [k]: v }));

  const handleDonateClick = () => setShowModal(true);

  const handleSubmit = (e) => {
    e?.preventDefault();
    // basic validation
    if (!form.name) return alert("Please enter a name for the item");

    // construct payload matching the requested shape
    const payload = {
      ...form,
      slug: Math.random().toString(36).slice(2, 10),
    };

    if (typeof addProduct === "function") {
      addProduct(payload);
    } else {
      // fallback: persist to localStorage directly
      try {
        const key = "rg_local_products";
        const raw = localStorage.getItem(key);
        const arr = raw ? JSON.parse(raw) : [];
        const item = { ...payload, id: `local-${Date.now()}`, title: payload.name };
        arr.unshift(item);
        localStorage.setItem(key, JSON.stringify(arr));
        // notify user
        alert("Item saved locally — it will appear in the grid.");
      } catch (e) {
        console.error("Failed to save local product", e);
      }
    }

    setShowModal(false);
    setForm({
      name: "",
      description: "",
      category: 0,
      condition: "USED",
      is_free: false,
      price: "0",
      is_negotiable: false,
      stock: 1,
      location: "",
      status: "PUBLISHED",
      image: "",
      video: "",
    });
  };

  return (
    <section className="hero-section">
      <div className="hero-inner">

        <div className="hero-left">
          <div className="hero-tag">Join 5,000+ Active Users</div>

          <h1 className="hero-title">
            Give More. <br />
            Waste Less. <br />
            <span>Build Community.</span>
          </h1>

          <p className="hero-text">
            Africa’s largest circular economy marketplace. Share pre-loved
            items, save money, and reduce waste.
          </p>

          <div className="hero-buttons">
            <button className="btn-yellow">Start Giving</button>
            <button className="btn-outline" onClick={handleDonateClick}>Donate Items</button>
          </div>

          <div className="hero-left-search">
            <SearchBar />
          </div>
        </div>

        <div className="hero-image-box">
          <img src={hero} className="hero-image" />

          <div className="hero-badge">
            <h3>80%</h3>
            <p>Reuse Rate</p>
          </div>

          <div className="hero-stats">
            <div className="stat-box">
              <div className="stat-number">15,000+</div>
              <div className="stat-label">Items Donated</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">5,000+</div>
              <div className="stat-label">Active Users</div>
            </div>
          </div>
        </div>

      </div>

      {/* Donation Modal */}
      {showModal && (
        <div className="donation-modal-overlay">
          <div className="donation-modal">
            <h3>Donate an Item</h3>
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input value={form.name} onChange={(e) => onChange('name', e.target.value)} />

              <label>Description</label>
              <textarea value={form.description} onChange={(e) => onChange('description', e.target.value)} />

              <label>Category (id)</label>
              <input type="number" value={form.category} onChange={(e) => onChange('category', Number(e.target.value))} />

              <label>Condition</label>
              <select value={form.condition} onChange={(e) => onChange('condition', e.target.value)}>
                <option value="NEW">NEW</option>
                <option value="USED">USED</option>
                <option value="REFURBISHED">REFURBISHED</option>
              </select>

              <label>Is Free?</label>
              <input type="checkbox" checked={!!form.is_free} onChange={(e) => onChange('is_free', e.target.checked)} />

              <label>Price</label>
              <input value={form.price} onChange={(e) => onChange('price', e.target.value)} />

              <label>Is Negotiable?</label>
              <input type="checkbox" checked={!!form.is_negotiable} onChange={(e) => onChange('is_negotiable', e.target.checked)} />

              <label>Stock</label>
              <input type="number" value={form.stock} onChange={(e) => onChange('stock', Number(e.target.value))} />

              <label>Location</label>
              <input value={form.location} onChange={(e) => onChange('location', e.target.value)} />

              <label>Image URL</label>
              <input value={form.image} onChange={(e) => onChange('image', e.target.value)} />

              <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                <button type="submit" className="btn-yellow">Add Item</button>
                <button type="button" className="btn-outline" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
}
