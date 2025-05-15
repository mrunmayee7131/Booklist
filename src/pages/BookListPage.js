import React, { useContext } from 'react';
import BookTable from '../components/booktable';
import { BookContext } from '../components/bookContext';
import { ThemeContext } from '../components/ThemeContext';
import { Link } from 'react-router-dom';
import UserHeader from '../components/UserHeader';

const BookListPage = () => {
  const { books } = useContext(BookContext);
  const { theme, toggleTheme } = useContext(ThemeContext);


  return (
    <> <UserHeader />
    <div className={theme}>
      
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h2>Book List</h2>
      <BookTable books={books} />
      <p>
        Want to add a new book? <Link to="/add">Go to Add Book</Link>
      </p>
    </div>
    </>
  );
};

export default BookListPage;
