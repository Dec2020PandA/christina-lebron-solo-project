import React, { useState, useEffect }from 'react';
import axios from 'axios';

const Reading = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/books")
    .then(res => setBooks(res.data))
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="reading-page">
      reading page
      {/*<div key={i} className="book-card">
          <div className="image-container">
            <img src={book.imageUrl} alt={book.title} />
          </div>
          <div className="info-container">
            <h2 className="title">{book.title}</h2>
            <h3 className="author">{book.author}</h3>
          </div>
  </div>*/}
    </div>
  )
}

export default Reading;