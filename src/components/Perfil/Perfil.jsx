import React from 'react'
import fotoPerfil from './foto_200.png'

const Perfil = ({col}) => {
    return (
        <div className={`col-12 col-md-${col}`}>
            <img src={fotoPerfil} className='rounded-circle' />
        </div>
    )
}

export default Perfil
