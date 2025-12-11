import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import ProductCard from "../components/productcard";
import "../styles/productDetails.css";
import { getItem } from "../services/api";

export default function ProductDetails({ products = [], handleAddToCart }) {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    // try API first
    getItem(id)
      .then((data) => {
        if (!mounted) return;
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        // fallback: try to find in passed products prop
        console.warn("API product fetch failed, falling back to local products", err);
        const fallback = products.find((p) => String(p.id) === String(id));
        if (mounted) {
          if (fallback) setProduct(fallback);
          else setError("Product not found");
          setLoading(false);
        }
      });

    return () => { mounted = false };
  }, [id, products]);

  if (loading) return <div className="details-wrapper">Loading...</div>;
  if (error) return <div className="details-wrapper">{String(error)}</div>;

  // determine main image and thumbnails safely
  const mainImage = product?.image || (product?.images && product.images[0]) || product?.featured_image || product?.image_url || "";
  const thumbnails = product?.images || (product?.image ? [product.image] : []) || [];

  const relatedItems = (products || [])
    .filter((p) => String(p.id) !== String(id))
    .slice(0, 4)
    .map((p) => ({ id: p.id, title: p.title, image: p.image || (p.images && p.images[0]) }));

  return (
    <div className="details-wrapper">
      {/* LEFT - IMAGES */}
      <div className="details-left">
        {mainImage ? (
          <img src={mainImage} className="main-image" alt={product.title} />
        ) : (
          <div className="main-image placeholder">No image</div>
        )}

        <div className="thumbnail-row">
          {thumbnails.length > 0 ? (
            thumbnails.slice(0, 4).map((t, i) => (
              <img key={i} src={t} alt={`${product.title} ${i}`} />
            ))
          ) : (
            <><img src={mainImage} alt="" /><img src={mainImage} alt="" /><img src={mainImage} alt="" /></>
          )}
        </div>
      </div>

      {/* RIGHT - PRODUCT DETAILS */}
      <div className="details-right">
        <h3>Description</h3>
        <p className="description">{product.description}</p>

        <h2>{product.title}</h2>
        <p className="location">📍 {product.location} • {product.distance}</p>

        <div className="price-box">
          {product.oldPrice && <p className="old-price">{product.oldPrice}</p>}
          <p className="price">{product.price}</p>
        </div>

        <Link to="/cart" className="purchase-btn" onClick={() => handleAddToCart(product)}>
          Proceed to Purchase
        </Link>
      </div>

      {/* RELATED ITEMS SECTION */}
      <div className="related-section">
        <h2>Similar Items</h2>
        <div className="related-grid">
          {relatedItems.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
              
