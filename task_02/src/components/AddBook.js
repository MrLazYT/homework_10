import { useContext, useState } from "react";
import { BookContext } from "./contexts/BookContext";
import { useNavigate } from "react-router-dom";

export default function AddBook()
{
    const [book, setBook] = useState({
        id: 0,
        title: "",
        author: "",
        genre: "",
        year: 0,
        pages: 0,
        taken: false
    });

    const { addBook } = useContext(BookContext);
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        addBook(book);
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
        <div>
            <form onSubmit={onSubmitHandler}>
                <h2>Add Book</h2>

                <div className="input-container">
                    <label>Title</label>
                    <input value={book.title} onChange={(e) => {onTitleChangeHandler(e)}}/>
                </div>

                <div className="input-container">
                    <label>Author</label>
                    <input value={book.author} onChange={(e) => {onAuthorChangeHandler(e)}}/>
                </div>

                <div className="input-container">
                    <label>Genre</label>
                    <input value={book.genre} onChange={(e) => {onGenreChangeHandler(e)}}/>
                </div>

                <div className="input-container">
                    <label>Year</label>
                    <input type="number" value={book.year} onChange={(e) => {onYearChangeHandler(e)}}/>
                </div>

                <div className="input-container">
                    <label>Pages</label>
                    <input type="number" value={book.pages} onChange={(e) => {onPagesChangeHandler(e)}}/>
                </div>

                <button type="submit">Save</button>
            </form>
        </div>
    );
}