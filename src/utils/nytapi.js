

export const fetchBookDescription = async (title) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(title)}`
    );
    const data = await response.json();

    if (data.totalItems > 0) {
      const book = data.items[0].volumeInfo;
      return book.description || book.subtitle || 'No description available';
    } else {
      return 'No description found';
    }
  } catch (error) {
    console.error('Error fetching book review:', error);
    return 'Error loading description';
  }
};
