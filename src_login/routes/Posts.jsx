import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './routes.css';

const Posts = () => {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h1>Posts</h1>
        </div>
        <Footer />
      </div>
    )
  }
  
  export default Posts