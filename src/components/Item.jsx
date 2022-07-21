import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    const { title, price, stock, pictureUrl, detail } = item;
    return (
        <div className="card" style={{ width: "15rem" }}>
            <img className="card-img-top" src={pictureUrl} alt="Card image cap" />
            <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{`${stock} Disponibles!`}</p>
                <p className="card-text">{`$${price}`}</p>
                <Link to={"/Item/:id"}> <button className="btn btn-primary ">
                    See product details
                </button></Link>
                <ItemCount />
            </div>
        </div>
    );
};

export default Item;