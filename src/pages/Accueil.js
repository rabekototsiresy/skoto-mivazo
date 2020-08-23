import React from 'react'
import Banniere from '../components/Banniere'
import Naviguator from '../components/Naviguator'
import NavBar from '../components/NavBar'

function Accueil() {
    return (
        <div>
            <Naviguator/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <NavBar/>
                    </div>
                    <div className="col-lg-8">
                        <Banniere/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accueil
