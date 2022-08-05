import BookShelf from "./BookShelf";
import {Link} from "react-router-dom" 

const MyReads = ({books,changeShelf}) => {

  return (
            <div className="list-books">
                  <div className="list-books-content">
                        <div>
                              <div className="list-books-title">
                                    <h1>MyReads</h1>
                              </div>
                                    <BookShelf books = {books} shelftitle="Currently Reading" shelfid="currentlyReading" changeShelf={changeShelf}/>
                                    <BookShelf books = {books} shelftitle="Want to Read" shelfid="wantToRead" changeShelf={changeShelf}/>
                                    <BookShelf books = {books} shelftitle="Read" shelfid="read" changeShelf={changeShelf}/>
                        </div>
                  </div>

                  <div className="open-search">
                        <Link to="/search" >
                           Add a Book
                        </Link>
                  </div>
            </div>  
  )
}

export default MyReads