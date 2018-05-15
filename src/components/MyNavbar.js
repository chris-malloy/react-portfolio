import React from 'react';
import { Navbar, NavItem } from 'react-materialize';

const MyNavbar = () => {
  return (
    <Navbar brand='Chris Malloy' fixed={true} className="blue darken-4" right>
      <NavItem href='/#projects'>Projects</NavItem>
      <NavItem href='/#skills'>Skills</NavItem>
      <NavItem href='/#my-story'>My Story</NavItem>
      <NavItem href='/#contact'>Contact</NavItem>
      <NavItem href='https://drive.google.com/file/d/1BizyCBAZIJnNmVx91TeZkArLDSdVSN6l/view?usp=sharing'>Resume</NavItem>
    </Navbar>
  );
};

export default MyNavbar;