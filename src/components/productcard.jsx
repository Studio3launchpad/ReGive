import { Link } from "react-router-dom";
import "./../styles/product.css";

export default function ProductCard({
  id,
  title,
  image,
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
  return (
    <Link to={`/product/${id}`} className="product-card-link">
      <div className="product-card">

        {/* Badge */}
        {status && <span className="badge">{status}</span>}

        {/* Image */}
        <div className="product-image">
          <img src={image} alt={title} />
          <button className="wishlist-btn">♡</button>
        </div>

        {/* Content */}
        <div className="product-info">

          <h3 className="product-title">{title}</h3>

          {/* Location */}
          <p className="location">{location} • {distance}</p>

          {/* Ratings row */}
          <div className="stats-row">
            <span className="cond">{condition}</span>
            <span>❤️ {likes}</span>
            <span>👁 {views}</span>
            <span>💬 {comments}</span>
          </div>

          {/* Prices */}
          <div className="price-section">
            {oldPrice && <p className="old-price">{oldPrice}</p>}
            <p className="price">{price}</p>
          </div>

        </div>
      </div>
    </Link>
  );
}
