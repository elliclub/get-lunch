import React, { Component } from 'react';
import NavBar from './components/organisms/Navbar'
import Recipes from './components/organisms/Recipes'
import Button from './components/atoms/button'

import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="columns">
          <div className="column is-two-thirds">
            <Recipes />
          </div>
          <div className="column">
            <Button className="column" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
