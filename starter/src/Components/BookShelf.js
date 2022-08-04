import Book from "./Book";

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

export default BookShelf