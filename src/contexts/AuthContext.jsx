import React, { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("rg_user");
      if (stored) setUser(JSON.parse(stored));
    } catch (e) {
      console.error("Failed to parse stored user", e);
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("rg_user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("rg_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
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
