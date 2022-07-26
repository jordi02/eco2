import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";
const ItemDetail = ({ item }) => {
    const { title, price, stock, pictureUrl, detail } = item;
    const [amount, setAmount] = useState(0)
    const onAdd = (amount) => {
        setAmount(amount);
    }
    return (<div>
        <div className="card" style={{ width: "15rem" }}>
            <img className="card-img-top" src={pictureUrl} alt="Card image cap" />
            <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{`${stock} Disponibles!`}</p>
                <p className="card-text">{`$${price}`}</p>
                {amount == 0 ? <ItemCount stock={stock} initial={0} onAdd={onAdd} /> : <h1>{amount} productos agregados al carrito</h1>}
                <div className="d-flex justify-content-center">
                    <Link to="/cart/">
                        <button>Ir al carrito</button>
                    </Link>
                </div>
            </div>
        </div >
        <br />
        <h5 class="border" >{`${detail}`}</h5>
        <br />
    </div>

    );
};

export default ItemDetail;