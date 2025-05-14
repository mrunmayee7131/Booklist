import React, { useContext } from 'react';
import BookForm from '../components/bookform';
import { BookContext } from '../components/bookContext';
import { ThemeContext } from '../components/ThemeContext';

const AddBookPage = () => {
  const { addBook } = useContext(BookContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h2>Add a Book</h2>
      <BookForm addBook={addBook} />
    </div>
  );
};

export default AddBookPage;
