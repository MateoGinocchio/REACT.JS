import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./Navbar.css"
import LogoOjotas from "./ojotasimpresaslogo.png"


const Navbar = () => {
    return (
        <div className="menuu">
            <div className="headerr">
                <img className="Logo" src={LogoOjotas} alt="" />
            </div>
            <div className="menuNavegable">
                <nav>
                    <ul>
                        <li className="liMenu">
                            <a href="">INICIO</a>
                            <a href="">DISEÑOS</a>
                            <a href="">SOBRE NOSOTROS</a>
                            <a href="">CONTACTO</a>
                            <a href="">CLIENTES</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="cart">
                <CartWidget />
            </div>
        </div>
    )
}

export default Navbar
