import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './routes.css';

const Post2 = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <p>Fala, humano… Tudo bem? 
                    Me chamo Mili e sou uma gatinha bem legal. 
                    Adoro dormir em colinhos humanos e sempre que posso, amasso pãozinho neles. 
                    Passei muitos perrengues e não quero nem pensar em ser rejeitada outra vez. 
                    Se você estiver disposto a compartilhar a vida todinha comigo, 
                    tenha a certeza que seremos muito felizes juntos.</p>
            </div>
            <Footer />
        </div>
    )
}

export default Post2