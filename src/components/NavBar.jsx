import CartWidget from "./CartWidget";
import React from "react";
import { Link } from "react-router-dom"


// Navbar and links to ech sections
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link to="/">
                        <p className="navbar-brand" href="#">DeKayaks</p>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link to="/">
                                    <p className="nav-link active">Inicio
                                        <span className="visually-hidden">(current)</span>
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/category/1">
                                    <p className="nav-link">Kayaks</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/category/2">
                                <p className="nav-link" href="#">Accesorios</p>
                                </Link>
                            </li>

                            <li className="nav-item">
                            <Link to="/category/3">
                                <p className="nav-link" href="#">Chalecos</p>
                                </Link>
                            </li>
                            {/* Nota: puedo agregar una api de clima y agregar una seccion mas */}

                        </ul>
                    </div>
                </div>
                <div>
                    <Link to="/Cart"><CartWidget/></Link>
                </div>
            </nav>
        </>
    );
}
export default Navbar;