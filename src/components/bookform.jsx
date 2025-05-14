import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BookForm = ({ addBook }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    language: '',
    description: ''
  });

 
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData?.title || savedData?.author) {
      setFormData(savedData);
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author,language,description } = formData;
    if (!title.trim() || !author.trim() || !language.trim() || !description.trim()) return;

    addBook({ title, author,language,description });
    setFormData({ title: '', author: '', language: '',description: '' });
    localStorage.removeItem('formData');
    navigate('/list');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <input
        type="text"
        name="title"
        placeholder="Book Title"
        value={formData.title}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="author"
        placeholder="Author Name"
        value={formData.author}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="language"
        placeholder="language"
        value={formData.language}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="description"
        placeholder="description"
        value={formData.description}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Book
      </button>
    </form>
  );
};

export default BookForm;
