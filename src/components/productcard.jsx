import { Link } from "react-router-dom";
import "./../styles/product.css";
import placeholder from "../assets/images/electronics.avif";

export default function ProductCard({
  id,
  title,
  image,
  image_url,
  photo,
  thumbnail,
  location,
  distance,
  price,
  oldPrice,
  status,
  condition,
  likes,
  views,
  comments
}) {
  // Use first available image field
  const finalImage =
    image ||
    image_url ||
    photo ||
    thumbnail ||
    placeholder;

  // derive display values
  const isFree =
    price === 0 ||
    price === "0" ||
    String(price).toLowerCase() === "free" ||
    price === null ||
    price === undefined;

  let priceDisplay = isFree ? "Free" : price ?? "—";

  let saveText = null;
  try {
    const p = parseFloat(String(price).replace(/[^0-9.-]+/g, ""));
    const o = parseFloat(String(oldPrice).replace(/[^0-9.-]+/g, ""));
    if (!isNaN(p) && !isNaN(o) && o > p) {
      const save = o - p;
      saveText = `Save ${new Intl.NumberFormat().format(save)}`;
    }
  } catch (e) {}

  return (
    <Link to={`/product/${id}`} className="product-card-link">
      <div className="product-card">

        {/* Badge */}
        {status && <span className="badge">{status}</span>}

        {/* Image */}
        <div className="product-image">
          <img
            src={finalImage}
            alt={title}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = placeholder;
            }}
          />
          <button className="wishlist-btn">♡</button>
        </div>

        {/* Content */}
        <div className="product-info">
          <h3 className="product-title">{title}</h3>

          {/* Location */}
          <p className="location">{location} • {distance}</p>

          {/* Stats */}
          <div className="stats-row">
            {condition && <span className="cond">{condition}</span>}
            <span className="stat">❤️ {likes ?? 0}</span>
            <span className="stat">👁 {views ?? 0}</span>
            <span className="stat">💬 {comments ?? 0}</span>
          </div>

          {/* Price */}
          <div className="price-section">
            {oldPrice && <p className="old-price">{oldPrice}</p>}
            <p className={`price ${isFree ? "price-free" : ""}`}>
              {priceDisplay}
            </p>
            {saveText && <p className="save-text">{saveText}</p>}
          </div>
        </div>
      </div>
    </Link>
  );
}
