const CartWidget = () => {
    const url =
        "https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg";

    return (
        <>
            <a className="text-decoration-none" href="/cart/">
                <img style={{ width: 40 }} src={url} />
            </a>
        </>
    );
};

export default CartWidget;