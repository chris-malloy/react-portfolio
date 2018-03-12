import React from 'react';
import { Navbar, NavItem } from 'react-materialize';

const MyNavbar = () => {
  return (
    <Navbar brand='Chris Malloy' className="blue" right>
      <NavItem href='/#Projects'>Projects</NavItem>
      <NavItem href='/'>Skills</NavItem>
      <NavItem href='/'>Bio</NavItem>
      <NavItem href='/'>Contact</NavItem>
      <NavItem href='images/chris-malloy-resume-main.pdf'>Resume</NavItem>
    </Navbar>
  );
};

export default MyNavbar;