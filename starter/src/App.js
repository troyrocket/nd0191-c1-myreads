import "./App.css";
import { useState, useEffect } from "react";
import MyReads from "./Components/MyReads";
import Search from "./Components/Search";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  const callShowSearchPage = () =>  {
          setShowSearchpage(!showSearchPage)
  };

  const [books, setBooks] = useState([]);

        useEffect(() => {
          const getBooks = async () => {
            const res = await BooksAPI.getAll();
            setBooks(res);
          };

          getBooks();
        }, []);

    console.log(books);


  return (
    <div className="app">
      {showSearchPage ? (
        <Search callShowSearchPage={callShowSearchPage} books = {books}/>
        
      ) : (

         <div>
         <MyReads />
         <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
