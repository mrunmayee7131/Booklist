import React from 'react';

const SearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by title..."
      value={searchQuery}
      onChange={(e) => onSearchChange(e.target.value)}
      style={{
        padding: '8px',
        marginBottom: '16px',
        width: '100%',
        maxWidth: '400px',
        fontSize: '1rem',
      }}
    />
  );
};


export default React.memo(SearchBar);
