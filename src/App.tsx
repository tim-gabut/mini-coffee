import  {useState} from 'react';
import './index.css'

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu=()=>{
        setIsOpen(!isOpen)
    }

  return (
      <nav className="bg-white shadow-md fixed w-full z-10 top-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">

                  {/* --- Bagian 1: Logo & Nama --- */}
                  <div className="flex items-center gap-2">
                      {/* Placeholder Logo (Lingkaran Biru) */}
                      <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                          L
                      </div>
                      <span className="font-bold text-xl text-gray-800 tracking-tight">
              BrandName
            </span>
                  </div>

                  {/* --- Bagian 2: Menu Strip 3 (Hamburger Button) --- */}
                  <div className="flex">
                      <button
                          onClick={toggleMenu}
                          type="button"
                          className="text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition duration-150 ease-in-out"
                          aria-label="Toggle menu"
                      >
                          {/* Icon SVG untuk Hamburger / X (Close) */}
                          {!isOpen ? (
                              // Icon Garis 3 (Hamburger)
                              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                              </svg>
                          ) : (
                              // Icon Silang (Close)
                              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                          )}
                      </button>
                  </div>
              </div>
          </div>

          {/* --- Bagian 3: Isi Menu (Dropdown) --- */}
          {/* Logic: Jika isOpen true, tampilkan div ini. Jika false, sembunyikan (hidden) */}
          <div className={`${isOpen ? 'block' : 'hidden'} bg-gray-50 shadow-inner`}>
              <div className="px-4 pt-2 pb-4 space-y-2">
                  {/* Link About Us */}
                  <a
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  >
                      About Us
                  </a>

                  {/* Tombol Login (Belum ada fungsi, hanya UI) */}
                  <button
                      className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 mt-4"
                  >
                      Login
                  </button>
              </div>
          </div>
      </nav>
  )
}

export default App
