import React from 'react'


function AffichageParole(props) {
    let {titre,auteur,refrain,parole} = props.donnee
    
    return (
        <div>
            <p>titre : {titre}</p>
            <p>auteur : {auteur}</p>
            <p>refrain : {refrain}</p>
            {
                parole.map(element => {
                    
                    return (
                        <div>
                        {
                            element.map(e => {
                                return <p>{e}</p>
                            })
                        }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AffichageParole