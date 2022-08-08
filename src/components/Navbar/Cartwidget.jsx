import { Link } from "react-router-dom";

const CartWidget = () => {
    const url =
        "https://www.nicepng.com/png/full/231-2317477_clip-art-black-and-white-stock-shopping-clip.png";

    return (
        <>
            <Link to="/cart">
                <img style={{ width: 40 }} src={url} />
            </Link>
        </>
    );
};

export default CartWidget;