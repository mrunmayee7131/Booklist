import React, { useContext } from 'react';
import BookTable from '../components/booktable';
import { BookContext } from '../components/bookContext';
import { ThemeContext } from '../components/ThemeContext';

const BookListPage = () => {
  const { books } = useContext(BookContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h2>Book List</h2>
      <BookTable books={books} />
    </div>
  );
};

export default BookListPage;
