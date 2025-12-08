import '../index.css';
import {Search, SlidersHorizontal} from 'lucide-react';

interface SearchProps{
    onSearch:(keyword: string)=> void;

}

function SearchBar({onSearch} :SearchProps) {
    // const [activeSearch, setActiveSearch] = useState()
    return (
        <div className="fixed p-2 z-50 flex items-center
        gap-2 bg-white rounded-full w-full shadow-2xl shadow-black mt-2">
            <Search />
            <input
                type="text"
                placeholder="Search your menu ..."
                className="bg-white outline-none w-full placeholder-grey-400"
                onChange={(e) => onSearch(e.target.value)}
            />
            <SlidersHorizontal />
        </div>
    )
}

export default SearchBar;