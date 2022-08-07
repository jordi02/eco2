import { useState, useEffect } from "react";
import ItemList from "./Itemlist";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore"
const ItemListContainer = () => {
    const { id } = useParams();
    const [item, setItems] = useState([]);
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        getDocs(itemsCollection).then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setItems(data);

        })
            ;
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