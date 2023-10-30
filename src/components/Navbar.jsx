import React from 'react';
import { Link } from 'react-router-dom';
import logo  from '../images/logo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
        <Link to="/home"><img src={logo} alt="logo"></img></Link>
        <Link to="/home">Home</Link>
        <Link to="/">Login</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/contact">Contato</Link>       
    </nav>
  )
}
export default Navbar