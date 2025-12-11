import React from 'react';
import { FaHeart, FaRecycle, FaShieldAlt, FaGlobeAfrica } from "react-icons/fa";
import "../styles/about.css";
import Footer from "../components/Footer";
import image from "../assets/images/Container (2).png";

export default function About() {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero">
        <p className="subtitle">Building Africa’s Circular Economy</p>
        <h1 className="about-hero-text">
          Regive connects communities across Nigeria and Ghana to share pre-loved items,
          reduce waste, and build a more sustainable future together with Regive.
        </h1>
      </section>

      {/* MAIN CONTENT */}
      <section className="about-content">
        <div className="about-image">
           <img src={image} className="hero-image" />
        </div>

        <div className="about-text">
          <h3>Our Mission</h3>
          <p>
            Regive was born from a simple observation: valuable items sit unused in our homes
            while others in our community need them. We believe that by connecting givers and
            receivers, we can create a more sustainable, affordable, and connected society.
          </p>

          <p>
            Through our platform, we’re not just facilitating exchanges — we’re building a
            movement that champions sustainability, reduces consumption, and strengthens
            neighborhood bonds across West Africa.
          </p>

          <button className="impact-btn">Start Your Impact Today</button>
        </div>
      </section>

      {/* VALUES SECTION */}
      <div className="about-extra-content">
      <section className="values-section">
        <h3 className="section-title">Our Values</h3>
        <p className="section-subtitle">The principles that guide everything we do</p>

        <div className="values-grid">
          
          <div className="value-card">
            <div className="icon-circle">
              <FaHeart size={28} />
            </div>
            <h4>Community First</h4>
            <p>We believe in the power of connection and supporting each other through sharing.</p>
          </div>

          <div className="value-card">
            <div className="icon-circle">
              <FaRecycle size={28} />
            </div>
            <h4>Sustainability</h4>
            <p>Reducing waste and promoting circular economy practices for a healthier planet.</p>
          </div>

          <div className="value-card">
            <div className="icon-circle">
              <FaShieldAlt size={28} />
            </div>
            <h4>Trust & Safety</h4>
            <p>Building a secure platform where every exchange is safe and verified.</p>
          </div>

          <div className="value-card">
            <div className="icon-circle">
              <FaGlobeAfrica size={28} />
            </div>
            <h4>Local Impact</h4>
            <p>Strengthening neighborhoods by keeping resources within our communities.</p>
          </div>

        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="impact-section">
        <h3 className="section-title">Our Impact So Far</h3>
        <p className="section-subtitle">Together, we're making a real difference</p>

        <div className="impact-grid">
          <div className="impact-item">
            <h2>15,000+</h2>
            <p>Items Rehomed</p>
          </div>
          <div className="impact-item">
            <h2>5,000+</h2>
            <p>Active Members</p>
          </div>
          <div className="impact-item">
            <h2>25 Tons</h2>
            <p>Waste Diverted</p>
          </div>
          <div className="impact-item">
            <h2>2 Countries</h2>
            <p>Nigeria & Ghana</p>
          </div>
        </div>
      </section>

      </div>

      {/* TEAM SECTION */}
      <section className="team-section">
        <h3 className="section-title">Meet Our Team</h3>
        <p className="section-subtitle">The people making Regive possible</p>

        <div className="team-grid">

          <div className="team-card">
            <div className="team-avatar">AO</div>
            <h4>Amara Okonkwo</h4>
            <p className="role founder">Founder & CEO</p>
            <p className="description">
              Environmental advocate passionate about circular economy solutions for Africa.
            </p>
          </div>

          <div className="team-card">
            <div className="team-avatar">CE</div>
            <h4>Chukwudi Eze</h4>
            <p className="role community">Head of Community</p>
            <p className="description">
              Building trust and connection across Nigeria and Ghana, one exchange at a time.
            </p>
          </div>

          <div className="team-card">
            <div className="team-avatar">NM</div>
            <h4>Nia Mensah</h4>
            <p className="role designer">Lead Product Designer</p>
            <p className="description">
              Creating intuitive experiences that make sustainable living accessible to everyone.
            </p>
          </div>

          <div className="team-card">
            <div className="team-avatar">KA</div>
            <h4>Kwame Asante</h4>
            <p className="role operations">Head of Operations</p>
            <p className="description">
              Ensuring safe, seamless exchanges and scaling our community impact.
            </p>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <div>
        <section className="cta-section">
          <h4 className="cta-title">Ready to Make an Impact?</h4>
          <p className="cta-text">
            Join thousands of community members who are already making a difference through sustainable giving.
          </p>

          <div className="cta-buttons">
            <button className="cta-btn primary">List Your First Item</button>
            <button className="cta-btn secondary">Explore Items</button>
          </div>
        </section>
      </div>  

      <Footer />
    </div>
  );
}
