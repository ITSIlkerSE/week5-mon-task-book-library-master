import {Book} from "../model/Book";


type BooksProps = {
    book: Book;
    deleteBook: (isbn: string) => void;
}

export default function Books(props: BooksProps){

    return (

        <div className={"Book"}>
            <button onClick={() => props.deleteBook(props.book.isbn)}>Delete</button>
            <p>ISBN: [{props.book.isbn}] Titel ist: {props.book.title} Author :{props.book.author} </p>


        </div>


    )

}