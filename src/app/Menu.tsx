import '../index.css';
import images from '../assets/Americano.jpg';
import {ShoppingCart} from "lucide-react";
// import {useState} from "react";

interface Menu {
    title: string;
    price: string;
    image: string;
    description: string;
}

const menus: Menu[] = [
    {title: "Americano", price: "Rp 20000", image: images, description: "Kopi atau Makanan ini enak sekali"},
    {title: "Cappuccino", price: "Rp 20000", image: images, description: "Kopi atau Makanan ini enak sekali"},
    {title: "Espresso", price: "Rp 20000", image: images, description: "Kopi atau Makanan ini enak sekali"},
    {title: "French Fries", price: "Rp 20000", image: images, description: "Kopi atau Makanan ini enak sekali"},
    {title: "French Fries", price: "Rp 20000", image: images, description: "Kopi atau Makanan ini enak sekali"},
    {title: "French Fries", price: "Rp 20000", image: images, description: "Kopi atau Makanan ini enak sekali"},
    {title: "French Fries", price: "Rp 20000", image: images, description: "Kopi atau Makanan ini enak sekali"},
    {title: "French Fries", price: "Rp 20000", image: images, description: "Kopi atau Makanan ini enak sekali"},
    {title: "French Fries", price: "Rp 20000", image: images, description: "Kopi atau Makanan ini enak sekali"},
    {title: "French Fries", price: "Rp 20000", image: images, description: "Kopi atau Makanan ini enak sekali"},
    {title: "French Fries", price: "Rp 20000", image: images, description: "Kopi atau Makanan ini enak sekali"},
    {title: "French Fries", price: "Rp 20000", image: images, description: "Kopi atau Makanan ini enak sekali"}

]

export default function Menu() {

    return (
        <div className="pt-16 pb-24 px-4 ">
            <div className="bg-white rounded-2xl overflow-hidden
            grid grid-cols-2 lg:grid-cols-4 gap-2">
                {
                    menus.map((menu: Menu, index) => (
                        <div key={index} className="shadow-md rounded-2xl overflow-hidden mb-2
                        transition:all hover:scale-98">
                            <img src={menu.image} alt=""/>
                            <div>
                                <h3 className="font-bold text-lg w-full pl-2">{menu.title}</h3>
                                <p className="text-sm pl-2">{menu.description}</p>
                                <div className="flex justify-around justify-items-center mx-2 mb-2">
                                    <p className="flex flex-auto items-center">{menu.price}</p>
                                    <button className=" text-amber-500 flex justify-center items-center
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