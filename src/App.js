import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import { BookProvider } from './components/bookContext';
import AddBookPage from './pages/AddBookPage';
import BookListPage from './pages/BookListPage';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <BookProvider>
        <Router>
          <nav style={{ padding: '1rem' }}>
            <Link to="/add" style={{ marginRight: '1rem' }}>Add Book</Link>
            <Link to="/list">View Book List</Link>
          </nav>

          <Routes>
            <Route path="/add" element={<AddBookPage />} />
            <Route path="/list" element={<BookListPage />} />
          </Routes>
        </Router>
      </BookProvider>
    </ThemeProvider>
  );
};

export default App;
