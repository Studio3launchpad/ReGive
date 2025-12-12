import React, { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { setAuthToken } from "../services/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // initialize from localStorage if present
  useEffect(() => {
    try {
      const stored = localStorage.getItem("rg_user");
      if (stored) {
        const parsed = JSON.parse(stored);
        setUser(parsed.user || parsed);
        if (parsed.token) {
          setToken(parsed.token);
          setAuthToken(parsed.token);
        }
      }
    } catch (e) {
      console.error("Failed to parse stored user", e);
    }
  }, []);

  // signIn: call API and persist token + user
  const signIn = async (credentials) => {
    // Simulate auth locally (no backend). Accept any non-empty email/password.
    const { email, password } = credentials || {};
    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    // create a fake token and user object
    const tokenValue = `fake-token-${btoa(email + ":" + Date.now())}`;
    const userObj = { email };

    setToken(tokenValue);
    setAuthToken(tokenValue);
    setUser(userObj);
    localStorage.setItem("rg_user", JSON.stringify({ user: userObj, token: tokenValue }));

    return { user: userObj, token: tokenValue };
  };

  useEffect(() => {
    // Debug: log auth changes so it's easier to trace in the browser console
    try {
      // eslint-disable-next-line no-console
      console.log("[AuthContext] user/token changed:", { user, token });
    } catch (e) { }
  }, [user, token]);

  const signUp = async (payload) => {
    // Simulate sign up locally: accept payload with email/password
    const { email, password } = payload || {};
    if (!email || !password) throw new Error("Email and password are required");

    const tokenValue = `fake-token-${btoa(email + ":" + Date.now())}`;
    const userObj = { email };

    setToken(tokenValue);
    setAuthToken(tokenValue);
    setUser(userObj);
    localStorage.setItem("rg_user", JSON.stringify({ user: userObj, token: tokenValue }));

    return { user: userObj, token: tokenValue };
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setAuthToken(null);
    localStorage.removeItem("rg_user");
  };

  return (
    <AuthContext.Provider value={{ user, token, signIn, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

// Route wrapper to protect pages that require authentication
export function RequireAuth({ children }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth?.user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
}

export default AuthContext;
