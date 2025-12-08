import '../index.css';
import {Minus, Plus, ShoppingCart} from "lucide-react";
import type {CartItem} from "../App.tsx";
import {type MenuItem} from "../data/data.ts";


interface MenuProps {
    funcAddItem: (item: MenuItem) => void;
    cart: CartItem[];
    removeFromCart:(item: MenuItem)=> void;
    dataMenu: MenuItem[];
}

export default function Menu({funcAddItem, cart,removeFromCart, dataMenu}: MenuProps) {

    return (
        <div className="pt-16 pb-24 px-4 ">
            <div className="rounded-2xl overflow-hidden
            grid grid-cols-2 lg:grid-cols-4 gap-2">
                {
                    dataMenu.map((menu: MenuItem, index) => {
                        const itemInCart = cart.find(item => item.id === menu.id);
                        const quantity = itemInCart ? itemInCart.qty : 0;
                        return (
                            <div key={index} className="bg-white shadow-md rounded-2xl overflow-hidden mb-2
                        transition:all hover:scale-98">
                                <img src={menu.image} alt="" className="w-full h-32 object-cover"/>
                                <div>
                                    <h3 className="font-bold text-lg w-full pl-2">{menu.menuName}</h3>
                                    <p className="text-sm pl-2">{menu.description}</p>
                                    <div className="flex justify-around justify-items-center mx-2 mb-2">
                                        <p className="flex flex-auto items-center">{menu.price}</p>
                                        {
                                            (quantity === 0) ? (
                                                <button
                                                    onClick={() => funcAddItem(menu)}
                                                    className="text-amber-500 flex justify-center items-center
                                     border-amber-500 border rounded-md px-2 py-1
                                     transition-all hover:opacity-70 active:scale-90 active:bg-amber-600
                                     "
                                                >
                                                    <ShoppingCart/>
                                                </button>
                                            ) : (
                                                <div
                                                    className=" flex items-center gap-x-2 text-amber-500 border-amber-500">
                                                    <button
                                                        onClick={() => removeFromCart(menu)}
                                                        className="
                                                         flex justify-center items-center border rounded-md
                                     transition-all hover:opacity-70 active:scale-90 active:bg-amber-600"
                                                    >
                                                        <Minus size={16}/>
                                                    </button>
                                                    <span
                                                        className="flex justify-center items-center text-amber-500">{quantity}</span>
                                                    <button
                                                        onClick={() => funcAddItem(menu)}
                                                        className="flex justify-center items-center
                                    border rounded-md
                                     transition-all hover:opacity-70 active:scale-90 active:bg-amber-600"

                                                    >
                                                        <Plus size={16}/>
                                                    </button>
                                                </div>
                                            )
                                        }

                                    </div>
                                </div>
                            </div>
                        )

                    })
                }
            </div>
        </div>
    )
}