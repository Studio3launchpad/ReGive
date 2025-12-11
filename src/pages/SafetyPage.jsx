import "../styles/SafetyPage.css";
import { FaUserShield, FaLock, FaUsersCog, FaBook } from "react-icons/fa";
import Footer from "../components/Footer";

export default function TrustSafety() {
  return (
    <div className="trust-page">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="trust-hero">
        <div className="trust-hero-content">
          <FaUserShield className="trust-hero-icon" />
          <h4>Your Safety is Our Priority</h4>
          <p>
            We're committed to building a safe, trustworthy community for everyone
          </p>
        </div>
      </section>

      {/* ---------------- HOW WE KEEP YOU SAFE ---------------- */}
      <section className="trust-info">
        <h3>How We Keep You Safe</h3>
        <p className="trust-subtitle">
          Multiple layers of protection for your peace of mind
        </p>

        <div className="trust-grid">

          {/* CARD 1 */}
          <div className="trust-card">
            <FaUserShield className="trust-card-icon" />
            <h4>Verified User Profiles</h4>
            <p>
              All users undergo verification to ensure a trustworthy community. 
              Look for the verified badge when connecting with others.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="trust-card">
            <FaLock className="trust-card-icon" />
            <h4>Secure Messaging</h4>
            <p>
              Our encrypted in-app messaging keeps your conversations private and 
              protects your personal information.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="trust-card">
            <FaUsersCog className="trust-card-icon" />
            <h4>Community Moderation</h4>
            <p>
              Our team reviews flagged content and takes action against violations 
              to maintain a safe environment.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="trust-card">
            <FaBook className="trust-card-icon" />
            <h4>Clear Guidelines</h4>
            <p>
              Comprehensive community standards and listing policies help 
              everyone understand expectations.
            </p>
          </div>

        </div>
      </section>

        <section className="exchange-tips-section">

            <div className="exchange-tips-header">
                <h4>Safety Tips for Exchanges</h4>
                <h2>Best practices for safe, successful exchanges</h2>
            </div>

            <div className="exchange-tips-grid">

                {/* Card 1 */}
                <div className="exchange-tip-card">
                <div className="tip-icon">
                    <i className="fa-solid fa-check"></i>
                </div>
                <div className="tip-content">
                    <h3>Meet in Public Places</h3>
                    <ul>
                    <li>Choose well-lit, busy locations</li>
                    <li>Bring a friend if possible</li>
                    <li>Tell someone where you're going</li>
                    </ul>
                </div>
                </div>

                {/* Card 2 */}
                <div className="exchange-tip-card">
                <div className="tip-icon">
                    <i className="fa-solid fa-check"></i>
                </div>
                <div className="tip-content">
                    <h3>Protect Personal Info</h3>
                    <ul>
                    <li>Don't share full address initially</li>
                    <li>Use in-app messaging</li>
                    <li>Be cautious with phone numbers</li>
                    </ul>
                </div>
                </div>

                {/* Card 3 */}
                <div className="exchange-tip-card">
                <div className="tip-icon">
                    <i className="fa-solid fa-check"></i>
                </div>
                <div className="tip-content">
                    <h3>Verify Items</h3>
                    <ul>
                    <li>Inspect items before accepting</li>
                    <li>Ask for additional photos</li>
                    <li>Check condition claims</li>
                    </ul>
                </div>
                </div>

                {/* Card 4 */}
                <div className="exchange-tip-card">
                <div className="tip-icon">
                    <i className="fa-solid fa-check"></i>
                </div>
                <div className="tip-content">
                    <h3>Trust Your Instincts</h3>
                    <ul>
                    <li>Report suspicious behavior</li>
                    <li>Don’t feel pressured</li>
                    <li>Walk away if uncomfortable</li>
                    </ul>
                </div>
                </div>

            </div>
        </section>
     
        <Footer />

    </div>
  );
}
