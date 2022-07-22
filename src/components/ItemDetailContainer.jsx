import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import data from "./utils/data";
import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [item, setItems] = useState([]);
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve(data), 2000);
    });

    useEffect(() => {
        setLoading(true);
        promise.then((response) => {
            const foundItem = response.filter((item) => item.id == id);
            setItems(foundItem[0]);
            setLoading(false);
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