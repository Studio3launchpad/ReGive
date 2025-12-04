import React, { useState } from "react";
import "../styles/checkout.css";

export default function Checkout() {
  const [payment, setPayment] = useState("card");

  return (
    <div className="checkout-page">

      {/* LEFT SIDE */}
      <div className="checkout-left">

        {/* CONTACT INFO */}
        <div className="checkout-section">
          <h3>1. Contact Information</h3>

          <div className="grid-2">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>

          <div className="grid-2">
            <input type="text" placeholder="Phone Number" />
            <input type="email" placeholder="Email Address" />
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
            <input type="text" placeholder="City" />
          </div>

          <div className="grid-2">
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="Zip Code" />
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
          <span>$139</span>
        </div>

        <div className="summary-row">
          <span>Discount:</span>
          <span className="discount">-$70</span>
        </div>

        <div className="summary-row">
          <span>Shipping:</span>
          <span>Free</span>
        </div>

        <div className="summary-total">
          <span>Total</span>
          <span>$69</span>
        </div>

        <button className="checkout-btn">Checkout</button>

        <p className="terms">
          By confirming the order, you accept the terms of use.
        </p>
      </div>

    </div>
  );
}
