import { useContext } from "react";
import { BookContext } from "./contexts/BookContext";
import { useNavigate } from "react-router-dom";

export default function Book({ id, title, author, genre, year, pages })
{
    const { deleteBook } = useContext(BookContext);
    const navigate = useNavigate();
    const editBook = () => {
        navigate(`${id}/edit`);
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
        </tr>
    );
}