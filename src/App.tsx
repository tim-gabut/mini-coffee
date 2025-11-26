import { useEffect, useRef, useState } from 'react';
import './index.css';
import logoKopi from './assets/mini-coffee-logo.png';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, []);

    return (
        <nav className="container mx-auto bg-amber-700 rounded-lg p-4 flex justify-between items-center relative z-20 mt-4">

            {/* --- LOGO --- */}
            <div className="flex items-center">
                <img
                    src={logoKopi}
                    alt="Mini Coffee Logo"
                    className="h-16 w-16 rounded-full object-cover absolute -top-2 left-4 border-4 border-amber-700 shadow-lg"
                />
                <div className="text-white font-bold text-2xl ml-28">
                    Mini Coffee
                </div>
            </div>

            {/* --- MENU WRAPPER --- */}
            <div className="relative" ref={menuRef}>

                {/* --- TOMBOL HAMBURGER DENGAN VISUAL FEEDBACK --- */}
                <div
                    // PERHATIKAN BAGIAN INI:
                    // Kita menggunakan logika ternary ( ? : ) di dalam className
                    className={`cursor-pointer p-2 rounded-md transition-all duration-200 select-none ${
                        isOpen
                            ? 'bg-amber-900 text-amber-100 shadow-inner' // JIKA BUKA: Gelap & Masuk ke dalam
                            : 'text-white hover:bg-amber-600'            // JIKA TUTUP: Biasa
                    }`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="text-3xl block">&#9776;</span>
                </div>

                {/* --- DROPDOWN --- */}
                {isOpen && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl overflow-hidden z-50 origin-top-right animate-fade-in-down">
                        <ul className="text-gray-800 text-sm font-medium">
                            <li className="px-4 py-3 hover:bg-amber-100 cursor-pointer border-b
                            border-gray-100 transition-colors active:bg-amber-200
                                active:text-amber-900"
                                >
                                Home
                            </li>
                            <li className="px-4 py-3 hover:bg-amber-100 cursor-pointer border-b
                            border-gray-100 transition-colors active:bg-amber-200
                                active:text-amber-900">
                                Menu Favorit
                            </li>
                            <li className="px-4 py-3 hover:bg-amber-100 cursor-pointer border-b
                            border-gray-100 transition-colors active:bg-amber-200
                                active:text-amber-900">
                                Lokasi Kami
                            </li>
                            <li className="px-4 py-3 hover:bg-red-50
                            text-red-600 cursor-pointer transition-colors active:bg-amber-200
                                active:text-amber-900">
                                Logout
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default App;