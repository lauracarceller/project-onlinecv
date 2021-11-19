import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
    render() {
      return (
        <nav className="main-nav">
            <Link to="/" className="link">Home</Link>
            <Link to="/estudios" className="link">Estudios</Link>
            <Link to="/experiencia" className="link">Experiencia</Link>
            <Link to="/tecnologias" className="link">Tecnologías</Link>
            <Link to="/tecnologias" className="link">Contacto</Link>
        </nav>
      );
    }
  }

export default Nav;