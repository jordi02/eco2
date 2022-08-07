import CartWidget from "./Cartwidget";
import { Link } from "react-router-dom";
const logo = "https://e7.pngegg.com/pngimages/998/199/png-clipart-chanel-no-5-perfume-fashion-chanel-perfume-fashion.png"



const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img style={{ width: 40 }} src={logo} />
                    <Link className="navbar-brand" to={"/"}>
                        Home
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link
                                style={{ textDecoration: "none", margin: "1rem" }}
                                to={"category/hombre"}
                            >
                                Hombre
                            </Link>
                            <Link
                                style={{ textDecoration: "none", margin: "1rem" }}
                                to={"category/mujer"}
                            >
                                Mujer
                            </Link>
                        </div>
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </>
    );
};

export default NavBar;

