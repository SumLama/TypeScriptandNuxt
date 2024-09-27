interface Product {
    id: number,
    title: string,
    image: string,
    price: number,
    description: string
}
interface CartItem {
    id: number,
    title: string,
    image: string,
    price: number,
    quantity: number
}
export  type {Product,CartItem}