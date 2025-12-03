import {Coins, ShoppingBasket} from "lucide-react";

interface PropsFloatingCart {
    totalItems: number;
    totalPriceGlobal: number;
}

export default function FloatingCart({totalItems, totalPriceGlobal}: PropsFloatingCart) {

    return (
        <div className="fixed bottom-17 left-0 w-full bg-amber-500 p-1
        shadow-black z-40
        flex justify-between items-center border-t rounded-4xl border-amber-500 transition-all active:scale-90 ">
            <div className="flex items-center">
                <ShoppingBasket size={16} className="mx-2 text-white "/>
                <span className="text-white font-semibold text-sm gap-2">{totalItems}</span>
            </div>
           <div className="flex items-center">
               <Coins size={16} className="text-white "/>
               <span className="text-white font-semibold text-sm gap-2 px-2"> {totalPriceGlobal}</span>
           </div>

        </div>
    )
}