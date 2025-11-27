import '../index.css';
// import {useState} from "react";

function Search() {
    return (
        <div className="container mx-auto">
            <input
                className="placeholder-black rounded-lg shadow-lg mt-2 w-full"
                placeholder="Search..."
            />
        </div>
    )
}

export default Search;