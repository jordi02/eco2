import { useState, useEffect } from "react";
import ItemList from "./Itemlist";
import data from "./utils/data";

const ItemListContainer = () => {
    const [item, setItems] = useState([]);
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve(data), 2000);
    });

    useEffect(() => {
        promise.then((res) => setItems(data));
    }, []);
    return (
        <>
            <div className="mt-5">
                <ItemList items={item} />
            </div>
        </>
    );
};


export default ItemListContainer;