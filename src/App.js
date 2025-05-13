import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext, ThemeProvider } from './components/ThemeContext';
import BookForm from './components/bookform';
import BookTable from './components/booktable';

const App = () => {
  const [books, setBooks] = useState([]);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books'));
    if (storedBooks) {
      setBooks(storedBooks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <div className={theme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <BookForm addBook={addBook} />
      <BookTable books={books} />
    </div>
  );
};

const RootApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default RootApp;
