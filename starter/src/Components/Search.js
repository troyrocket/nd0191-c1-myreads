import { useState } from "react";
import Book from "./Book";

const Search = ({callShowSearchPage, books}) => {  

      const [query, setQuery] = useState(""); 
      const updateQuery = (query) => {
        setQuery(query.trim());
        };
      
      const showBooks = query === "" ? books : 
        books.filter((c) => c.title.toLowerCase().includes(query.toLowerCase()));



  return (
    <div className="search-books">
          <div className="search-books-bar">
                  <a
                    className="close-search"
                    onClick={() => callShowSearchPage()}
                  >
                    Close
                  </a>

                  <div className="search-books-input-wrapper">
                    <input
                      type="text"
                      placeholder="Search by title, author, or ISBN"
                      value={query}
                      onChange={(event) => updateQuery(event.target.value)}
                    />
                  </div>
          </div>

          <div className="search-books-results">
            <ol className="books-grid">
            {showBooks.map((book) => {
                return(
                 <Book image={book.imageLinks.thumbnail} title = {book.title} author={book.authors[0]} />  
                );     
            })}     
            </ol>
                
          </div>
  </div>
  )
};

export default Search