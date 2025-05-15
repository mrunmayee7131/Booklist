import React, { useContext } from 'react';
import BookForm from '../components/bookform';
import { BookContext } from '../components/bookContext';
import { ThemeContext } from '../components/ThemeContext';
import { Link } from 'react-router-dom';
import UserHeader from '../components/UserHeader';

const AddBookPage = () => {
  const { addBook } = useContext(BookContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme}>
       <UserHeader />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h2>Add a Book</h2>
      <BookForm addBook={addBook} />
      <p>
        Want to see your books? <Link to="/list">Go to Book List</Link>
      </p>
    </div>
  );
};

export default AddBookPage;
