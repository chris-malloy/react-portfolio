import React from 'react';
import { Navbar, NavItem } from 'react-materialize';

const MyNavbar = () => {
  const navOptions = {
    closeOnClick: true,
    draggable: true
  }
  return (
    <Navbar brand='Chris Malloy' className="blue darken-4" options={navOptions} right fixed>
      <NavItem href='/#projects'>Projects</NavItem>
      <NavItem href='/#skills'>Skills</NavItem>
      <NavItem href='/#my-story'>My Story</NavItem>
      <NavItem href='/#contact'>Contact</NavItem>
      <NavItem href='https://drive.google.com/file/d/1BizyCBAZIJnNmVx91TeZkArLDSdVSN6l/view?usp=sharing'>Resume</NavItem>
    </Navbar>
  );
};

export default MyNavbar;