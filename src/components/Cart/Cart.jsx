import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { itemsCarrito, removeItem, clear, totalPrice } = useContext(Context)
    const total = totalPrice()
    return (
        <>
            {itemsCarrito.length === 0 ? (
                <>
                    <a class="nav-link" href="/">No hay productos! Agrega alguno</a>
                </>
            ) : (
                <>
                    {itemsCarrito.map((element) => (
                        <CartItem item={element.item} quantity={element.quantity} removeItem={removeItem} />
                    ))}
                    <button className="bg-red-500 p-2 " onClick={() => clear()}>
                        Vaciar carrito
                    </button>
                    <h1>El total de la compra es de : {total}</h1>
                </>
            )}
        </>
    );
};
export default Cart;