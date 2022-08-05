import { useState } from "react";
import Book from "./Book";
import {Link} from "react-router-dom" 

const Search = ({changeShelf, books, searchBooks, matchBook}) => {  

      const [query, setQuery] = useState(""); 

      const updateQuery = (newquery) => {
        setQuery(newquery);
        matchBook(newquery);
      };

      console.log(query);
      console.log(searchBooks);

      const combineBooks = searchBooks.map(searchBook => {
        books.map(book => {
          if (book.id === searchBook.id) {
            searchBook.shelf = book.shelf;
          }
          return book;
        });
        return searchBook;
      });

  return (
    <div className="search-books">
          <div className="search-books-bar">      
                  <Link to="/" className="close-search"> 
                        Close
                  </Link>
                  <div className="search-books-input-wrapper">
                    <input
                      type="text"
                      placeholder="Search by title, author, or ISBN"
                      value={query}
                      onChange={(event) => updateQuery(event.target.value)}
                      autoFocus
                    />
                  </div>
          </div>

          <div className="search-books-results">
            <ol className="books-grid">
                {(query !== "") && combineBooks.map((combineBook) => {
                    return(
                        <Book key = {combineBook.id}
                              book = {combineBook} 
                              changeShelf={changeShelf}
                            />  
                           )
                  })}                             
            </ol>
                
          </div>
  </div>
  )
};

export default Search