import SearchBar from "./app/SearchBar.tsx";
import Menu, {type MenuItem} from "./app/Menu.tsx";
import BottomNav from "./app/BottomNav.tsx";
import {useEffect, useState} from "react";

interface CartItem {
    id: number;
    menuName: string;
    price: number;
    qty: number;
}

export default function App() {
    const [cart, setCart] = useState<CartItem[]>([])

    const handleAddToCart = (itemMenu: MenuItem) => {
        const isFoundItem = cart.find(item => item.id === itemMenu.id);
        if (isFoundItem) {

            setCart(prev =>
                prev.map(item =>
                    item.id === itemMenu.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                )
            );
        } else {
            const newItem: CartItem = {
                id: itemMenu.id,
                menuName: itemMenu.menuName,
                price: itemMenu.price,
                qty: 1
            };
            setCart([...cart, newItem]);

        }
    }
    const totalQtyGlobal = cart.reduce((total, item) => total + item.qty, 0);
    useEffect(() => {
        console.log("Cart Updated:", cart);
        console.log("Total Qty:", totalQtyGlobal);
    }, [cart, totalQtyGlobal]);
    return (
        <>
            <SearchBar/>
            <Menu funcAddItem={handleAddToCart}/>
            <BottomNav totalItems={totalQtyGlobal}/>
        </>
    )
}