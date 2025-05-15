import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const signup = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const login = (credentials) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (
      storedUser &&
      storedUser.email === credentials.email &&
      storedUser.password === credentials.password
    ) {
      setUser(storedUser);
      return true;
    }
    return false;
  };


  return (
    <AuthContext.Provider value={{ user, signup, login}}>
      {children}
    </AuthContext.Provider>
  );
};
