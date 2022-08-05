import "./App.css";
import { useState, useEffect } from "react";
import MyReads from "./Components/MyReads";
import Search from "./Components/Search";
import * as BooksAPI from "./BooksAPI";
import { Route, Routes } from "react-router-dom";
import { debounce } from 'throttle-debounce';

function App() {
  
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
 
   /*Waiting 300 miliseconds before rendering the search results*/ 
   const matchBook = debounce(300, newquery => {
      if (newquery.length > 0) {
          const fetchSearchBook = async (newquery) => {
              const res = await BooksAPI.search(newquery);
              if (res.error) {
                setSearchBooks([]); }
              else {
              setSearchBooks(res);}              
          }
          fetchSearchBook(newquery);   
      } 
      else {
          setSearchBooks([]); 
      }  
   },false);
     
   console.log(searchBooks);

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
                />}    
          />
        </Routes>   
      </div>  
  );
}

export default App;
