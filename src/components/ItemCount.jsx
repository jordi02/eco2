import React, { useState } from "react";


function ItemCount() {
    const [count, setCount] = useState(1);
    function sumar() {
        setCount(count + 1)
    };
    function restar() {
        if (count === 1) { setCount(count + 0) }
        else { setCount(count - 1) }
    };
    function cart() {
        alert("Se agregaron " + [count] + "  productos al carrito")
    }

    return (
        <div>
            <button onClick={restar}>-</button>
            <span>{count}</span>
            <button onClick={sumar}>+</button>
            <button onClick={cart}>Agregar al carrito</button>
        </div>
    );
}
export default ItemCount;