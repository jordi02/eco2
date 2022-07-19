const ItemDetail = ({ item }) => {
    const { title, price, stock, pictureUrl, detail } = item;
    return (
        <div className="card" style={{ width: "15rem" }}>
            <img className="card-img-top" src={pictureUrl} alt="Card image cap" />
            <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{`${stock} Disponibles!`}</p>
                <p className="card-text">{`$${price}`}</p>
                <p className="card-text">{`${detail}`}</p>
            </div>
        </div>
    );
};

export default ItemDetail;