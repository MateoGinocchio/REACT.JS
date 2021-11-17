import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="menuu">
            <div className="headerr">
                <h1>OJOTAS IMPRESAS</h1>
            </div>
            <div>
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
        </div>
    )
}

export default Navbar
