import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Lisa from '../images/lisag.jpg';
import './routes.css';
import './gatos.css'

const Post1 = () => {
    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className="welcome"><h1>Lisa</h1></div>
                <div className="miau">
                    <div className="img"><img src={Lisa} /></div>
                    <div className="meowinfo">
                        <h2>Olá, tudo bem? Sou a Lisa, prazer em te conhecer!</h2>
                        <p>Como podem perceber, sou uma gatinha elegante e adoro vestir roupinhas no inverno.
                            Elas me aquecem e me sinto protegida.
                            Estou procurando o humano da minha vida para compartilhar muito amor e alegrias com ele.
                            Que tal vir me conhecer e me levar contigo?</p>
                        <p>Clique em 'Quero Adotar'!</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Post1