import React, { Component } from 'react'
import Naviguator from '../components/Naviguator'
import NavBar from '../components/NavBar'
import PageChargement from './PageChargement'
import AffichageParole from '../components/hiraParole/AffichageParole'

class HiraParole extends Component {
    state = {
        data:null,
        idCible:null
    }
    
    Chercher = () => {
        let resultat = this.state.data.find(element => element.id === this.state.idCible);
            this.setState({
                voir:resultat
        })
    }
    
    render() {
        
        if (this.state.data === null) {
            return (
                <div>
                    <Naviguator/>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <NavBar/>
                            </div>
                            <div className="col-lg-8">
                                <div className="container">
                                    <PageChargement/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else{
            let resultat = this.state.data.find(element => element.id === this.state.idCible);
            return (
                <div>
                    <Naviguator/>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <NavBar/>
                            </div>
                            <div className="col-lg-8">
                                <div className="container">
                                    <div className="row">
                                        <AffichageParole donnee= {resultat}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    componentDidMount() {
        let id = this.props.match.params.hiraId ;     
        fetch("http://localhost:80/api/donnees.json")
            .then(res => res.json())
            .then(element => {
                this.setState({
                    data:element,
                    idCible:id,
                })
            })   
    }
}

export default HiraParole


