import React from 'react';
import '../stylesheets/Header.css';

const Header = () => {
  return (
    <div className="center blue"> 
      <img className="profile-picture" src="images/profile-picture-headshot.jpeg" alt="profile" />
      <h3 className="white-text">Imagination meets Technicality</h3>
    </div>
  )
}

export default Header;