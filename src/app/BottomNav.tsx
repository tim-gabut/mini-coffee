import {Home, ShoppingCart, User} from "lucide-react";
import {Link} from "react-router-dom"
import {useState} from "react";

interface MenuItem {
    id:number;
    name: string;
    icon: React.ReactNode;
    path: string;
}

interface PropsItem{
    totalItems : number;
}

const menuBottomNav: MenuItem[] = [
    {id:1,name: "Home", icon: <Home/>, path: "/"},
    {id:2, name: "Cart", icon: <ShoppingCart/>, path: "/cart"},
    {id:3, name: "User", icon: <User/>, path: "/user"}
]
export default function BottomNav({totalItems}: PropsItem) {

    const [isActive, setIsActive] = useState("Home");


    return (
        <div className="fixed bg-white w-full shadow-2xl z-50 bottom-0
        left-0
        shadow-black rounded-t-lg">
            <div className="flex justify-around items-center h-16">
                {
                    menuBottomNav.map((item: MenuItem) => (
                        <Link
                            key={item.id}
                            to={item.path}
                            onClick={() => setIsActive(item.name)}
                            className={`flex flex-col text-xs gap-1
                    ${item.name === isActive ? "text-amber-500" : "text-grey-400"} 
                    items-center transition-colors duration-100 relative`}
                        >
                            {item.icon}
                            {(item.name === "Cart" && totalItems > 0) && (
                                <span className="absolute -top-2 -right-2 text-white bg-red-500 text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                    {totalItems}
                                </span>
                            ) }
                            {item.name}
                        </Link>
                    ))
                }
            </div>
        </div>
    )

}