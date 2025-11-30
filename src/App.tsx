import Search from "./app/Search.tsx";
import SearchByCategory from "./app/SearchByCategory.tsx";
import Menu from "./app/Menu.tsx";
import BottomNav from "./app/BottomNav.tsx";

export default function App(){
    return (
        <>
            <Search/>
            <SearchByCategory/>
            <Menu/>
            <BottomNav />
        </>
    )
}