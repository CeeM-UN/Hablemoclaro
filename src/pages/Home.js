import React from 'react';
import './Home.css';
import logo from '../Images/imagenlogo.png'; // Importa la imagen del logo aquí
import background from '../Images/17ib2g.png'
import imagen from '../Images/fondo-home.jpg';
import '../Images/imagen-home-2.png';
import rosado from '../Images/monstritorosa.png';
import rojo from '../Images/monstritorojo.png';
import arcoiris from '../Images/monstrito arcoiris.png';

function Home() {
  return (
    <div className="Home">
      <div className="image-container">
        <img src={logo} alt="Imagen del blog" className="blog-image" />
        <div className="centered-text">Hablemos Claro</div>
      </div>

      <div className="cuerpo-blog" style={{ backgroundImage: `url(${background})` }}>
      <div className="text-container">Las emociones son los colores que pintan el lienzo de nuestra experiencia humana. Desde la euforia de la felicidad hasta la melancolía de la tristeza, cada emoción teje una narrativa única en el tapiz de nuestras vidas. En este viaje intrincado a través del laberinto de las emociones, exploraremos las profundidades de nuestro mundo interno y descubriremos la riqueza que yace dentro de cada sentimiento.</div> {/* Nuevo elemento */}

    </div>
    <div className="cuerpo-blogn" style={{ backgroundImage: `url(${imagen})` }}>
      <div className="text-container2">Emoti y sus desenfrenadas emociones</div> {/* Nuevo elemento */}
      <div className="contact-line"></div> {/* Línea centrada debajo del texto */}
      <div className="blank"></div> {/* Línea centrada debajo del texto */}
      <iframe width="560" height="315" src="https://www.youtube.com/embed/9SlTy3yARaQ?si=wURIlTxF7_6ciPw2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <div className="blank"></div> {/* Línea centrada debajo del texto */}
      <button className="button">Para continuar viendo la historia de Emoti da click aquí!</button> {/* Botón centrado */}
    </div>
    <div className="background-container">
  <div className="centered-text1">¡Esto te va a interesar!</div>
</div>


{/*referencia para no perderme */}

<div className="cuerpo-blog" style={{ backgroundImage: `url(${background})` }}>
        <div class="container-nuestroescenario">

        <div class="section-nuestroescenario">
            <img src={rosado} alt="video diario" className="imagenes-inicio"></img>
            <h2>Podcast</h2>
            <div className="contact-line2"></div>
        </div>
        <div class="section-nuestroescenario">
        <img src={arcoiris} alt="valle miniatura" className="imagenes-inicio" ></img>
            <h2>Música</h2>
            <div className="contact-line2"></div>
        </div>
        <div class="section-nuestroescenario">
        <img src={rojo} alt="fotogaleria" className="imagenes-inicio"></img>
            <h2>Nuestro escenario</h2>
            <div className="contact-line2"></div>
        </div>
        </div>
      </div>

    </div>

    );
    }


export default Home;