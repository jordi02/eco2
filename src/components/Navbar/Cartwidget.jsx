import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";



const CartWidget = () => {
    const { cartItems } = useContext(CartContext);
    const url =
        "https://www.nicepng.com/png/full/231-2317477_clip-art-black-and-white-stock-shopping-clip.png";

    return (
        <>
            <Link to="/cart">
                <img style={{ width: 40 }} src={url} />
                <span className="ps-2 ">{cartItems.length}</span>
            </Link>
        </>
    );
};

export default CartWidget;