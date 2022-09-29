import {useEffect, useState} from "react";
import axios from "axios";
import {Book} from "../model/Book";



export default function useBooks() {

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

return {books, addBook, deleteBook}

}