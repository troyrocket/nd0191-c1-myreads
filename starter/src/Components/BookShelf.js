import Book from "./Book";
import PropTypes from "prop-types";

const BookShelf = ({books, shelftitle, shelfid, changeShelf}) => {

  return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{shelftitle}</h2>
            <div className="bookshelf-books">
                    <ol className="books-grid">
                            {books.map((book) => {
                                return(
                                    (book.shelf === shelfid) && 
                                    <Book key = {book.id}
                                          book = {book} 
                                          changeShelf={changeShelf}
                                        />  
                                        );     
                            })}      
                    </ol>
            </div>
        </div>

  )
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelftitle: PropTypes.string.isRequired,
  shelfid: PropTypes.string.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default BookShelf