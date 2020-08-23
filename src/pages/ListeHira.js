import Naviguator from '../components/Naviguator'
import NavBar from '../components/NavBar'

import React, { Component } from 'react'
import Hira from '../components/ListeHira/Hira';
import PageChargement from './PageChargement';

class ListeHira extends Component {
    state = {
        data:null
    };

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
                                        <Hira hira={this.state.data} />
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
        fetch("http://localhost:80/api/donnees.json")
          .then(res => res.json())
          .then(element => {
              this.setState({
                 data:element
             })
        })
    }
}
export default ListeHira