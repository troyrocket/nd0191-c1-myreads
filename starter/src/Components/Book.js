import React from 'react'
import { useState } from "react";

const Book = ({book, changeShelf}) => {

  const [shelf, setShelf] = useState(book.shelf);

  const moveShelf = (newShelf) => {
       setShelf(newShelf);
       changeShelf(book, newShelf);
  }

  return (
    <li>
    <div className="book">
        <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                    width: 128,
                    height: 192,
                    backgroundImage:`url(${book.imageLinks.thumbnail})`,
                    }}
                ></div>

                <div className="book-shelf-changer">
                    <select value={shelf} onChange={(event) => moveShelf(event.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    </select>
                </div>

        </div>

        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join(", ")}</div>
    </div>
    </li>
  
  )
}

export default Book
