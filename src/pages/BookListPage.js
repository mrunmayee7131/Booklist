import React, { useContext, useState, useMemo, useCallback } from 'react';
import BookTable from '../components/booktable';
import SearchBar from '../components/SearchBar';
import { BookContext } from '../components/bookContext';
import { ThemeContext } from '../components/ThemeContext';
import { Link } from 'react-router-dom';
import UserHeader from '../components/UserHeader';

const BookListPage = () => {
  const { books } = useContext(BookContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [searchQuery, setSearchQuery] = useState('');

  
  const filteredBooks = useMemo(() => {
    return books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [books, searchQuery]);

  
  const handleSearchChange = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  return (
    <>
      <UserHeader />
      <div className={theme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <h2>Book List</h2>

      
        <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />

      
        <BookTable books={filteredBooks} />

        <p>
          Want to add a new book? <Link to="/add">Go to Add Book</Link>
        </p>
      </div>
    </>
  );
};

export default BookListPage;
