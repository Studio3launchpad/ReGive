import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import ProductCard from "../components/productcard";
import "../styles/productDetails.css";

export default function ProductDetails({ products, handleAddToCart }) {
  const { id } = useParams();

  const productsdata = products





  const relatedItems = [
    {
      title: "Modern Desk Lamp",
      image: "../src/assets/images/lamp.webp", 
      description: "A sleek and modern desk lamp that provides excellent lighting for your workspace.",
      location: "Lagos",
      distance: "3km",
      price: "₦5,000",
      oldPrice: "₦12,000",
      condition: "Good",
      likes: 89,
      views: 19,
      comments: 4,
    },
    {
      title: "Travel Bag",
      image: "../src/assets/images/travel bag.jpg",
      description: "A durable and spacious travel bag perfect for weekend getaways or business trips.",
      location: "Ibadan",
      distance: "7km",
      price: "Free",
      condition: "Good",
      likes: 16,
      views: 112,
      comments: 25,
      status: "Free",
    },
    {
      title: "Kids Bicycle",
      image: "../src/assets/images/kids-bicycle.jpeg",
      description: "A colorful and sturdy kids bicycle suitable for children aged 4-8 years.",
      location: "Abuja",
      distance: "5km",
      price: "₦10,000",
      oldPrice: "₦25,000",
      condition: "Good",
      likes: 94,
      views: 12,
      comments: 6,
      status: "Reserved",
    },
  ];

  return (
    <>
      {productsdata.map((product) => (
        (product.id == id) ? (
          <div className="details-wrapper">
            {/* LEFT - IMAGES */}
            <div className="details-left">
              <img src={product.image} className="main-image" alt={product.title} />

              <div className="thumbnail-row">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
              </div>
            </div>

            {/* RIGHT - PRODUCT DETAILS */}
            <div className="details-right">

              <h3>Description</h3>
              <p className="description">{product.description}</p>

              <h2>{product.title}</h2>
              <p className="location">
                📍 {product.location} • {product.distance}
              </p>

              <div className="price-box">
                {product.oldPrice && (
                  <p className="old-price">{product.oldPrice}</p>
                )}
                <p className="price">{product.price}</p>
              </div>

              {/* <Link to="/cart" className="purchase-btn">
                 Proceed to Purchase
              </Link> */}
              <Link to="/cart" className="purchase-btn" 
                onClick={() => handleAddToCart(product)}
              >
                 Proceed to Purchase
              </Link>


              
            </div>

            {/* RELATED ITEMS SECTION */}
            <div className="related-section">
              <h2>Similar Items</h2>
              <div className="related-grid">
                {relatedItems.map((item, index) => (
                  <ProductCard key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
        ) : ""
      ))}
    </>
  );
}
