import React, { Component } from 'react';
import NavBar from './components/organisms/Navbar'
import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      </div>
    );
  }
}

export default App;
