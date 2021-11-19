import React from 'react';
import Nav from '../Nav/Nav';
import './Header.css';


const Header = () => (
  <header className="header">
    <Nav />
    <div className="contlogo">
      <img className="logo" alt="foto logo" src="/Images/logo.png"/>
    </div>
  </header>
  )

export default Header;