import React, { Component } from 'react';
import './App.css';
import MyNavbar from './components/MyNavbar';
import Header from './components/Header';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div className="blue">
        <MyNavbar />
        <div className="container">
          <Header />
          <h5 className="center">Projects</h5>
          <Projects />
        </div>
      </div>
    );
  }
}

export default App;
