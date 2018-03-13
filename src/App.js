import React from 'react';
import './App.css';
import Title from './components/Title';
import MyNavbar from './components/MyNavbar';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className="blue">
      <MyNavbar />
      <div className="container">
        <Header />
        <Title id="projects" title="Projects" />
        <Projects />
        <Title id="skills" title="Skills" />
        <Skills />
      </div>
    </div>
  );
}

export default App;
