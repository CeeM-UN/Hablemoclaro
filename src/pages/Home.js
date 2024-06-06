import React from 'react';
import './Home.css';
import logo from '../Images/imagenlogo.png'; // Importa la imagen del logo aquí
import background from '../Images/17ib2g.png'
import imagen from '../Images/fondo-home.jpg';
import '../Images/imagen-home-2.png';
import rosado from '../Images/monstritorosa.png';
import rojo from '../Images/monstritorojo.png';
import arcoiris from '../Images/monstrito arcoiris.png';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="Home">
      <div className="image-container">
        <img src={logo} alt="Imagen del blog" className="blog-image" />
        <div className="centered-text">¡Bienvenido a Hablemos Claro!</div>
      </div>

      <div className="cuerpo-blog" style={{ backgroundImage: `url(${background})` }}>
      <div className="text-container">Aquí encontrarás diferentes actividades que como estudiantes de comunicación social, de sexto semestre de la universidad Santo Tomás, hemos venido realizando en conjunto con los estudiantes del grado 11 del colegio Antonio García I.E.D de Ciudad Bolívar, localidad número 19 del Distrito Capital de Bogotá ubicada en el sur de la ciudad; con el fin de explorar los profundos mares de emociones  del mundo interno que navegamos como personas. </div> {/* Nuevo elemento */}
      <div className="cuerpo-blogn" style={{ backgroundImage: `url(${imagen})` }}>
      <div className="centered-text1">Emoti y sus desenfrenadas emociones</div> {/* Nuevo elemento */}
      <div className="contact-line"></div> {/* Línea centrada debajo del texto */}
      <div className="blank"></div> {/* Línea centrada debajo del texto */}
      <div className="text-container">
      <div className="responsive-iframe-container">
        <iframe src="https://www.youtube.com/embed/9SlTy3yARaQ?si=wURIlTxF7_6ciPw2" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      </div>
      <div className="blank"></div> {/* Línea centrada debajo del texto */}
      <button className="button">Para continuar viendo la historia de Emoti da click aquí!</button> {/* Botón centrado */}
      </div>
    </div>

    <div className="background-container">
  <div className="centered-text1">¡Esto te va a interesar!</div>
</div>


{/*referencia para no perderme */}

<div className="cuerpo-blog" style={{ backgroundImage: `url(${background})` }}>
        <div class="container-nuestroescenario">

        <div class="section-nuestroescenario">
            <Link to="/podcast" style={{ textDecoration: 'none' }}> 
                <img src={rosado} alt="video diario" className="imagenes-inicio"></img>
                <h2>Podcast</h2>
            </Link>
            <div className="contact-line2"></div>
        </div>
        <div class="section-nuestroescenario">
        <Link to="/musica" style={{ textDecoration: 'none' }}>
        <img src={arcoiris} alt="valle miniatura" className="imagenes-inicio" ></img>
            <h2>Música</h2>
        </Link>
            <div className="contact-line2"></div>
        </div>
        <div class="section-nuestroescenario">
        <Link to="/nuestro-escenario" style={{ textDecoration: 'none' }}>
        <img src={rojo} alt="fotogaleria" className="imagenes-inicio"></img>
            <h2>Nuestro escenario</h2>
        </Link>
            <div className="contact-line2"></div>
        </div>
        <div className="blank"></div> {/* Línea centrada debajo del texto */}<div className="blank"></div> {/* Línea centrada debajo del texto */}

        </div>
      </div>

    </div>

    );
    }


export default Home;