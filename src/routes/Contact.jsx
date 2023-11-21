import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Imagess from '../images/patas-gatos.jpg';
import './routes.css';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Contato</h1>
        <img src={Imagess}/>
        <center>
        <p>Cats - Adoção de gatinhos</p>
        <p>E-mail: contato@cats.org.br</p>
        <p>Interessados entrar em contato :
            ingridcavalli@gmail.com<br></br>
            isabelaguessi@gmail.com<br></br>
            adryelly@gmail.com<br></br>
            gabrielpinheiro@gmail.com<br></br>
            Biel@gmail.com<br></br>
          </p>
        </center>
        {/* acho q o contato no meio ficaria legal */}
      </div>
      <Footer />
    </div>
  )
}

export default Contact