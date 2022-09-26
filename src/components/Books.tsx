import {Book} from "../model/Book";
import './Books.css';


type BooksProps = {
    book: Book;
    deleteBook: (isbn: string) => void;
}

export default function Books(props: BooksProps){

    return (

        <div className={"Book"}>

            <p>ISBN: [{props.book.isbn}] </p>
            <p>Title: {props.book.title} </p>
            <p>Author :{props.book.author}</p>


            <button onClick={() => props.deleteBook(props.book.isbn)}>Delete</button>


        </div>


    )

}