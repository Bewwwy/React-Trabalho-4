import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './routes.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
      <h1>Home</h1>
      </div>
      <Footer />
    </div>
  )
}

export default Home