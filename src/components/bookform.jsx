import React, { useState } from 'react';

const BookForm = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (!title.trim() || !author.trim()) {
      alert('Please fill in both fields');
      return;
    }

    
    addBook({ title, author });

   
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter book title"
          required
        />
      </div>
      <div>
        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter author name"
          required
        />
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
