import { useState, useEffect } from "react";
import ItemList from "../ItemList/Itemlist";
import { useParams } from "react-router-dom";

import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection).then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }));
      if (category)
      {setItems(data.filter((item) => item.category === category))
      setLoading(false);
    return;}
      setItems(data);
      console.log(data)
      console.log(category)
      setLoading(false);
    });
  }, [category]);

  return (
    <>
      <div className="mt-5">
        <ItemList items={items} />
      </div>
    </>
  );
};

export default ItemListContainer;