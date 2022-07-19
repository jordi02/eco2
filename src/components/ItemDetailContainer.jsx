import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import data from "./utils/data";
import ItemList from "./Itemlist";


const ItemDetailContainer = () => {
    const [item, setItems] = useState([]);
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve(data), 2000);
    });

    useEffect(() => {
        promise.then((res) => setItems(data[0]));
    }, []);
    return (
        <>
            <div className="mt-5">
                <ItemDetail item={item} />
            </div>
        </>
    );
};




export default ItemDetailContainer;