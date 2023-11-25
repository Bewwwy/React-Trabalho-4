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
        <div className="welcome"><h1>Conheça os gatinhos que estão em adoção!</h1></div>
        <div className="posts">
          <div className="post">
            <Link to="/post1"><div className="gato"><img src={Lisa} /></div><p>Lisa</p></Link>
          </div>
          <div className="post">
            <Link to="/post2"><div className="gato"><img src={Beto} /></div><p>Beto</p></Link>
          </div>
          <div className="post">
            <Link to="/post3"><div className="gato"><img src={Cintia} /></div><p>Cintia</p></Link>
          </div>
          <div className="post">
            <Link to="/post4"><div className="gato"><img src={Eder} /></div><p>Eder</p></Link>
          </div>
          <div className="post">
            <Link to="/post5"><div className="gato"><img src={Mili} /></div><p>Mili</p></Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Posts