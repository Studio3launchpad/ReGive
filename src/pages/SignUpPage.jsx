import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/signup.css";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSignUp = () => {
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    // Ask user to confirm action
    const confirmAction = window.confirm(
      "Are you sure you want to create this account?"
    );

    if (confirmAction) {
      alert("🎉 Account successfully created!");
      // Simulate creating an account and logging in
      const createdUser = { email, fullName, createdAt: Date.now() };
      auth.login(createdUser);
      // Redirect back to intended page if present
      const from = (location.state && (location.state.from?.pathname || location.state.from)) || "/";
      navigate(from, { replace: true });
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);

    // Show warning message only when confirmPassword is typed
    if (password !== e.target.value) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="signin-container">

        <p className="signin-top-text">
          Create an account to start sharing, discovering items, and connecting
          with the community.
        </p>

        <div className="signin-toggle">
          <Link to="/signin" className="toggle-btn">Login</Link>
          <Link to="/signup" className="toggle-btn active">Sign Up</Link>
        </div>

        {/* Full Name */}
        <label>Full Name</label>
        <div className="input-wrapper">
          <span className="icon">👤</span>
          <input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" placeholder="Enter your full name" />
        </div>

        {/* Email */}
        <label>Email</label>
        <div className="input-wrapper">
          <span className="icon">✉</span>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
        </div>

        {/* Password */}
        <label>Password</label>
        <div className="input-wrapper">
          <span className="icon">🔒</span>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Confirm Password */}
        <label>Confirm Password</label>
        <div className="input-wrapper">
          <span className="icon">🔒</span>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>

        {/* Warning Message */}
        {showWarning && password !== confirmPassword && (
          <p style={{ color: "red", fontSize: "14px", marginTop: "-10px" }}>
            ⚠ Passwords do not match
          </p>
        )}

        {/* User Type Dropdown */}
        <label>User Type</label>
        <div className="input-wrapper">
          <span className="icon">📌</span>
          <select className="dropdown">
            <option value="">Select role</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </div>

        {/* Sign Up Button */}
        <button className="signin-btn" onClick={handleSignUp}>
          Sign Up
        </button>

        <div className="divider">
          <span>Or continue with</span>
        </div>

        <div className="social-row">
          <button className="social-btn">G</button>
          <button className="social-btn">in</button>
          <button className="social-btn">f</button>
        </div>

      </div>
    </div>
  );
}
