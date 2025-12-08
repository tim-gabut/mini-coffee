import images from "../assets/Americano.jpg";

export interface MenuItem {
    id: number;
    menuName: string;
    price: number;
    image: string;
    description: string;
}

export const menus: MenuItem[] = [
    {id:1,menuName: "Americano", price: 12000, image: images, description: "Kopi atau Makanan ini enak sekali"},
    {id:2,menuName: "Cappuccino", price: 20000, image: images, description: "Kopi atau Makanan ini enak sekali"},
    {id:3,menuName: "Espresso", price: 10000, image: images, description: "Kopi atau Makanan ini enak sekali"},
    {id:4,menuName: "French Fries", price: 25000, image: images, description: "Kopi atau Makanan ini enak sekali"},
    {id:5,menuName: "Mocha chino", price: 21000, image: images, description: "Kopi atau Makanan ini enak sekali"},
    {id:6,menuName: "V60", price: 30000, image: images, description: "Kopi atau Makanan ini enak sekali"},
    {id:7,menuName: "Japanese", price: 35000, image: images, description: "Kopi atau Makanan ini enak sekali"},
    {id:8,menuName: "Mineral Water", price: 5000, image: images, description: "Kopi atau Makanan ini enak sekali"},
    {id:9,menuName: "Long Black", price: 15000, image: images, description: "Kopi atau Makanan ini enak sekali"},
    {id:10,menuName: "Real Coffee", price: 27000, image: images, description: "Kopi atau Makanan ini enak sekali"},
    {id:11,menuName: "Sprite", price: 8000, image: images, description: "Kopi atau Makanan ini enak sekali"},
    {id:12,menuName: "Rice Bowl", price: 35000, image: images, description: "Kopi atau Makanan ini enak sekali"}

]