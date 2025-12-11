import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/checkout.css";
import { createOrder } from "../services/api";

export default function Checkout({ cartItems = [], clearCart = () => {} }) {
  const [payment, setPayment] = useState("card");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // form fields state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  const handleCheckout = async () => {
    setError(null);
    if (!cartItems || cartItems.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    setLoading(true);
    try {
      // Map cart items into a minimal payload the API is likely to accept
      const itemsPayload = cartItems.map((it) => ({ item: it.id || it.item || it.product || null, quantity: it.qty || it.quantity || 1 }));

      const payload = {
        contact: { first_name: firstName, last_name: lastName, phone, email },
        shipping_address: { address, city, zip },
        payment_method: payment,
        items: itemsPayload,
        // attempt to include a total if you compute it locally
        total: cartItems.reduce((sum, it) => sum + (Number(it.price) || 0) * (it.qty || 1), 0),
      };

      const res = await createOrder(payload);
      // assume response contains order id in res.id
      const orderId = res?.id || res?.order_id || res?.pk;
      // clear local cart
      clearCart();
      // navigate to confirmation
      if (orderId) navigate(`/order-confirmation/${orderId}`);
      else navigate(`/order-confirmation/${res?.id || ""}`);
    } catch (err) {
      console.error(err);
      setError(err?.message || "Failed to create order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-page">

      {/* LEFT SIDE */}
      <div className="checkout-left">

        {/* CONTACT INFO */}
        <div className="checkout-section">
          <h3>1. Contact Information</h3>

          <div className="grid-2">
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" />
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" />
          </div>

          <div className="grid-2">
            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Phone Number" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email Address" />
          </div>
        </div>

        {/* DELIVERY METHOD */}
        <div className="checkout-section">
          <h3>2. Delivery Method</h3>

          <div className="delivery-buttons">
            <button className="inactive">Store</button>
            <button className="active">Delivery</button>
          </div>

          <div className="grid-3">
            <input type="text" placeholder="dd - mm - yyyy" />
            <input type="text" placeholder="1pm - 6pm" />
            <input value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder="City" />
          </div>

          <div className="grid-2">
            <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Address" />
            <input value={zip} onChange={(e) => setZip(e.target.value)} type="text" placeholder="Zip Code" />
          </div>
        </div>

        {/* PAYMENT METHOD */}
        <div className="checkout-section">
          <h3>3. Payment Method</h3>

          {/* Payment options */}
          <div className="payment-options">
            <div
              className={`payment-box ${payment === "card" ? "selected" : ""}`}
              onClick={() => setPayment("card")}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/633/633611.png" alt="" />
              <span>Credit / Debit Card</span>
            </div>

            <div
              className={`payment-box ${payment === "paypal" ? "selected" : ""}`}
              onClick={() => setPayment("paypal")}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/174/174861.png" alt="" />
              <span>PayPal</span>
            </div>

            <div
              className={`payment-box ${payment === "transfer" ? "selected" : ""}`}
              onClick={() => setPayment("transfer")}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/1034/1034146.png" alt="" />
              <span>Bank Transfer</span>
            </div>
          </div>

          {/* CARD FIELDS */}
          {payment === "card" && (
            <>
              <div className="grid-2">
                <input type="text" placeholder="Card Number" />
                <input type="text" placeholder="Expiry Date" />
              </div>

              <div className="grid-2">
                <input type="text" placeholder="Card Holder Name" />
                <input type="text" placeholder="CVV" />
              </div>
            </>
          )}
        </div>
      </div>

      {/* RIGHT SUMMARY */}
      <div className="checkout-summary">
        <h3>Nike Sportswear Men's T-Shirt</h3>

        <div className="price-row">
          <span className="old-price">$139</span>
          <span className="new-price">$69</span>
        </div>

        <div className="summary-row">
          <span>Subtotal:</span>
          <span>${cartItems.reduce((s, it) => s + (Number(it.price) || 0) * (it.qty || 1), 0)}</span>
        </div>

        <div className="summary-row">
          <span>Discount:</span>
          <span className="discount">$0</span>
        </div>

        <div className="summary-row">
          <span>Shipping:</span>
          <span>Free</span>
        </div>

        <div className="summary-total">
          <span>Total</span>
          <span>${cartItems.reduce((s, it) => s + (Number(it.price) || 0) * (it.qty || 1), 0)}</span>
        </div>

        <button className="checkout-btn" onClick={handleCheckout} disabled={loading}>{loading ? 'Processing...' : 'Checkout'}</button>

        {error && <p style={{color:'red'}}>{error}</p>}

        <p className="terms">
          By confirming the order, you accept the terms of use.
        </p>
      </div>

    </div>
  );
}
