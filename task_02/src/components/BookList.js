import { useContext, useEffect, useState } from "react";
import { BookContext } from "./contexts/BookContext";
import Book from "./Book";
import { useNavigate } from "react-router-dom";
import SearchBook from "./SearchBook";

export default function BookList()
{
    const { books } = useContext(BookContext);
    let [filteredBooks, setFilteredBooks] = useState(books);
    const [availableBooks, setAvailableBooks] = useState(filteredBooks.filter(book => book.taken === false));
    const [unavailableBooks, setUnavailableBooks] = useState(books.filter(book => book.taken === true));
    const navigate = useNavigate();
    const addBook = () => {
        navigate("/add-book");
    }

    useEffect(() => {
        setFilteredBooks(books);
        setUnavailableBooks(books.filter(book => book.taken === true));
    }, [books]);
    
    useEffect(() => {
        setAvailableBooks(filteredBooks.filter(book => book.taken === false));
    }, [filteredBooks])

    const searchHandler = (searchValue, searchBy) => {
        filteredBooks = books.filter(book => {
            if (searchBy === "title")
            {
                return book.title.toLowerCase().includes(searchValue.toLowerCase());
            }
            else if (searchBy === "author")
            {
                return book.author.toLowerCase().includes(searchValue.toLowerCase());
            }
            else if (searchBy === "genre")
            {
                return book.genre.toLowerCase().includes(searchValue.toLowerCase());
            }
            else if (searchBy === "year")
            {
                return book.year === +searchValue ? book : null;
            }
            else if (searchBy === "pages")
            {
                return book.pages === +searchValue ? book : null;
            }
            else if (searchBy === "search_by" || searchValue === "")
            {
                return book;
            }
        });

        setFilteredBooks(filteredBooks);
    }

    return(
        <div className="container">
            <div className="table-container">
                <h1>Available Books</h1>

                <SearchBook onSearch={searchHandler}/>

                <div className="actions-container">
                    <button onClick={addBook}>Add Book</button>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Genre</th>
                            <th>Year</th>
                            <th>Pages</th>
                            <th>Modify</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {
                            availableBooks.map(book => {
                                return (
                                    <Book key={book.id} id={book.id} title={book.title} author={book.author} genre={book.genre} year={book.year} pages={book.pages} taken={book.taken}/>
                                )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="table-container">
                <h1>Unavailable Books</h1>

                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Genre</th>
                            <th>Year</th>
                            <th>Pages</th>
                            <th>Modify</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {
                            unavailableBooks.map(book => {
                                return (
                                    <Book key={book.id} id={book.id} title={book.title} author={book.author} genre={book.genre} year={book.year} pages={book.pages} taken={book.taken}/>
                                )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}