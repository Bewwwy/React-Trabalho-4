import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './routes.css';

const Post1 = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <p>Olá, tudo bem? Sou o Lisa, prazer em te conhecer! 
                Como podem perceber, sou um gatinho elegante e adoro vestir roupinhas no inverno. 
                Elas me aquecem e me sinto protegida. 
                Estou procurando o humano da minha vida para compartilhar muito amor e alegrias com ele. 
                Que tal vir me conhecer e me levar contigo? Clique em 'Quero Adotar'!</p>
            </div>
            <Footer />
        </div>
    )
}

export default Post1