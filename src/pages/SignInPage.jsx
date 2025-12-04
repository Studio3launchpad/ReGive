import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/signin.css";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Accept either a location.state.from string or an object with pathname
    const from = (location.state && (location.state.from?.pathname || location.state.from)) || "/";

    const handleSubmit = (e) => {
        e?.preventDefault();

        // In a real app you'd validate/submit to backend. Here we simulate login.
        const userData = { email };
        auth.login(userData);

        // Redirect to the page the user tried to access (e.g. /checkout)
        navigate(from, { replace: true });
    };

    return (
        <div className="signin-page">
            <div className="signin-container">

                <p className="signin-top-text">
                    Create an account to start sharing, discovering items, and connecting
                    with the community.
                </p>

                <div className="signin-toggle">
                    <Link to="/signin" className="toggle-btn active">Login</Link>
                    <Link to="/signup" className="toggle-btn ">Sign Up</Link>
                </div>

                <form onSubmit={handleSubmit}>
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
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Create a password" />
                    </div>

                    <button className="signin-btn">Sign In</button>
                </form>

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
