import {ChangeEvent, useState} from "react";
import {Book} from "../model/Book";
import BooksLib from "./BooksLib";
import Books from "./Books";

type addBookProps = {
    addBook : (book: Book) => void
}

export default function AddBook(props: addBookProps){


const [title, setTitle] = useState("")
const [isbn, setIsbn] = useState("")
const [author, setAuthor] = useState("")

    const onTitleChange = (event: ChangeEvent<HTMLInputElement> ) => {
        setTitle(event.target.value)
    }
    const onIsbnChange = (event: ChangeEvent<HTMLInputElement> ) => {
        setIsbn(event.target.value)
    }
    const onAuthorChange = (event: ChangeEvent<HTMLInputElement> ) => {
        setAuthor(event.target.value)
    }

    const onAddBook = () => {
    //create new book
    let newBook =  {

        title: title,
        isbn: isbn,
        author: author
    }

    //callback method for new book,
    props.addBook(newBook)

    }

    return(
        <div>
            <input onChange={onIsbnChange} value={isbn} />
            <input onChange={onTitleChange} value={title} />
            <input onChange={onAuthorChange} value={author} />
            <button onClick={() => onAddBook()}>Add Book</button>

        </div>


    )

}