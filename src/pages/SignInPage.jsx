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

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e?.preventDefault();
        setError(null);
        setLoading(true);

        try {
            // backend requires "username", not "email"
            const result = await auth.signIn({ 
                username: email, 
                password 
            });

            // If signIn returned a token/user, navigate to the original page
            if (result?.token || result?.user) {
                navigate(from, { replace: true });
            } else {
                setError('Login failed: invalid credentials');
            }
        } catch (err) {
            setError(err?.response?.data?.detail || err?.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signin-page">
            <div className="signin-container">

                <p className="signin-top-text">
                    Create an account to start sharing, discovering items, and connecting
                    with the community.
                </p>

                {/* If already signed in, show a clear confirmation */}
                {auth?.user && (
                    <div className="signed-in-box">
                        <p>You are signed in as <strong>{auth.user?.email || auth.user?.username || JSON.stringify(auth.user)}</strong>.</p>
                        <div style={{display: 'flex', gap: '8px'}}>
                            <button className="signin-btn" onClick={() => navigate('/')}>Go Home</button>
                        </div>
                    </div>
                )}

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

                    <button className="signin-btn" disabled={loading}>{loading ? 'Signing in...' : 'Sign In'}</button>

                    {error && <div className="form-error" style={{color: 'crimson', marginTop: '8px'}}>{error}</div>}
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
