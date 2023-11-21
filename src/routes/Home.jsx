import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Images from '../images/banner.jpg';
import './routes.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Home</h1>
        <img src={Images}/>
        <p>Como atuamos:</p>
<p>A Cats já atendeu mais de 6.500 gatos em situação de abandono e baixa qualidade de vida e busca por meio de ações 
  efetivas, como castração solidária, resgates e adoção, contribuir para a construção de um mundo melhor.</p>
  <p>Principal objetivo:</p> 
  <p>Cats vem tentando sensibilizar e espalhar pela sociedade sobre a adoção e posse responsável, por meio de ações 
    efetivas como palestras. Todo nosso trabalho é realizado por uma equipe de voluntários dedicados e dispostos a fazer 
    do mundo um lugar melhor para os nossos amiguinhos. Fazemos a proteção dos gatos de forma diferente! 
    Adote e se encante!</p>
  <p> A Cats Proporciona bem estar e qualidade de vida à maior quantidade possível de gatinhos , conhecendo suas necessidades, respeitando suas particularidades e contribuindo para sua relação com os seres humanos.</p>
      </div>
      <Footer />
    </div>
  )
}

export default Home