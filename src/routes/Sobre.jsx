import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './routes.css';
import './sobre.css'

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="welcome"><h1>Sobre nós</h1></div>
                <div className="sobre">
                    <p>O principal objetivo da Cats é sensibilizar e espalhar pela sociedade sobre a adoção e posse responsável,
                        por meio de ações efetivas como palestras.</p>
                    <p>Todo nosso trabalho é realizado por uma equipe de voluntários dedicados e
                        dispostos a fazer do mundo um lugar melhor para os nossos amiguinhos.</p>
                    <p>Fazemos a proteção dos gatos de forma diferente! Adote e se encante!</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About