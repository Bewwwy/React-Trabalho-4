import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './routes.css';

const Post3 = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <p>Eu fui salvo durante a desapropriação de uma unidade da Sabesp, 
                    aquele lugar que oferece água… 
                    Agora, estou esperando a família que vai me adotar, me amar e me encher de mimos. 
                    E sabe, não quero muita coisa não… Água fresca, sachês e uma caminha quentinha me deixarão super feliz! 
                    Você só precisa vir me conhecer e preencher a minha ficha de adoção. 
                    Tenho certeza que vamos formar uma família incrível!</p>
            </div>
            <Footer />
        </div>
    )
}

export default Post3