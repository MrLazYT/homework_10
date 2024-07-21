import { useState } from "react";

export default function SearchBook({ onSearch })
{
    const [searchBy, setSearchBy] = useState("search_by");
    const [searchValue, setSearchValue] = useState("");

    const onSearchValueChangeHandler = (e) => {
        setSearchValue(e.target.value);
    }

    const onSearchByChangeHandler = (e) => {
        setSearchBy(e.target.value);
    }

    return (
        <div className="search-container">
            <select value={searchBy} onChange={onSearchByChangeHandler} id="search-by-selector">
                <option value="search_by">Search by</option>
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="genre">Genre</option>
                <option value="year">Year</option>
                <option value="pages">Pages</option>
            </select>
            
            <input className="search" type="text" placeholder="Search..." value={searchValue} onChange={onSearchValueChangeHandler}/>
            <button onClick={() => {onSearch(searchValue, searchBy)}}>Search</button>
        </div>
    );
}