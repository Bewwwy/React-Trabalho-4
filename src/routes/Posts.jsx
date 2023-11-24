import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Lisa from '../images/lisa.jpg';
import Mili from '../images/mili.jpg';
import Beto from '../images/beto.jpg';
import Cintia from '../images/cintia.jpg';
import Eder from '../images/eder.jpg';
import './posts.css';

import { Link } from 'react-router-dom';
import './routes.css';

const Posts = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Posts</h1>
        <div className="posts">
          <div className="post">
            <Link to="/post1"><img src={Lisa} /><p>Lisa</p></Link>
          </div>
          <div className="post">
            <Link to="/post2"><img src={Beto} /><p>Beto</p></Link>
          </div>
          <div className="post">
            <Link to="/post3"><img src={Cintia} /><p>Cintia</p></Link>
          </div>
          <div className="post">
            <Link to="/post4"><img src={Eder} /><p>Eder</p></Link>
          </div>
          <div className="post">
            <Link to="/post5"><img src={Mili} /><p>Mili</p></Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Posts