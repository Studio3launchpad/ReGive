import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getOrder } from "../services/api";
import "../styles/checkout.css";

export default function OrderConfirmation() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    getOrder(id)
      .then((data) => { if (mounted) { setOrder(data); setLoading(false); } })
      .catch((err) => { if (mounted) { setError(err.message || "Failed to load order"); setLoading(false); } });
    return () => { mounted = false };
  }, [id]);

  if (loading) return <div className="checkout-page">Loading order...</div>;
  if (error) return <div className="checkout-page">{error}</div>;

  return (
    <div className="checkout-page">
      <div className="checkout-summary">
        <h2>Order Confirmed</h2>
        <p>Order ID: <strong>{order.id}</strong></p>
        <p>Status: {order.status || "Pending"}</p>
        <h3>Items</h3>
        <ul>
          {order.items && order.items.length > 0 ? (
            order.items.map((it) => (
              <li key={it.id}>{it.title || it.name || `Item ${it.item || it.product}`} — Qty: {it.quantity || it.qty || it.qty_ordered || 1}</li>
            ))
          ) : (
            <li>No items listed in this order.</li>
          )}
        </ul>

        <p>Total: {order.total || order.amount || order.price || "-"}</p>

        <Link to="/">Return to Home</Link>
      </div>
    </div>
  );
}
