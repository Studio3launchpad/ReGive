import ProductCard from "./productcard";
import "../styles/product.css";
import "../styles/productGrid.css";
import { useEffect } from "react";
import placeholder from "../assets/images/electronics.avif";
const API_HOST = "https://regive.pythonanywhere.com";

export default function ProductGrid({products}) {

  

  useEffect(() => {
    // Debug: confirm ProductGrid mounted and how many products
    console.log("[ProductGrid] mounted, products length:", Array.isArray(products) ? products.length : typeof products, products);
  }, [products]);

  return (
    <section className="product-section" style={{outline: '1px dashed #e11'}}>

      {/* If no products, show a visible message and quick actions */}
      {(!products || (Array.isArray(products) && products.length === 0)) && (
        <div style={{padding: 24, border: '1px solid #eee', borderRadius: 12, marginBottom: 18, background: '#fff9', textAlign: 'center'}}>
          <h3 style={{margin: 0}}>No trending items available</h3>
          <p style={{marginTop: 6}}>Either the API returned no items or there was a problem fetching them.</p>
          <div style={{display: 'flex', gap: 8, justifyContent: 'center', marginTop: 12}}>
            <button onClick={() => window.location.reload()} style={{padding: '8px 12px'}}>Reload</button>
            <button onClick={() => console.log('[ProductGrid] debug products:', products)} style={{padding: '8px 12px'}}>Log products</button>
          </div>
        </div>
      )}

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

        {products.map((product) => {
          // Normalize image field: API may return a string URL or an object with a url/key
          const imageField = product?.image || product?.featured_image || product?.image_url || null;
          let imageUrl = (
            (typeof imageField === 'string' && imageField) ||
            (imageField && (imageField.url || imageField.image || imageField.src)) ||
            null
          );

          // If the API returned a relative path (starts with '/') or doesn't include protocol,
          // prepend the host so the browser can load it.
          if (imageUrl && !imageUrl.startsWith('http')) {
            if (imageUrl.startsWith('/')) imageUrl = API_HOST + imageUrl;
            else imageUrl = API_HOST + '/' + imageUrl.replace(/^\//, '');
          }

          if (!imageUrl) imageUrl = placeholder;

          // Debug: log image URL resolution for troubleshooting
          console.log('[ProductGrid] imageUrl for', product.id, imageUrl);

          return (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={imageUrl}
              location={product.location}
              distance={product.distance}
              price={product.price}
              oldPrice={product.oldPrice}
              status={product.status}
              condition={product.condition}
              likes={product.likes}
              views={product.views}
              comments={product.comments}
            />
          );
        })}


      </div>

      {/* Load More */}
      <button className="load-more-btn">Load More Items</button>
    </section>
  );
}
