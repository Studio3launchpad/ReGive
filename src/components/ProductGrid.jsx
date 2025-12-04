import ProductCard from "./productcard";
import "../styles/product.css";

export default function ProductGrid({products}) {

  

  return (
    <section className="product-section">

      {/* Header */}
      <div className="product-header">
        <div>
          <h2>Trending Items</h2>
          <p className="subtitle">Popular items being shared right now</p>
        </div>

        <div className="header-buttons">
          <button className="filter-btn">⚙ Filter</button>
          <button className="view-btn">View All</button>
        </div>
      </div>

      {/* Grid */}
      <div className="product-grid">

        {products.map((product) => (
          <ProductCard
            id={product.id}
            title={product.title}
            image={product.image}
            location={product.location}
            distance={product.distance}
            price={product.price}
            oldPrice={product.oldPrice}
            status={product.status}
            condition={product.condition}
            likes={product.likes}
            views={product.views}
            comments={product.comments}
          />)
        )}


      </div>

      {/* Load More */}
      <button className="load-more-btn">Load More Items</button>
    </section>
  );
}
