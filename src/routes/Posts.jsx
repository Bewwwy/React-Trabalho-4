import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './routes.css';

const Posts = () => {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h1>Posts</h1>
          <Link to="/post1">Lisa</Link>
          <Link to="/post2">Mili</Link>
          <Link to="/post1">Beto</Link>
        </div>
        <Footer />
      </div>
    )
  }
  
  export default Posts