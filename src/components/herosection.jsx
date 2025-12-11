import "./../styles/hero.css";
import SearchBar from "./searchbar";
import hero from "../assets/images/Screenshot (2).png";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-inner">

        <div className="hero-left">
          <div className="hero-tag">Join 5,000+ Active Users</div>

          <h1 className="hero-title">
            Give More. <br />
            Waste Less. <br />
            <span>Build Community.</span>
          </h1>

          <p className="hero-text">
            Africa’s largest circular economy marketplace. Share pre-loved 
            items, save money, and reduce waste.
          </p>

          <div className="hero-buttons">
            <button className="btn-yellow">Start Giving</button>
            <button className="btn-outline">Donate Items</button>
          </div>

          <div className="hero-left-search">
            <SearchBar />
          </div>
        </div>

        <div className="hero-image-box">
          <img src={hero} className="hero-image" />

          <div className="hero-badge">
            <h3>80%</h3>
            <p>Reuse Rate</p>
          </div>

          <div className="hero-stats">
            <div className="stat-box">
              <div className="stat-number">15,000+</div>
              <div className="stat-label">Items Donated</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">5,000+</div>
              <div className="stat-label">Active Users</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
