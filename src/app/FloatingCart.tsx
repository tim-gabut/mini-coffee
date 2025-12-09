import {Coins, ShoppingBasket, X} from "lucide-react";
import type {CartItem} from "../App.tsx";
import {formatRupiah} from "../util/currency.ts";

interface PropsFloatingCart {
    totalItems: number;
    totalPriceGlobal: number;
    cart: CartItem[];
    isOpen: boolean;
    toggleCart: () => void;
}

export default function FloatingCart({totalItems, totalPriceGlobal, cart, isOpen, toggleCart}: PropsFloatingCart) {

    if (isOpen) {
        return (
            <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black/50 bottom-16">
                <div className="bg-white rounded-t-2xl w-full max-h-[80vh] flex flex-col animate-slide-up">
                    <div className="flex justify-between items-center p-4 border-b">
                        <h2 className="font-bold text-lg">Daftar Pesanan</h2>
                        <button onClick={toggleCart} className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                            <X size={20}/>
                        </button>
                    </div>

                    <div className="overflow-y-auto p-4 flex-1 space-y-4">
                        {cart.map((item) => (
                            <div key={item.id} className="flex justify-between items-center border-b pb-2">
                                <div className="flex gap-3">
                                    <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden">
                                        <img src={item.imageUrl} alt={item.menuName}
                                             className="w-full h-full object-cover"/>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">{item.menuName}</p>
                                        <p className="text-xs text-gray-500">
                                            {item.qty} x {formatRupiah(item.price)}
                                        </p>
                                    </div>
                                </div>

                                <p className="font-bold text-sm">
                                    {formatRupiah(item.qty * item.price)}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 border-t bg-gray-50 ">
                        <div className="flex justify-between mb-4">
                            <span className="font-bold">Total Pembayaran</span>
                            <span className="font-bold text-orange-600 text-xl">{formatRupiah(totalPriceGlobal)}</span>
                        </div>
                        <button
                            className="w-full bg-orange-600 text-white py-3 rounded-xl font-bold shadow-lg active:scale-95 transition-all"
                            onClick={() => alert("Pesanan Diterima! (Fitur Checkout nanti)")}
                        >
                            Pesan Sekarang
                        </button>
                    </div>

                </div>
            </div>
        );
    }

    return (
        <div className="fixed bottom-17 left-0 w-full bg-amber-500 p-1
        shadow-black z-40
        flex justify-between items-center border-t rounded-4xl border-amber-500 transition-all active:scale-90 "
             onClick={toggleCart}
        >
            <div className="flex items-center">
                <ShoppingBasket size={16} className="mx-2 text-white "/>
                <span className="text-white font-semibold text-sm gap-2">{totalItems}</span>
            </div>
            <div className="flex items-center">
                <Coins size={16} className="text-white "/>
                <span className="text-white font-semibold text-sm gap-2 px-2"> {formatRupiah(totalPriceGlobal)}</span>
            </div>

        </div>
    )
}