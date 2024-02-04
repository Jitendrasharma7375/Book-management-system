import axios from "axios";
import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";
import "../css/Book.css";

const Books = ({role}) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/book/books")
      .then((res) => {
        setBooks(res.data.books);
        
      }).catch((err) => console.log(err));
  }, []);

  if (books.length === 0) {
    return <h1>Loading</h1>
  }

  return (
    <div className="book-list">
      {
        books.map(book => {
          return <BookCard role={role} key={book._id} book={book} />
        })
      }
    </div>
  );
};

export default Books;
