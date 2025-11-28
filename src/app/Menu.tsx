import '../index.css';
import images from '../assets/Americano.jpg';

export default function Menu() {
    const menus = [
        {title:"Americano", price:"20k", image:images},
        {title:"Cappuccino", price:"20k", image:images},
        {title:"Espresso", price:"15k", image:images},
        {title:"French Fries", price:"15k", image:images},
        {title:"French Fries", price:"15k", image:images},
        {title:"French Fries", price:"15k", image:images},
        {title:"French Fries", price:"15k", image:images},
        {title:"French Fries", price:"15k", image:images},
    ]

    return (
        <div className="container mx-auto px-4 py-8">

            {/* 1. PEMBUNGKUS UTAMA (ROW) HARUS DI LUAR MAP */}
            {/* Ini yang membuat item bisa berjejer ke samping */}
            <div className="flex flex-wrap -mx-3">

                {menus.map((item, index) => (
                    // 2. ITEM (COLUMN)
                    // Class width (w-full, lg:w-1/4) disimpan di sini
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-3 mb-6">

                        {/* 3. CARD UTAMA (Satu kesatuan) */}
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition h-full flex flex-col overflow-hidden">

                            {/* Bagian Gambar */}
                            <div className="h-48 bg-gray-200 w-full overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Bagian Konten */}
                            <div className="flex flex-col flex-1 p-4">
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-500 mb-4 flex-1">
                                    Deskripsi makanan yang lezat dan menggugah selera ini sangat cocok untuk makan siang...
                                </p>

                                {/* Harga & Tombol */}
                                <div className="mt-auto flex justify-between items-center pt-3 border-t border-gray-100">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400">Harga</span>
                                        <span className="font-bold text-orange-600">{item.price}</span>
                                    </div>
                                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm transition">
                                        Pesan
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Akhir Card */}

                    </div>
                ))}
            </div>
            {/* Akhir Flex Row */}
        </div>
    )
}