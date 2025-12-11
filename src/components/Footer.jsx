import "./../styles/footer.css";
import { FaInstagram, FaFacebookF, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-wrapper">

      {/* -------- TOP SUBSCRIBE STRIP -------- */}
      <div className="footer-subscribe-strip">
        <div className="footer-subscribe-left">
          <h4>Stay Updated</h4>
          <p>Subscribe to get special offers, free giveaways, and updates on new items.</p>
        </div>

        <div className="footer-input-wrap">
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </div>

      {/* -------- MAIN FOOTER CONTENT -------- */}
      <div className="footer-content">

        {/* Left Section (Logo + About + Contact) */}
        <div className="footer-about">
          <img src="./src/assets/images/Image (Regive Logo).png" alt="logo" className="footer-logo" />

          <p className="footer-desc">
            Africa’s leading circular economy marketplace. Connecting communities 
            to share pre-loved items, reduce waste, and build a sustainable future together.
          </p>

          <div className="footer-contact">
            <p><FaMapMarkerAlt /> Lagos & Accra</p>
            <p><FaEnvelope /> hello@regive.com</p>
            <p><FaPhoneAlt /> +234 800 REGIVE</p>
          </div>

          <div className="footer-socials">
            <span><FaInstagram /></span>
            <span><FaFacebookF /></span>
            <span><FaEnvelope /></span>
            <span><FaTwitter /></span>
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="footer-links">
          <div>
            <h4>Marketplace</h4>
            <p>Home</p>
            <p>Discover Items</p>
            <p>List an Item</p>
            <p>How It Works</p>
            <p>Pricing</p>
          </div>

          <div>
            <h4>Company</h4>
            <p>About Us</p>
            <p>Careers</p>
            <p>Press & Media</p>
            <p>Partnerships</p>
            <p>Sustainability</p>
          </div>

          <div>
            <h4>Support</h4>
            <p>Trust & Safety</p>
            <p>FAQs</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="footer-stats">
          <div>
            <h3>5K+</h3>
            <p>Active Users</p>
          </div>
          <div>
            <h3>15K+</h3>
            <p>Items Shared</p>
          </div>
          <div>
            <h3>25T</h3>
            <p>Waste Saved</p>
          </div>
        </div>

      </div>

      {/* -------- BOTTOM LEGAL ROW -------- */}
      <div className="footer-bottom">
        <p>© 2025 Regive | Made with ♻️ for a Better Tomorrow</p>

        <div className="footer-bottom-links">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookie Policy</p>
          <p>Accessibility</p>
        </div>
      </div>

    </footer>
  );
}
