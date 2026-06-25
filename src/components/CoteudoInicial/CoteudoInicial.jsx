import React from 'react'
import Navbar from '../Navbar/Navbar'

const CoteudoInicial = ({ col }) => {
    return (
        <div className={`col-12 col-md-${col}`}>
            <Navbar />
            {/* divApresentacao */}
            <div>
                <div>
                    <p>Texto apresentação</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default CoteudoInicial
