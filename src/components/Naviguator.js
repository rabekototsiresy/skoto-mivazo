import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import "../style/SCSS/Naviguator.scss";

function Naviguator() {
    return (
        <nav className="container-fluid nav">
            <div className="row">
                <div className="col-12 col-x-4">
                    <NavLink exact to="/">Accueil</NavLink>
                    <NavLink to="/listehira">Lisitra Hira</NavLink>
                    <NavLink to="/ny-tontolo-scout">Ny scout sy ny tontolony</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Naviguator

