import {useState} from 'react';
import './index.css'
import logoKopi from './assets/mini-coffee-logo.png';

function App() {


    return (
        <nav className="container mx-auto bg-amber-700 rounded-lg flex">
            <div className="w-14 flex items-center pl-2">
                <img src={logoKopi} className="h-8 w-8 rounded-3xl"/>
            </div>
            <div className="w-64 flex items-center text-white font-bold">
                Mini Coffee
            </div>
            <div className="w-32 flex-1 text-right pr-5">
                <span className="text-white text-3xl ">&#9776;</span>
            </div>
        </nav>

    )
}

export default App
