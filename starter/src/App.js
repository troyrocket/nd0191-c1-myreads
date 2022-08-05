import "./App.css";
import { useState, useEffect } from "react";
import MyReads from "./Components/MyReads";
import Search from "./Components/Search";
import * as BooksAPI from "./BooksAPI";
import { Route, Routes } from "react-router-dom";

function App() {
  // let navigate = useNavigate();

  const [books, setBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]); 

    useEffect(() => {
        const getBooks = async () => {
        const res = await BooksAPI.getAll();
        setBooks(res);
        };
            getBooks();
          }, []);

   /* When changing a book's shelf, updating the shelf status in the API*/
   const  changeShelf= async(book, shelf) => {
       await BooksAPI.update(book, shelf);

       const getBooks = async () => {
        const res = await BooksAPI.getAll();
        setBooks(res);
      };
      await getBooks();
   }
 
   const matchBook = async (newquery) => {
       const res = await BooksAPI.search(newquery);
       setSearchBooks(res);
     }

    const resetSearch = () => {
        setSearchBooks([]); 
      };  

  return (
     <div className="app">   
        <Routes>
          <Route 
              exact path="/"
              element={
                <MyReads books = {books} 
                        changeShelf={changeShelf}
                />}
          />
          <Route
              exact path="/search"  
              element={
                <Search changeShelf={changeShelf} 
                        books = {books} 
                        searchBooks = {searchBooks}
                        matchBook= {matchBook}
                        resetSearch = {resetSearch}
                />}    
          />
        </Routes>   
      </div>  
  );
}

export default App;
