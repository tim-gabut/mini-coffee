import {Home, ShoppingCart, User} from "lucide-react";
import {Link} from "react-router-dom"
import {useState} from "react";

interface MenuItem {
    name: string;
    icon: React.ReactNode;
    path: string;
}

const menuBottomNav: MenuItem[] = [
    {name: "Home", icon: <Home/>, path: "/"},
    {name: "Cart", icon: <ShoppingCart/>, path: "/cart"},
    {name: "User", icon: <User/>, path: "/user"}
]
export default function BottomNav() {

    const [isActive, setIsActive] = useState("Home");


    return (
        <div className="fixed bg-white w-full shadow-2xl z-50 bottom-0
        left-0
        shadow-black rounded-t-lg">
            <div className="flex justify-around items-center h-16">
                {
                    menuBottomNav.map((item: MenuItem, index: number) => (
                        <Link
                            key={index}
                            to={item.path}
                            onClick={() => setIsActive(item.name)}
                            className={`flex flex-col text-xs gap-1
                    ${item.name === isActive ? "text-amber-500" : "text-grey-400"} 
                    items-center transition-colors duration-100`}
                        >
                            {item.icon}
                            {item.name}
                        </Link>
                    ))
                }
            </div>
        </div>
    )

}