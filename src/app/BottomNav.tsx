
// 1. Kita definisikan tipe data khusus agar tidak salah ketik string
export type TabView = 'menu' | 'cart';

// 2. Interface Props: Data yang wajib dikirim oleh Parent ke komponen ini
interface BottomNavProps {
    activeTab: TabView;                   // Tab mana yang sedang aktif?
    onTabChange: (tab: TabView) => void;  // Fungsi untuk ganti tab
    cartCount?: number;                   // (Opsional) Jumlah angka di badge merah
}

export default function BottomNav({ activeTab, onTabChange, cartCount = 0 }: BottomNavProps) {
    return (
        // CONTAINER UTAMA (Fixed di Bawah)
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">

            {/* WRAPPER KONTEN (Agar rapi di tengah) */}
            <div className="flex justify-around items-center h-16 max-w-lg mx-auto">

                {/* === TOMBOL 1: MENU === */}
                <button
                    onClick={() => onTabChange('menu')}
                    className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors duration-200 ${
                        activeTab === 'menu' ? 'text-orange-600' : 'text-gray-400 hover:text-gray-500'
                    }`}
                >
                    {/* Icon Menu (Grid) */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <span className="text-[10px] font-medium">Menu</span>
                </button>

                {/* === TOMBOL 2: KERANJANG === */}
                <button
                    onClick={() => onTabChange('cart')}
                    className={`relative flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors duration-200 ${
                        activeTab === 'cart' ? 'text-orange-600' : 'text-gray-400 hover:text-gray-500'
                    }`}
                >
                    {/* Badge Notifikasi (Hanya muncul jika cartCount > 0) */}
                    {cartCount > 0 && (
                        <div className="absolute top-1 right-8 sm:right-10 transform translate-x-1/2 -translate-y-1/2">
               <span className="flex items-center justify-center bg-red-500 text-white text-[10px] font-bold h-4 w-4 rounded-full ring-2 ring-white">
                 {cartCount}
               </span>
                        </div>
                    )}

                    {/* Icon Keranjang (Cart) */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span className="text-[10px] font-medium">Keranjang</span>
                </button>

            </div>
        </div>
    );
}