import '../index.css';
import images from '../assets/Americano.jpg';
import {ShoppingCart} from "lucide-react";

// import {useState} from "react";

export interface MenuItem {
    id: number;
    menuName: string;
    price: number;
    image: string;
    description: string;
}

const menus: MenuItem[] = [
    {id:1,menuName: "Americano", price: 12000, image: images, description: "Kopi atau Makanan ini enak sekali"},
    {id:2,menuName: "Cappuccino", price: 20000, image: images, description: "Kopi atau Makanan ini enak sekali"},
    {id:3,menuName: "Espresso", price: 10000, image: images, description: "Kopi atau Makanan ini enak sekali"},
    {id:4,menuName: "French Fries", price: 25000, image: images, description: "Kopi atau Makanan ini enak sekali"},
    {id:5,menuName: "Mocha chino", price: 21000, image: images, description: "Kopi atau Makanan ini enak sekali"},
    {id:6,menuName: "V60", price: 30000, image: images, description: "Kopi atau Makanan ini enak sekali"},
    {id:7,menuName: "Japanese", price: 35000, image: images, description: "Kopi atau Makanan ini enak sekali"},
    {id:8,menuName: "Mineral Water", price: 5000, image: images, description: "Kopi atau Makanan ini enak sekali"},
    {id:9,menuName: "Long Black", price: 15000, image: images, description: "Kopi atau Makanan ini enak sekali"},
    {id:10,menuName: "Real Coffee", price: 27000, image: images, description: "Kopi atau Makanan ini enak sekali"},
    {id:11,menuName: "Sprite", price: 8000, image: images, description: "Kopi atau Makanan ini enak sekali"},
    {id:12,menuName: "Rice Bowl", price: 35000, image: images, description: "Kopi atau Makanan ini enak sekali"}

]

interface MenuProps {
    funcAddItem: (item: MenuItem) => void;
}

export default function Menu({funcAddItem}: MenuProps) {

    return (
        <div className="pt-16 pb-24 px-4 ">
            <div className="rounded-2xl overflow-hidden
            grid grid-cols-2 lg:grid-cols-4 gap-2">
                {
                    menus.map((menu: MenuItem, index) => (
                        <div key={index} className="bg-white shadow-md rounded-2xl overflow-hidden mb-2
                        transition:all hover:scale-98">
                            <img src={menu.image} alt="" className="w-full h-32 object-cover"/>
                            <div>
                                <h3 className="font-bold text-lg w-full pl-2">{menu.menuName}</h3>
                                <p className="text-sm pl-2">{menu.description}</p>
                                <div className="flex justify-around justify-items-center mx-2 mb-2">
                                    <p className="flex flex-auto items-center">{menu.price}</p>
                                    <button
                                        onClick={() => funcAddItem(menu)}
                                        className=" text-amber-500 flex justify-center items-center
                                     border-amber-500 border rounded-md px-2 py-1
                                     transition-all hover:opacity-70 active:scale-90 active:bg-amber-600
                                     "
                                    >
                                        <ShoppingCart/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}