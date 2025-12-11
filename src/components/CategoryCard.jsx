export default function CategoryCard({ image, title, items, trending }) {
  return (
    <div className="category-card">
      <div className="image-wrapper">
        <img src={image} alt={title} />
        {trending && <span className="badge">🔥 Trending</span>}
      </div>

      <div className="info">
        <h4>{title}</h4>
        <p>{items} Items</p>
      </div>
    </div>
  );
}
