import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Imagess from '../images/patas-gatos.jpg';
import './routes.css';
import './contact.css'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="welcome"><h1>Entre em contato conosco!</h1></div>
        <img src={Imagess} className='toq' />
        <div className="contatos">
          <h2>Cats - Adoção de gatinhos</h2>
          <p>E-mail: contato@cats.org.br</p>
          <h2>Interessados entrar em contato:</h2>
          <p>ingridcavalli@gmail.com</p>
          <p>isabelaguessi@gmail.com</p>
          <p>adryelly@gmail.com</p>
          <p>gabrielpinheiro@gmail.com</p>
          <p>Biel@gmail.com</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact