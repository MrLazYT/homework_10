import { useContext, useState } from "react";
import { BookContext } from "./contexts/BookContext";
import { useNavigate } from "react-router-dom";

export default function Book({ id, title, author, genre, year, pages, taken })
{
    const { deleteBook, takeBook, returnBook } = useContext(BookContext);
    const navigate = useNavigate();
    const editBook = () => {
        navigate(`${id}/edit`);
    }
    const [takeReturnText] = useState(taken ? "Return" : "Take")

    const takeReturnBook = () => {
        if (taken)
        {
            returnBook(id);
        }
        else
        {
            takeBook(id);
        }
    }

    return (
        <tr className="book">
            <td>{title}</td>
            <td>{author}</td>
            <td>{genre}</td>
            <td>{year}</td>
            <td>{pages}</td>
            <td>
                <button onClick={editBook}>Edit Book</button>
                <button onClick={() => deleteBook(id)}>Delete Book</button>
            </td>
            <td>
                <button onClick={() => takeReturnBook(id)}>{takeReturnText}</button>
            </td>
        </tr>
    );
}