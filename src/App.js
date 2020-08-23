import React from 'react';
import {BrowserRouter , Route , Switch } from "react-router-dom"
import "./App.scss";

import Accueil from './pages/Accueil';
import ListeHira from './pages/ListeHira';
import NyTontoloScout from './pages/NyTontoloScout';
import HiraParole from './pages/HiraParole';

//fetch("http://localhost:80/api/donnees.json")
//  .then(res => res.json())
//  .then(data => console.log(data[0]))


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/listehira" component={ListeHira} />
          <Route path="/tononkira/:hiraId" component={HiraParole} />
          <Route path="/ny-tontolo-scout" component={NyTontoloScout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
