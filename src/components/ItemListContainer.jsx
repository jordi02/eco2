import { useState, useEffect } from "react";
import ItemList from "./Itemlist";
import data from "./utils/data";
import { useParams } from "react-router-dom";
const ItemListContainer = () => {
    const { id } = useParams();
    const [item, setItems] = useState([]);
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve(data), 1000);
    });

    useEffect(() => {
        promise.then((res) => {
            const products = res
            if (id) { setItems(data.filter(product => product.category == id)) }
            else {
                setItems(products)
            }

        });
    }, [id]);
    return (
        <>
            <div className="mt-5">
                <ItemList items={item} />
            </div>
        </>
    );
};


export default ItemListContainer;