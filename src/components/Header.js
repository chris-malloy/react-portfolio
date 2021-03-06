import React from 'react';
import '../stylesheets/Header.css';

const Header = () => {
  return (
    <div className="center" id="hero"> 
      <img className="profile-picture" src="images/profile-picture-headshot.jpeg" alt="profile" />
      <h3>Imagination meets Technicality</h3>
    </div>
  )
}

export default Header;