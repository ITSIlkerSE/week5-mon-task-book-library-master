import {ChangeEvent, useState} from "react";
import {Book} from "../model/Book";
import BooksLib from "./BooksLib";
import Books from "./Books";
import './AddBook.css';

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
        <div className={"inputButtons"}>
            <div>
                <p>ISBN:</p>
                <input onChange={onIsbnChange} value={isbn} />
            </div>

            <div>
                <p>Title:</p>
                <input onChange={onTitleChange} value={title} />

            </div>

            <div>
                <p>Author:</p>
                <input onChange={onAuthorChange} value={author} />
            </div>
            <div  className={"inputButtons__button-last"}>
                <p> </p>
                <button onClick={() => onAddBook()}>Add Book</button>

            </div>


        </div>


    )

}