import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Início</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
        </nav>
    )
}

export default Navbar
