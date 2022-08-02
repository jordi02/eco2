import React, { useContext } from "react";
import { Context } from "./CartContext";
import CartItem from "./CartItem";

const Cart = () => {
    const { itemsCarrito, removeItem, clear } = useContext(Context)
    return <>{itemsCarrito.map(element => <CartItem item={element.item} quantity={element.quantity} removeItem={removeItem} />)}
        <button onClick={() => clear()}>Vaciar Carrito</button>
    </>
}

export default Cart;