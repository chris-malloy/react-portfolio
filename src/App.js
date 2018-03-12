import React, { Component } from 'react';
import './App.css';
import MyNavbar from './components/MyNavbar';
import Header from './components/Header';
import Project from './components/Project';

class App extends Component {
  render() {
    return (
      <div className="blue">
        <MyNavbar />
        <Header />
        <h5 className="center">Projects</h5>
        <Project title="Trackr" href="https://github.com/caseyezimmerman/TrackR" link="Github" description="A React Native App" image="images/trackr-ss.png" />
      </div>
    );
  }
}

export default App;
