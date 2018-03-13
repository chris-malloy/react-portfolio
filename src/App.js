import React, { Component } from 'react';
import './App.css';
import MyNavbar from './components/MyNavbar';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';

class App extends Component {
  render() {
    return (
      <div className="blue">
        <MyNavbar />
        <div className="container">
          <Header />
          <a id="projects">
            <h5 className="center white-text title">Projects</h5>
          </a>
          <Projects />
          <a id="projects">
            <h5 className="center white-text title">Skills</h5>
          </a>
          <Skills />
        </div>
      </div>
    );
  }
}

export default App;
