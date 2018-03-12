import React from 'react';
import { Navbar, NavItem } from 'react-materialize';

const MyNavbar = () => {
  return (
    <Navbar brand='Chris Malloy' className="blue" right>
      <NavItem href='/'>Projects</NavItem>
      <NavItem href='/'>Skills</NavItem>
      <NavItem href='/'>Bio</NavItem>
      <NavItem href='/'>Contact</NavItem>
    </Navbar>
  );
};

export default MyNavbar;