import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './routes.css';

const Post4 = () => {
    return (
        <div>
            <Navbar />
            <div className='container'>
                <p>Meu nome é Eder, e sou esse frajolão único, com pelinhos semi-longos, e uns bigodinhos brancos
                     beeem compridos, para enfeitar ainda mais meu rosto!</p>
                    <p> Eu fui encontrado na rua, como tantos outros de meus amigatos, mas em condição pior... meu canino 
                     estava fraturado, e meu olho chegou totalmente infeccionado. Não se sabe se fui atropelado, 
                     se apanhei, mas felizmente sobrevivi, e então cheguei aqui na Cats.  
                     Não sei se vão me escolher, afinal, me falta um olhinho, né! Mas sou legal, gosto de pessoas, 
                     gosto de gatos, então espero que minha vida seja boa daqui em diante, com um sofá onde eu possa 
                     me esparramar, e que me deixe sonhar com anos e anos de amor e carinho! Clique em 'Quero Adotar'!</p>
            </div>
            <Footer />
        </div>
    )
}

export default Post4