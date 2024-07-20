import { useContext } from "react";
import { BookContext } from "./contexts/BookContext";
import Book from "./Book";

export default function BookList()
{
    const { books } = useContext(BookContext)

    return(
        <div>
            {
                books.map(book => {
                    return (
                        <Book id={book.id} title={book.title} author={book.author} genre={book.genre} year={book.year} pages={book.pages}/>
                    )
            })}
        </div>
    );
}