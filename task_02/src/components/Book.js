import { useContext } from "react";
import { BookContext } from "./contexts/BookContext";

export default function Book({ id, title, author, genre, year, pages })
{
    const { deleteBook } = useContext(BookContext)
    return (
        <div className="book">
            <h2>{title}</h2>
            <p>{author}</p>
            <p>{genre}</p>
            <p>{year}</p>
            <p>{pages}</p>
            <button>Edit Book</button>
            <button onClick={() => deleteBook(id)}>Delete Book</button>
        </div>
    );
}