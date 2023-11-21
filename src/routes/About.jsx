import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from '../images/girl-gato.jpg';
import './routes.css';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Doações</h1>
                <img src={Image}/>
                <p>Faça uma doação para os gatinhos!</p>
                <p>Você pode nos ajudar a cuidar dos gatinhos adotando, divulgando nosso trabalho ou doando produtos, 
                como ração, areia e remédios.</p>
                <br></br>
                <p>Tudo o que você precisa saber para adotar e garantir a segurança dos gatinhos!!</p>
                <p>Proteger saídas e rotas de fuga</p>
                <p>Ter condições financeiras- Este ponto é de extrema importância para garantir a qualidade de vida do gatinho</p>
                <p>Termo de responsabilidade- Não é preciso pagar nada para adotar, mas você vai assinar um termo de responsabilidade, comprometendo-se a não doar o resgatinho para terceiros sem consentimento e zelar por sua saúde e segurança.</p>
            </div>
            <Footer />
        </div>
    )
}

export default About