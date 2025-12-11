import "../styles/HowItWorksSection.css";
import { FiCamera, FiUsers, FiCheckCircle, FiShield, FiMessageSquare, FiFlag } from "react-icons/fi";

export default function HowItWorksSection() {
  return (
    <div className="how-container">

      <section className="steps-section">
        <h3 className="steps-title">How Regive Works</h3>
        <h2 className="steps-subtitle">Get started in 3 simple steps</h2>

        <div className="steps-grid">

          {/* STEP 1 */}
          <div className="step-card">
            <div className="icon-box" style={{ background: "#183A1D33" }}>
              <FiCamera size={32} color="#1A73E8" />
            </div>
            <h1 className="step-number">01</h1>
            <h3 className="step-heading">List Your Item</h3>
            <p className="step-text">
              Take photos, add details, and publish your listing in minutes. It's completely free!
            </p>
          </div>

          {/* STEP 2 */}
          <div className="step-card">
            <div className="icon-box" style={{ background: "#F4E7FF" }}>
              <FiUsers size={32} color="#A435F0" />
            </div>
            <h1 className="step-number">02</h1>
            <h3 className="step-heading">Connect with Buyers</h3>
            <p className="step-text">
              Chat securely with interested buyers and arrange a safe pickup location.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="step-card">
            <div className="icon-box" style={{ background: "#E1FFE5" }}>
              <FiCheckCircle size={32} color="#1EAE60" />
            </div>
            <h1 className="step-number">03</h1>
            <h3 className="step-heading">Complete Exchange</h3>
            <p className="step-text">
              Meet, exchange items, and build trust in your community while reducing waste.
            </p>
          </div>

        </div>

        <button className="start-btn">Get Started Now</button>
      </section>

      {/* TRUST SECTION */}
      <section className="trust-section">
        <h3 className="trust-title">Trusted by Thousands</h3>
        <p className="trust-subtitle">Join our growing community of givers and receivers</p>

        <div className="trust-grid">

          <div className="trust-card">
            <div className="trust-icon">
              <FiShield size={32} />
            </div>
            <h2 className="trust-value">99%</h2>
            <p className="trust-label">Verified Profiles</p>
            <p className="trust-text">All users go through verification to ensure a safe and trustworthy community.</p>
          </div>

          <div className="trust-card">
            <div className="trust-icon">
              <FiMessageSquare size={32} />
            </div>
            <h2 className="trust-value">100%</h2>
            <p className="trust-label">Safe Messaging</p>
            <p className="trust-text">Built-in secure chat system to protect your privacy and information.</p>
          </div>

          <div className="trust-card">
            <div className="trust-icon">
              <FiFlag size={32} />
            </div>
            <h2 className="trust-value">&lt;1hr</h2>
            <p className="trust-label">Report System</p>
            <p className="trust-text">Report suspicious activity anytime with our dedicated 24/7 support team.</p>
          </div>

        </div>
      </section>

    </div>
  );
}
