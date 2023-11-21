import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './routes.css';

const Post3 = () => {
    return (
        <div>
            <Navbar />
            <div className='c'>
                <p>Meu nome é Cíntia e sou uma menina extremamente pacífica e gentil.</p>
                <p>Quando a tia que nos resgatou insistia em levar ração para a casa, o rapaz às vezes impedia meu 
                    filhote de comer e batia nele ou em mim. 
                    E, apesar de tudo isso, Abel e eu resistimos. 
                    Apesar de tudo, ainda gosto de pessoas, adoro carinho, colo, e 
                    sou mesmo uma moça bem boazinha. Meu sonho é ser adotada com meu filho, a
                     quem sou apegada e me dou muito bem, mas, se não der para nossa família nos receber juntos, 
                     peço que me apresente ao pet da casa com calma, e vai dar tudo certo  Clique em ‘Quero Adotar’!</p>
            </div>
            <Footer />
        </div>
    )
}

export default Post3