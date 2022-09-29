import React, {useEffect, useState} from 'react';
import './App.css';
import BooksLib from "./components/BooksLib";
import AddBook from "./components/AddBook";
import useBooks from "./hooks/useBooks";

function App() {

const {addBook, deleteBook, books} = useBooks()


    return (

<body>
        <div className="App">


            <header className="App-header">
<div className={"App-header__title"} >
    <div className={"Box"}></div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>

    <h1>Ilkers Library</h1>
</div>



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
