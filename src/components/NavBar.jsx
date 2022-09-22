import CartWidget from "./CartWidget";
import React from "react";
import { Link } from "react-router-dom"



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
                                <Link to="/category/:id">
                                    <p className="nav-link">Kayaks</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link" href="#">Accesorios</p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link" href="#">Nosotros</p>
                            </li>
                            {/* Nota: puedo agregar una api de clima y agregar una seccion mas */}

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <div>
                    <CartWidget />
                </div>
            </nav>
        </>
    );
}
export default Navbar;