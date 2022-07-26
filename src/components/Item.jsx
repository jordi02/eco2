import { Link } from 'react-router-dom';
const Item = ({ item }) => {
    const { title, price, stock, pictureUrl, detail, id } = item;
    return (
        <div className="card" style={{ width: "15rem" }}>
            <img className="card-img-top" src={pictureUrl} alt="Card image cap" />
            <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{`${stock} Disponibles!`}</p>
                <p className="card-text">{`$${price}`}</p>
                <div className='d-flex justify-content-center'>
                    <Link to={`/item/${id}`}> <button className="btn btn-info">
                        See product details
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Item;