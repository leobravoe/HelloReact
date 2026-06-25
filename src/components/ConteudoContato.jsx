import React from 'react'
import Navbar from './Navbar'

const ConteudoContato = ({col}) => {
    return (
        <div className={`col-12 col-md-${col}`}>
            <Navbar />
            {/* divApresentacao */}
            <div>
                <div>
                    <p>Texto contato</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default ConteudoContato
