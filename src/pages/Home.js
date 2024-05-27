import React from 'react';
import './Home.css';
import logo from '../Images/imagenlogo.png'; // Importa la imagen del logo aquí


function Home() {
  return (
    <div className="Home">
      <div className="image-container">
        <img src={logo} alt="Imagen del blog" className="blog-image" />
        <div className="centered-text">Hablemos Claro</div>
      </div>
      <div className="text-container">Las emociones son los colores que pintan el lienzo de nuestra experiencia humana. Desde la euforia de la felicidad hasta la melancolía de la tristeza, cada emoción teje una narrativa única en el tapiz de nuestras vidas. En este viaje intrincado a través del laberinto de las emociones, exploraremos las profundidades de nuestro mundo interno y descubriremos la riqueza que yace dentro de cada sentimiento.</div> {/* Nuevo elemento */}
      <div className="image-container">
    </div>
  </div>
  );
}

export default Home;