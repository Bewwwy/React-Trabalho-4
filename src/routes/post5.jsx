import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Mili from '../images/milig.jpg';
import './routes.css';
import './gatos.css'

const Post5 = () => {
    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className="welcome"><h1>Mili</h1></div>
                <div className="miau">
                    <div className="img"><img src={Mili} /></div>
                    <div className="meowinfo">
                        <h2>Fala, humano… Tudo bem?</h2>
                        <p>Me chamo Mili e sou uma gatinha bem legal.
                            Adoro dormir em colinhos humanos e sempre que posso, amasso pãozinho neles.
                            Passei muitos perrengues e não quero nem pensar em ser rejeitada outra vez.
                            Se você estiver disposto a compartilhar a vida todinha comigo,
                            tenha a certeza que seremos muito felizes juntos.</p>
                        <p>Clique em 'Quero Adotar'!</p>
                        <button className="btn_l">Quero Adotar</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Post5