import React from 'react'

function AffichageParole(props) {
    let {titre,auteur,refrain,parole} = props.donnee
    return (
        <div>
            <p>titre : {titre}</p>
            <p>auteur : {auteur}</p>
            <p>refrain : {refrain}</p>
            <p>parole : {parole[0]}</p>
            
        </div>
    )
}

export default AffichageParole