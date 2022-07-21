import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import data from "./utils/data";
import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItems] = useState([]);
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve(data), 2000);
    });

    useEffect(() => {
        promise.then((res) => {
            const products = res
            if (id) { setItems(data.filter(product => product.id == id)) }
            else {
                setItems(products)
            }

        });
    }, [id]);
    return (
        <>
            <div className="mt-5">
                <ItemDetail item={item} />
            </div>
        </>
    );
};




export default ItemDetailContainer;