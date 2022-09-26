import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import BooksLib from "./components/BooksLib";
import AddBook from "./components/AddBook";
import {Book} from "./model/Book";
function App() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        getBooks()
    }, [])

    const getBooks = () => {
        axios.get("/api/book")
            .then((response) => response.data)
            .then((books) => setBooks(books))
    }


    const addBook = (book: Book) => {

        axios.post("/api/book", book)
            .then(getBooks)


    }

    const deleteBook = (isbn: string) => {
        axios.delete("/api/book/" + isbn)
            .then(getBooks)
    }


    return (

<body>
        <div className="App">


            <header className="App-header">
                <h1>Ilkers Library</h1>
                <BooksLib books={books} deleteBook={deleteBook}/>
                <AddBook addBook={addBook} />
            </header>

            <div className="animated-background">
                <video autoPlay muted loop>
                    <source
                        src={"https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/504400/2b0792025824dfe8a1aa161ebe74ddee128d39cd.mp4"}
                        type={"video/mp4"}/>

                </video>

            </div>

        </div>
</body>
    );
}

export default App;
