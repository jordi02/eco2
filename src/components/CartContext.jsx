import { createContext, useState } from "react"; export const Context = createContext();

const CartContext = ({ children }) => {
    const [itemsCarrito, setItemCarrito] = useState([]);

    const addItem = (item, quantity) => {
        const newItem = isInCart(item);
        if (newItem) {
            quantity = quantity + newItem.quantity
            setItemCarrito(itemsCarrito.splice(itemsCarrito.findIndex(element => element.item.id === item.id), 1))
        }
        setItemCarrito([...itemsCarrito, { item, quantity }])
    }

    const isInCart = (item) => {
        return itemsCarrito.find((element) => element.item === item)
    }

    const clear = () => {
        setItemCarrito([])
    }

    const removeItem = (itemId) => {
        setItemCarrito(itemsCarrito.filter(element => element.item.id != itemId))
    }

    const totalPrice = () => {
        return itemsCarrito.reduce(
            (valorAnterior, valorActual) => valorAnterior + valorActual.item.price * valorActual.quantity, 0)
    }

    return <Context.Provider value={{ itemsCarrito, addItem, removeItem, clear, totalPrice }}>{children}</Context.Provider>
}

export default CartContext