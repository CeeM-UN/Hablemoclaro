import React from 'react';
import './Home.css';

import background from '../Images/17ib2g.png';
import micro from '../Images/micro.png';
import book from '../Images/book.png';
import movie from '../Images/movie.png';
import musica from '../Images/musica.png';
import pacman from '../Images/pacman.png';


function Home() {
  return (
    <div className="Home">
      <div className="cuerpo-blog" style={{ backgroundImage: `url(${background})` }}>
        <div class="hola"><h1>Rincón del Ocio</h1>
        <div className="contact-line2"></div>
        </div>
        <div class="container-ocio">
        <div class="section-ocio">
            <div class="icon-ocio"><img src={pacman} alt="micro" className="iconos"></img></div>
            <h2>Mundo Arcade</h2>
            <p>Descubre un mundo de entretenimiento sin límites en nuestra sección de juegos! Aquí encontrarás variedad de juegos para todas las edades y gustos.</p>
        </div>
        <div class="section-ocio">
            <div class="icon-ocio"><img src={musica} alt="micro" className="iconos"></img></div>
            <h2>Notas Mágicas</h2>
            <p>La música tiene un poder único para transformar nuestras emociones y transportarnos a un estado de relajación profunda...</p>
        </div>
        <div class="section-ocio">
            <div class="icon-ocio"><img src={movie} alt="micro" className="iconos"></img></div>
            <h2>MovieManía</h2>
            <p>En nuestra sección de películas, te invitamos a explorar una colección seleccionada de películas que promueven el respeto...</p>
        </div>
        <div class="section-ocio">
            <div class="icon-ocio"><img src={book} alt="micro" className="iconos"></img></div>
            <h2>Jardín Literario</h2>
            <p>En esta sección, te invitamos a descubrir una colección de libros seleccionados que promueven valores esenciales...</p>
        </div>
        <div class="section-ocio">
            <div class="icon-ocio"><img src={micro} alt="micro" className="iconos"></img></div>
            <h2>Valle de Charlas</h2>
            <p>Te invitamos a explorar nuestra colección de podcasts dedicados a fomentar el respeto y el manejo de las emociones. En un mundo donde las interacciones diarias pueden ser desafiantes, estos podcasts ofrecen herramientas y perspectivas valiosas para ayudarte a navegar las complejidades emocionales de la vida y cultivar relaciones más respetuosas y empáticas.</p>
        </div>
    </div>
      </div>
    </div>
  );
}

export default Home;