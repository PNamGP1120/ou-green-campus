import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (userData) => {
    let role = 'viewer';
    if (userData.email.includes('admin')) role = 'admin';
    else if (userData.email.includes('editor')) role = 'editor';
    setUser({ name: userData.email.split('@')[0], email: userData.email, role });
  };
  const logout = () => { setUser(null); };
  const value = { user, login, logout, isLoggedIn: !!user };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};