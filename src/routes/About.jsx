import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from '../images/girl-gato.jpg';
import './routes.css';
import './about.css';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="welcome"><h1>Faça uma doação para os gatinhos!</h1></div>
                <div className="cont">
                    <div className="image">
                        <img src={Image} className="mg" />
                    </div>
                    <div className="text">
                        <h2>Você pode nos ajudar a cuidar dos gatinhos adotando, divulgando nosso trabalho ou doando produtos,
                            como ração, areia e remédios.</h2>
                        <h2>Tudo o que você precisa saber para adotar e garantir a segurança dos gatinhos!!</h2>
                        <ul>
                        <li><p>Proteger saídas e rotas de fuga</p></li>
                        <li><p>Ter condições financeiras</p></li>
                        <p>Este ponto é de extrema importância para garantir a qualidade de vida do gatinho</p>
                        <li><p>Termo de responsabilidade</p></li>
                        <p>Não é preciso pagar nada para adotar, mas você vai assinar um termo de responsabilidade,
                            comprometendo-se a não doar o resgatinho para terceiros sem consentimento e zelar por sua saúde e segurança.</p>
                        </ul>
                    </div>
                </div>
                <div className="form">

                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About