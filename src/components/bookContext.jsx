import { createContext, useState, useEffect } from 'react';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books'));
    if (storedBooks?.length) {
      setBooks(storedBooks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const addBook = (book) => {
    setBooks((prev) => [...prev, book]);
  };

  return (
    <BookContext.Provider value={{ books, addBook }}>
      {children}
    </BookContext.Provider>
  );
};
