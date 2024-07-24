import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: null, user: null });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("/api/auth/user", { headers: { "x-auth-token": token } })
        .then((res) => setAuth({ token, user: res.data }))
        .catch((err) => console.log(err));
    }
  }, []);

  const login = async (credentials) => {
    const res = await axios.post("/api/auth/login", credentials);
    const { token, user } = res.data;
    localStorage.setItem("token", token);
    setAuth({ token, user });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuth({ token: null, user: null });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
