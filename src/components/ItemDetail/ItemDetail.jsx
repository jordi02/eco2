import { useState, useContext } from "react";
import ItemCount from "../Item/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import "./itemDetail.css"
const ItemDetail = ({ item }) => {
  const { setCartItems } = useContext(CartContext);
  const [amount, setAmount] = useState(0);
  const { title, price, stock, pictureUrl, detail   } = item;
  const onAdd = (amount) => {
    setAmount(amount);
    setCartItems((prevState) => [...prevState, { item, quantity: amount }]);
  };
  return (
    <div className="card-class" style={{ width: "20rem" }}>
      <img className="card-img-top" src={pictureUrl} alt="Card image cap" />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{`${stock} Disponibles!`}</p>
        <p className="card-text">{`${detail}`}</p>

      </div>
      {amount == 0 && <ItemCount stock={stock} initial={0} onAdd={onAdd} />}
      <div className="d-flex justify-content-center my-3">
        <Link to="/cart/">
          <button className="btn btn-dark">Ir al carrito</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;