import "./../styles/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";



export default function Navbar({cartItems}) {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <nav className="nav">
      <div className="nav-logo">
        ReGive
      </div>

      <ul className="nav-links">
        <Link to="/">Home</Link>
        <li>Categories</li>
        <li>Discover</li>
        <Link to="/about">About Us</Link>
        <Link to="/safety">Trust & Safety</Link>
        <Link to="/cart">cart {cartItems.length}</Link>
      </ul>

      <div className="nav-actions">
        {auth?.user ? (
          <>
            <button className="signin-btn" onClick={handleLogout}>Sign Out</button>
            <Link to="/" className="start-btn">Profile</Link>
            <span className="user-debug">{auth.user?.email || auth.user?.username || JSON.stringify(auth.user)}</span>
          </>
        ) : (
          <>
            <Link to="/signin" className="signin-btn">Sign In</Link>
            <Link to="/signup" className="start-btn">Get Started</Link>
          </>
        )}
      </div>

    </nav>
  );
}
