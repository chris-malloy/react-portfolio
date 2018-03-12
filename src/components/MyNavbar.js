import React from 'react';
import { Button, Navbar, NavItem, SideNav, SideNavItem } from 'react-materialize';

const MyNavbar = () => {
  return (
    <Navbar brand='Chris Malloy' right>
      <NavItem href='/'>Projects</NavItem>
      <NavItem href='/'>Skills</NavItem>
      <NavItem href='/'>Bio</NavItem>
      <NavItem href='/'>Contact</NavItem>
    </Navbar>
  );
};

export default MyNavbar;