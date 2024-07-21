import { createContext, useReducer } from 'react';
import { ACTION_TYPES } from './BoilerPlate';

let nextId = 16;

function booksReducer(books, action)
{
    switch (action.type)
    {
        case ACTION_TYPES.ADD:
        {
            console.log(action.payload);
            console.log(nextId);
            
            return [
                ...books,
                {
                    ...action.payload,
                    id: nextId++,
                },
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
        case ACTION_TYPES.TAKE:
        {
            return books.map(book => {
                if (book.id === action.payload)
                {
                    return {
                        ...book,
                        taken: true
                    }
                }
                else
                {
                    return book;
                }
            });
        }
        case ACTION_TYPES.RETURN:
        {
            return books.map(book => {
                if (book.id === action.payload)
                {
                    return {
                        ...book,
                        taken: false
                    }
                }
                else
                {
                    return book;
                }
            });
        }
    }
}

const initialBooks = [
    {
        id: 1,
        title: "The Witcher: The Last Wish",
        author: "Andrzej Sapkowski",
        genre: "Fantasy",
        year: 1993,
        pages: 288,
        taken: false
    },
    {
        id: 2,
        title: "The Witcher: Sword of Destiny",
        author: "Andrzej Sapkowski",
        genre: "Fantasy",
        year: 1992,
        pages: 384,
        taken: false
    },
    {
        id: 3,
        title: "The Witcher: Blood of Elves",
        author: "Andrzej Sapkowski",
        genre: "Fantasy",
        year: 1994,
        pages: 320,
        taken: false
    },
    {
        id: 4,
        title: "The Witcher: Time of Contempt",
        author: "Andrzej Sapkowski",
        genre: "Fantasy",
        year: 1995,
        pages: 331,
        taken: false
    },
    {
        id: 5,
        title: "The Witcher: Baptism of Fire",
        author: "Andrzej Sapkowski",
        genre: "Fantasy",
        year: 1996,
        pages: 343,
        taken: false
    },
    {
        id: 6,
        title: "The Witcher: The Tower of the Swallow",
        author: "Andrzej Sapkowski",
        genre: "Fantasy",
        year: 1997,
        pages: 436,
        taken: false
    },
    {
        id: 7,
        title: "The Witcher: The Lady of the Lake",
        author: "Andrzej Sapkowski",
        genre: "Fantasy",
        year: 1999,
        pages: 531,
        taken: false
    },
    {
        id: 8,
        title: "The Witcher: Season of Storms",
        author: "Andrzej Sapkowski",
        genre: "Fantasy",
        year: 2013,
        pages: 384,
        taken: false
    },
    {
        id: 9,
        title: "The Hunger Games",
        author: "Suzanne Collins",
        genre: "Science fiction",
        year: 2008,
        pages: 374,
        taken: true
    },
    {
        id: 10,
        title: "The Ballad of Songbirds and Snakes",
        author: "Suzanne Collins",
        genre: "Science fiction",
        year: 2020,
        pages: 517,
        taken: false
    },
    {
        id: 11,
        title: "The Queen`s Gambit",
        author: "Walter Tevis",
        genre: "Novel",
        year: 1983,
        pages: 243,
        taken: false
    },
    {
        id: 12,
        title: "Clean Code",
        author: "Robert Cecil Martin",
        genre: "Computer Science",
        year: 2007,
        pages: 464,
        taken: false
    },
    {
        id: 13,
        title: "The Clean Coder",
        author: "Robert Cecil Martin",
        genre: "Computer Science",
        year: 2011,
        pages: 210,
        taken: false
    },
    {
        id: 14,
        title: "Clean Agile",
        author: "Robert Cecil Martin",
        genre: "Computer Science",
        year: 2019,
        pages: 240,
        taken: false
    },
    {
        id: 15,
        title: "Clean Architecture",
        author: "Robert Cecil Martin",
        genre: "Computer Science",
        year: 2017,
        pages: 432,
        taken: false
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

    const takeBook = (id) => {
        dispatch(
            {
                type: ACTION_TYPES.TAKE,
                payload: id
            }
        );
    }

    const returnBook = (id) => {
        dispatch(
            {
                type: ACTION_TYPES.RETURN,
                payload: id
            }
        );
    }

    const value = { books, addBook, editBook, deleteBook, takeBook, returnBook };

    return (
        <BookContext.Provider value={value}>
            {props.children}
        </BookContext.Provider>
    )
}