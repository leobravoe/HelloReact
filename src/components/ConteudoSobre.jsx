import React from 'react'
import Navbar from './Navbar'

const ConteudoSobre = ({col}) => {
    return (
        <div className={`col-12 col-md-${col}`}>
            <Navbar />
            {/* divApresentacao */}
            <div>
                <div>
                    <p>Texto Sobre</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default ConteudoSobre
