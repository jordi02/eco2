import CartWidget from "./Cartwidget";
import { Link } from "react-router-dom";
const logo = "https://e7.pngegg.com/pngimages/998/199/png-clipart-chanel-no-5-perfume-fashion-chanel-perfume-fashion.png"



const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <img style={{ width: 40 }} src={logo} />
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/category/mujer">Mujer</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/category/hombre">Hombre</a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;