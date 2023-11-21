import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Lisa from '../images/lisa.jpg';
import Mili from '../images/mili.jpg';
import Beto from '../images/beto.jpg';
import Cintia from '../images/cintia.jpg';
import Eder from '../images/eder.jpg';

import { Link } from 'react-router-dom';
import './routes.css';

const Posts = () => {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h1>Posts</h1>
          <Link to="/post1">Lisa <img src={Lisa}/> </Link>
          <Link to="/post2">Beto <img src={Beto}/></Link>
          <Link to="/post3">Cintia <img src={Cintia}/></Link>
          <Link to="/post4">Eder <img src={Eder}/></Link>
          <Link to="/post5">Mili <img src={Mili}/></Link>
        </div>
        <Footer />
      </div>
    )
  }
  
  export default Posts