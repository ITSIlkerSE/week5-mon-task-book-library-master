import {Book} from "../model/Book";
import Books from "./Books";
import './BooksLib.css';




type BooksLibProps = {

    books : Book[];
    deleteBook : (isbn: string) => void;

}


export default function BooksLib(props: BooksLibProps){

    return(
    <div className={"BookContainer"}>
        {props.books.map((book )=>
        <Books book={book} deleteBook={props.deleteBook}/>)}


    </div>

    )
}