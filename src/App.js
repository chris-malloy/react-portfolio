import React, { Component } from 'react';
import './App.css';
import MyNavbar from './components/MyNavbar';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <MyNavbar />
        <Header />
      </div>
    );
  }
}

export default App;
