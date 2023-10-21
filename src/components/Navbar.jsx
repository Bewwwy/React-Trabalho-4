import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contato</Link>       
    </nav>
  )
}
export default Navbar