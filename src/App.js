import React from 'react';
import './App.css';
import Title from './components/Title';
import MyNavbar from './components/MyNavbar';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import MyFooter from './components/MyFooter';
import { bio } from './constants/';

const App = () => {
  return (
    <div className="blue darken-4 ">
      <MyNavbar />
      <div className="container">
        <Header />
        <Title id="my-story" title="My Story" />
        <p className="my-story-content">{bio}</p>
        <Title id="projects" title="Projects" />
        <Projects />
        <Title id="skills" title="Skills" />
        <Skills />
        <MyFooter />
      </div>
    </div>
  );
}

export default App;
