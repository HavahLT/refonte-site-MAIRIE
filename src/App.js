import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './composants/header/Header.js';
import Actu from './composants/actu/Actu.js';
import Medias from './composants/medias/Medias.js';
import Footer from './composants/footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Actu />
        <Medias />
        <Footer />
      </div>
    );
  }
}

export default App;
