import React from 'react'
import { Link } from 'react-router-dom'
import fotoPerfil from './foto_200.png'

const Perfil = ({ col }) => {
    return (
        <div className={`col-12 col-md-${col}`}>
            <img src={fotoPerfil} className='rounded-circle' />
            <div>
                <Link to="/" className="btn btn-secondary">
                    <i className="fa-solid fa-gamepad fa-sm"></i> {" "}
                    gamedev
                </Link>
                <Link to="/" className="btn btn-primary">
                    <i className="fa-solid fa-code fa-sm"></i> {" "}
                    webdev
                </Link>
                <Link to="/" className="btn btn-info text-white">
                    <i className="fa-solid fa-book fa-sm"></i> {" "}
                    writing
                </Link>
            </div>
        </div>
    )
}

export default Perfil
