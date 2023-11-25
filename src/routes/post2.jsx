import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Beto from '../images/betog.jpg';
import './routes.css';
import './gatos.css'

const Post2 = () => {
    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className="welcome"><h1>Beto</h1></div>
                <div className="miau">
                    <div className="img"><img src={Beto} /></div>
                    <div className="meowinfo">
                        <h2>Olá, Meu nome é Beto!</h2>
                        <p>Eu fui salvo durante a desapropriação de uma unidade da Sabesp,
                            aquele lugar que oferece água…
                            Agora, estou esperando a família que vai me adotar, me amar e me encher de mimos.
                            E sabe, não quero muita coisa não… Água fresca, sachês e uma caminha quentinha me deixarão super feliz!
                            Você só precisa vir me conhecer e preencher a minha ficha de adoção.
                            Tenho certeza que vamos formar uma família incrível!</p>
                        <p>Clique em 'Quero Adotar'!</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Post2