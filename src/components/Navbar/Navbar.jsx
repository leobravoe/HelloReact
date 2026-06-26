import React from 'react'
import { Link } from 'react-router-dom'
import SwithTheme from '../SwitchTheme/SwithTheme'

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Início</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
            <SwithTheme />
        </nav>
    )
}

export default Navbar
