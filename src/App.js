import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext, ThemeProvider } from './components/ThemeContext';
import BookForm from './components/bookform';
import BookTable from './components/booktable';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const { theme, toggleTheme } = useContext(ThemeContext);

useEffect(() => {
  const storedBooks = JSON.parse(localStorage.getItem('books'));
   //setBooks(storedBooks);
   console.log('I am the first use effect');
   console.log(books);
   console.log(storedBooks);
  if (storedBooks?.length) {
    setBooks(storedBooks);
    console.log(books.length);
  }
}, []);


  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
    console.log('I am the second use effect');
    console.log('Books state has changed:', books);
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
