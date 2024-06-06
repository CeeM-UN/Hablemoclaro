import React from 'react';
import './Home.css';
import './NuestroEscenario.css';
import background from '../Images/17ib2g.png';
import fotogaleria from '../Images/fotogaleria.jpeg';
import videoDiario from '../Images/video_diario.jpeg';
import colegio from '../Images/colegio.jpeg';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="Home">
      <div className="cuerpo-blog" style={{ backgroundImage: `url(${background})` }}>
        <div class="hola"><h1>Nuestro escenario</h1>
        <div className="contact-line2"></div>
        </div>
        <div class="container-nuestroescenario">
        <Link to="/videos-diarios" style={{ textDecoration: 'none' }}> 
        <div class="section-nuestroescenario">
            <img src={videoDiario} alt="video diario" className="imagenes-nuestroescenario"></img>
            <h2>Videos Diarios</h2>
            <div className="contact-line2"></div>
            <p>En esta sección puedes conocer un poco del proyecto y actividades que se realizaron, fortalezas, trabajo en equipo y también frustraciones.</p>
        </div>
        </Link>
        <Link to="/valle-en-miniatura" style={{ textDecoration: 'none' }}>
        <div class="section-nuestroescenario">
        <img src={colegio} alt="valle miniatura" className="imagenes-nuestroescenario" ></img>
            <h2>Valle en miniatura</h2>
            <div className="contact-line2"></div>
            <p>Te invitamos a explorar nuestro cortometraje, sumergirte en las diversas historias que en las que naufragamos a lo largo del proyecto donde nos transportamos a mundos fascinantes y emocionantes.</p>
        </div>
        </Link>
        <Link to="/fotogaleria" style={{ textDecoration: 'none' }}>
        <div class="section-nuestroescenario">
        <img src={fotogaleria} alt="fotogaleria" className="imagenes-nuestroescenario"></img>
            <h2>Fotogalería</h2>
            <div className="contact-line2"></div>
            <p>Cada fotografía cuenta una historia única, invitándote a reflexionar, imaginar y emocionarte mientras te sumerges en los detalles y las narrativas visuales que se despliegan ante ti. </p>
        </div>
        </Link>
        </div>
        
      </div>
    </div>
  );
}

export default Home;