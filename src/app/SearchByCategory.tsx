import '../index.css';
import {useState} from "react";

const categories =["All","Food","Beverages", "Others", "Others", "Others", "Others","Others"]
function SearchByCategory() {
    const[active,setActive] = useState("All")
    return (
        <div className="container mx-auto w-full flex overflow-x-auto gap-3 p-4">
            {
                categories.map((category,index) => (
                    <button
                        key={index}
                        onClick={() => setActive(category)}
                        className={
                        `bg-amber-700 rounded-full font-medium px-4 py-2 whitespace-nowrap transition-colors
                        ${
                            active ===category ? "bg-gray-200" : "bg-gray-200"
                        }
                    `}>
                        {category}
                    </button>
                ))
            }

        </div>
    )
}

export default SearchByCategory;