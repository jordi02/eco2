import React from 'react';
const CartItem = ({ item, quantity, removeItem }) => {
    return <div className='flex'>
        {item.title} - ${item.price} - {quantity}
        <button className='bg-primary rounded' onClick={() => removeItem(item.id)}>Eliminar</button>
    </div>;
}

export default CartItem;