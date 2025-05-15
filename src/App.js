import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import { BookProvider } from './components/bookContext';
import { AuthProvider } from './components/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import AddBookPage from './pages/AddBookPage';
import BookListPage from './pages/BookListPage';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Home from './pages/Home'; 

import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BookProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/dashboard" element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } />
              <Route path="/add" element={
                <PrivateRoute>
                  <AddBookPage />
                </PrivateRoute>
              } />
              <Route path="/list" element={
                <PrivateRoute>
                  <BookListPage />
                </PrivateRoute>
              } />
            </Routes>
          </Router>
        </BookProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
