import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import '../../styles/App.css';
import UrlShortener from '../../containers/UrlShortener';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <UrlShortener title="Generate a short url" />
      </div>
    );
  }
}

export default App;
