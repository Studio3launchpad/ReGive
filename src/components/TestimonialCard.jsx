import { useState } from "react";
import "../styles/TestimonialCard.css";

export default function TestimonialCard() {
  const testimonials = [
    {
      initials: "AJ",
      name: "Amaka Johnson",
      location: "Lagos, Nigeria",
      itemsReceived: 12,
      rating: 5,
      message:
        "I've saved over ₦50,000 by finding quality items on Regive. The community is trustworthy and the platform makes giving and receiving so easy!",
    },
    {
      initials: "KO",
      name: "Kelvin Okoro",
      location: "Abuja, Nigeria",
      itemsReceived: 8,
      rating: 5,
      message:
        "Regive helped me declutter and bless others. I love how easy it is to share items without stress!",
    },
    {
      initials: "TS",
      name: "Tosin Samuel",
      location: "Ibadan, Nigeria",
      itemsReceived: 5,
      rating: 4,
      message:
        "The platform is smooth and safe. I enjoy connecting with people who genuinely need the items!",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const previous = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[index];

  return (
    <div className="testimonial-container">
      <div className="testimonial-header">
        <div className="avatar">{t.initials}</div>

        <div className="stars">
          {Array.from({ length: t.rating }).map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
      </div>

      <p className="testimonial-message">"{t.message}"</p>

      <div className="testimonial-footer">
        <div>
          <h4 className="name">{t.name}</h4>
          <p className="location">{t.location}</p>
        </div>

        <div className="items-box">
          <p className="items-label">Items Received</p>
          <h3 className="items-value">{t.itemsReceived}</h3>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="slider-controls">
        <button className="nav-btn" onClick={previous}>
          {"<"}
        </button>

        <div className="dots">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
            ></div>
          ))}
        </div>

        <button className="nav-btn" onClick={next}>
          {">"}
        </button>
      </div>
    </div>
  );
}
