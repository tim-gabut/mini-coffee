import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import Navbar from './app/Navbar.tsx'
import Search from './app/Search.tsx'
import './index.css'
import SearchByCategory from "./app/SearchByCategory.tsx";
import Menu from "./app/Menu.tsx";
import BottomNav, { type TabView } from "./app/BottomNav.tsx";


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Navbar/>
        <Search/>
        <SearchByCategory/>
        <Menu/>
        <BottomNav activeTab={"menu"} onTabChange={function(tab: TabView): void {
            throw new Error("Function not implemented.")
        } }/>
    </StrictMode>
)


