import { createContext, useReducer } from 'react';
import { ACTION_TYPES } from './BoilerPlate';

function booksReducer(books, action)
{
    switch (action.type)
    {
        case ACTION_TYPES.ADD:
        {
            return [
                ...books,
                action.payload
            ];
        }
        case ACTION_TYPES.EDIT:
        {
            return books.map(book => {
                if (book.id === action.payload.id)
                {
                    return action.payload;
                }
                else
                {
                    return book;
                }
            });
        }
        case ACTION_TYPES.DELETE:
        {
            return books.filter(book => book.id !== action.payload);
        }
        default:
        {
            throw Error("Unknown action: " + action.type);
        }
    }
}

const initialBooks = [
    {
        id: 1,
        title: "The Witcher: The last wish",
        author: "Andrzej Sapkowski",
        genre: "Fantasy",
        year: 1993,
        pages: 375,
    },
    {
        id: 2,
        title: "The Hunger Games",
        author: "Suzanne Collins",
        genre: "Science fiction",
        year: 2008,
        pages: 483,
    },
    {
        id: 3,
        title: "The Queen`s Gambit",
        author: "Walter Tewis",
        genre: "Novel",
        year: 1983,
        pages: 450,
    },
]

export const BookContext = createContext();

export default function BookContextProvider(props)
{
    const [books, dispatch] = useReducer(
        booksReducer,
        initialBooks
    );

    const addBook = (book) => {
        dispatch(
            {
                type: ACTION_TYPES.ADD,
                payload: book
            }
        )
    }

    const editBook = (book) => {
        dispatch(
            {
                type: ACTION_TYPES.EDIT,
                payload: book
            }
        )
    }

    const deleteBook = (id) => {
        dispatch(
            {
                type: ACTION_TYPES.DELETE,
                payload: id
            }
        )
    }

    const value = { books, addBook, editBook, deleteBook };

    return (
        <BookContext.Provider value={value}>
            {props.children}
        </BookContext.Provider>
    )
}