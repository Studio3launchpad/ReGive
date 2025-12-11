import CategoryCard from "./CategoryCard";
import "../styles/category.css";

export default function CategorySection() {
  return (
    <section className="category-section">
      <div className="category-header">
        <div>
          <h3>Shop by Category</h3>
          <p className="subtitle">Discover what others are sharing</p>
        </div>
        <button className="view-all">View All</button>
      </div>

      <div className="category-grid">
        <CategoryCard 
          title="Electronics"
          items="245+"
          trending={true}
          image="./src/assets/images/electronics.avif"
        />

        <CategoryCard 
          title="Furniture"
          items="189+"
          trending={false}
          image="./src/assets/images/furniture.jpeg"
        />

        <CategoryCard 
          title="Children’s Items"
          items="312+"
          trending={true}
          image="./src/assets/images/toys.webp"
        />

        <CategoryCard 
          title="Kitchen Appliances"
          items="156+"
          trending={false}
          image="./src/assets/images/kitchen appliances.webp"
        />

        <CategoryCard 
          title="Fitness Equipment"
          items="98+"
          trending={true}
          image="./src/assets/images/fitness equipments.jpg"
        />

        <CategoryCard 
          title="Books & Educational"
          items="421+"
          trending={false}
          image="./src/assets/images/books and education.jpeg"
        />
      </div>
    </section>
  );
}
