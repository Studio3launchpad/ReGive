import "./../styles/impact.css";
import { FaRecycle, FaTree, FaUsers, FaHeart } from "react-icons/fa";

export default function ImpactSection() {
  return (
    <section className="impact-wrapper">

      {/* -------- TOP IMPACT SECTION -------- */}
      <div className="impact-section">
        <p className="impact-subtitle">Our Collective Impact</p>
        <h2 className="impact-title">
          Together, we’re building a sustainable future
        </h2>

        <div className="impact-stats-grid">
          <div className="impact-stat">
            <FaRecycle className="impact-icon" />
            <h3>15,000+</h3>
            <p>Items Rehomed</p>
          </div>

          <div className="impact-stat">
            <FaTree className="impact-icon" />
            <h3>25 Tons</h3>
            <p>Waste Saved</p>
          </div>

          <div className="impact-stat">
            <FaUsers className="impact-icon" />
            <h3>5,000+</h3>
            <p>Active Members</p>
          </div>

          <div className="impact-stat">
            <FaHeart className="impact-icon" />
            <h3>₦2.5M</h3>
            <p>Value Shared</p>
          </div>
        </div>

        <button className="impact-button">Learn More About Our Impact</button>
      </div>


      {/* -------- SUBSCRIPTION BACKGROUND SECTION -------- */}
      <div className="subscribe-section">

        {/* -------- SUBSCRIPTION CARD -------- */}
        <div className="subscribe-card">
          <h3 className="subscribe-title">Join 10,000+ Subscribers</h3>
          <p className="subscribe-text">
            Get weekly updates on new items, sustainability tips, and community stories
          </p>

          <div className="subscribe-input-wrap">
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe Now</button>
          </div>

          <p className="subscribe-privacy">
            <svg width="16" height="18" padding="auto" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6602 7.3291H3.33167C2.59567 7.3291 1.99902 7.92575 1.99902 8.66175V13.326C1.99902 14.062 2.59567 14.6586 3.33167 14.6586H12.6602C13.3962 14.6586 13.9928 14.062 13.9928 13.326V8.66175C13.9928 7.92575 13.3962 7.3291 12.6602 7.3291Z" stroke="white" stroke-opacity="0.8" stroke-width="1.33264" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.66431 7.32991V4.66462C4.66431 3.78102 5.01531 2.93361 5.64011 2.30881C6.26491 1.68402 7.11232 1.33301 7.99592 1.33301C8.87952 1.33301 9.72693 1.68402 10.3517 2.30881C10.9765 2.93361 11.3275 3.78102 11.3275 4.66462V7.32991" stroke="white" stroke-opacity="0.8" stroke-width="1.33264" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            We respect your privacy. Unsubscribe anytime.
          </p>

          <div className="subscribe-stats">
            <div>
              <h4>10k+</h4>
              <p>Subscribers</p>
            </div>
            <div>
              <h4>4.9★</h4>
              <p>Newsletter Rating</p>
            </div>
            <div>
              <h4>Weekly</h4>
              <p>Fresh Content</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
