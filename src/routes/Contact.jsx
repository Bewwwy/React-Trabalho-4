import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../images/banner.jpg';
import './routes.css';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Contact Cats - Adoção de gatinhos</h1>
        <img src={Banner} alt="banner"></img>
        <h3>Interessados entrar em contato :</h3>
        <p>E-mail: contato@cats.org.br</p>
        <p>ingridcavalli@gmail.com</p>
        <p>isabelaguessi@gmail.com</p>
        <p>adryelly@gmail.com</p>
        <p>gabrielpinheiro@gmail.com</p>
        <p>Biel@gmail.com</p>
      </div>
    <Footer />
    </div>
  )
}

export default Contact