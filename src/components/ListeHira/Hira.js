import React from 'react'
import "../../style/components/Hira.scss";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'


function Hira(props) {
    let hira = props.hira;
    return (
        <>
            {
                hira.map((element,id) => {
                    return (
                        <div 
                            className="col-lg-4 hira"
                            key={id}
                        >
                            {element.titre} => {element.auteur}
                            <NavLink to={"/tononkira/"+id} >
                                <button className="btn btn-danger">Hijery</button>
                            </NavLink>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Hira;