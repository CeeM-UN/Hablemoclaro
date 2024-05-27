import React from 'react';
import './Home.css';
import logo from '../Images/Reconociendo_emociones_banner.png'; // Importa la imagen del logo aquí
import background from '../Images/17ib2g.png'

function Home() {
  return (
    <div className="Home">
      <div className="image-container">
        <img src={logo} alt="Imagen reconociendo emociones" className="blog-image" />
        <div className="centered-text">Reconociendo Emociones </div>
      </div>
      
    <div className="cuerpo-blog" style={{ backgroundImage: `url(${background})` }}>
      <div className="text-container">Sabemos que en la adolescencia se experimentan cambios físicos, cognitivos y emocionales significativos. Reconocer y comprender tus propias emociones, así como las de los demás, es crucial para su desarrollo emocional saludable.</div> {/* Nuevo elemento */}
    <div className="text-container">Te dejamos varios tips que te pueden ayudar, no solo en el entorno escolar sino que en cualquier entorno.</div>
    </div>
    </div>
  );
}

export default Home;