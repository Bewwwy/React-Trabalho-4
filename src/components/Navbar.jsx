import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/gatologo.png';
import './navbar.css';
const Navbar = () => {
  return (
    <nav className='nav'>
      <Link to="/home"><img src={Logo} alt="logo"/></Link>
      <ul className='lista'>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/about">Doações</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/contact">Contato</Link></li>
      </ul>       
    </nav>
  )
}
export default Navbar