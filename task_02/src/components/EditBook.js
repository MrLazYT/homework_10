import { useContext, useState } from "react";
import { BookContext } from "./contexts/BookContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function EditBook()
{
    const { books, editBook } = useContext(BookContext);
    const { id } = useParams();
    const targetBook = books.find(book => book.id === +id);
    const [book, setBook] = useState(targetBook);
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        editBook(book);
        navigate("/");
    }

    const onTitleChangeHandler = (e) => {
        setBook({
            ...book,
            title: e.target.value
        });
    }

    const onAuthorChangeHandler = (e) => {
        setBook({
            ...book,
            author: e.target.value
        });
    }

    const onGenreChangeHandler = (e) => {
        setBook({
            ...book,
            genre: e.target.value
        });
    }

    const onYearChangeHandler = (e) => {
        setBook({
            ...book,
            year: e.target.value
        });
    }

    const onPagesChangeHandler = (e) => {
        setBook({
            ...book,
            pages: e.target.value
        });
    }

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <label>
                    Title
                    <input value={book.title} onChange={(e) => {onTitleChangeHandler(e)}}/>
                </label>

                <label>
                    Author
                    <input value={book.author} onChange={(e) => {onAuthorChangeHandler(e)}}/>
                </label>

                <label>
                    Genre
                    <input value={book.genre} onChange={(e) => {onGenreChangeHandler(e)}}/>
                </label>

                <label>
                    Year
                    <input type="number" value={book.year} onChange={(e) => {onYearChangeHandler(e)}}/>
                </label>

                <label>
                    Pages
                    <input type="number" value={book.pages} onChange={(e) => {onPagesChangeHandler(e)}}/>
                </label>

                <button type="submit">Save</button>
            </form>
        </>
    );
}