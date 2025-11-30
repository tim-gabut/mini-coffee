import '../index.css';
import {Search, SlidersHorizontal} from 'lucide-react';
// import {useState} from "react";

function SearchBar() {
    // const [activeSearch, setActiveSearch] = useState()
    return (
        <div className="fixed p-2 z-50 flex items-center
        gap-2 bg-white rounded-full w-full shadow-2xl shadow-black mt-2">
            <Search />
            <input
                placeholder="Search your menu ..."
                className="bg-white outline-none w-full placeholder-grey-400"
            />
            <SlidersHorizontal />
        </div>
    )
}

export default SearchBar;