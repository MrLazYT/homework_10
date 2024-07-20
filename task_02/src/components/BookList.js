import { useContext } from "react";
import { BookContext } from "./contexts/BookContext";
import Book from "./Book";

export default function BookList()
{
    const { books } = useContext(BookContext)

    return(
        <div>
            <h1>Book List</h1>

            <table>
                <thead>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Genre</th>
                    <th>Year</th>
                    <th>Pages</th>
                    <th>Modify</th>
                </thead>
                
                <tbody>
                    {
                        books.map(book => {
                            return (
                                <Book key={book.id} id={book.id} title={book.title} author={book.author} genre={book.genre} year={book.year} pages={book.pages}/>
                            )
                    })}
                </tbody>
            </table>
        </div>
    );
}