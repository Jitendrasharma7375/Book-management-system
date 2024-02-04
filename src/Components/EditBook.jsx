import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditBook = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  const {id} = useParams()

  useEffect(()=>{
    axios
      .get('http://localhost:3001/book/book/'+id)
      .then(res => {
        setName(res.data.name)
        setAuthor(res.data.author)
        setImageUrl(res.data.imageUrl)
      })
      .catch((err) => console.log(err));
  },
  [id]
  )

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios
      .patch("http://localhost:3001/book/book/"+id, { name, author, imageUrl })
      .then((res) =>{
        if(res.data.updated) {
          navigate("/books")
        }
        else{
          console.log(res)
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="student-form-container">
      <form className="student-form" onSubmit={handleSubmit}>
        <h2>Edit Book</h2>
        <div className="form-group">
          <label htmlFor="book
          ">Book Name:</label>
          <input type="text" id="book"
            name="book" placeholder="Enter Book Name" value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author Name:</label>
          <input type="text" id="author" name="author" placeholder="Enter author Name" value={author} onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            placeholder="Enter Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-add-student">
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook
