import SearchBar from "./app/SearchBar.tsx";
import Menu from "./app/Menu.tsx";
import BottomNav from "./app/BottomNav.tsx";
import {useEffect, useState} from "react";
import FloatingCart from "./app/FloatingCart.tsx";
import {menus, type MenuItem} from "./data/data.ts";

export interface CartItem {
    id: number;
    menuName: string;
    price: number;
    qty: number;
}

export default function App() {
    const [cart, setCart] = useState<CartItem[]>([])
    const [keyword, setKeyword] = useState("");

    const handleAddToCart = (itemMenu: MenuItem) => {
        const isFoundItem = cart.find(item => item.id === itemMenu.id);
        if (isFoundItem) {

            setCart(prev =>
                prev.map(item =>
                    item.id === itemMenu.id
                        ? {...item, qty: item.qty + 1}
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

    const handleRemoveFromCart = (itemMenu: MenuItem) => {
        const isFoundItem = cart.find(item => item.id === itemMenu.id);
        if (isFoundItem) {
            setCart(prev =>
                prev.map(item =>
                    item.id === itemMenu.id
                        ? {...item, qty: item.qty - 1}
                        : item
                )
            );
        } else {
            const updateCart = cart.filter(item => item.id !== itemMenu.id);
            setCart(updateCart);

        }
    }
    const totalQtyGlobal = cart.reduce((total, item) => total + item.qty, 0);
    const totalPriceGlobal = cart.reduce((total, item) => {
        const sub = item.price * item.qty;
        return sub + total;
    }, 0);
    useEffect(() => {
        console.log("Cart Updated:", cart);
        console.log("Total Qty:", totalQtyGlobal);
    }, [cart, totalQtyGlobal]);

    const filteredMenus = menus.filter((item) => {
        return item.menuName.toLowerCase().includes(keyword.toLowerCase());
    });
    return (
        <>
            <SearchBar onSearch={(text=>setKeyword(text))}/>
            <Menu funcAddItem={handleAddToCart}
                  cart={cart}
                  removeFromCart={handleRemoveFromCart}
                  dataMenu={filteredMenus}
            />
            {
                totalQtyGlobal > 0 && (
                    <FloatingCart totalItems={totalQtyGlobal}

                                  totalPriceGlobal={totalPriceGlobal}/>
                )
            }

            <BottomNav totalItems={totalQtyGlobal}/>
        </>
    )
}