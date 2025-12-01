import SearchBar from "./app/SearchBar.tsx";
import Menu from "./app/Menu.tsx";
import BottomNav from "./app/BottomNav.tsx";
import {useState} from "react";

interface CartItem {
    id: number;
    menuName: string;
    harga: number;
    qty: number;
}

export default function App(){
    const [count, setCount] = useState(0)
    const countItem =()=>{
        setCount(count+1)
    }
    return (
        <>
            <SearchBar/>
            <Menu funcAddItem={countItem}/>
            <BottomNav totalItems={count}/>
        </>
    )
}