import {Book} from "../model/Book";
import './Books.css';


type BooksProps = {
    book: Book;
    deleteBook: (isbn: string) => void;

}


export default function Books(props: BooksProps){





    return (

        <div className={"Book popUp"}>

            <p>[{props.book.isbn}] </p>
            <hr/>

            <p>{props.book.title} </p>
            <hr/>

            <p><em>{props.book.author}</em></p>
            <hr/>


            <button id={"button-delete"} onClick={() =>
            {
                props.deleteBook(props.book.isbn);
                }}>Delete</button>


        </div>


    )



}
