import React from 'react';
import './Home.css';
import '../Images/imagen-home-2.png';
import logo from '../Images/Reconociendo_emociones_banner.png';
import Ansiedad from "../Images/ansiedad.png";
import DetrasDeCamaras from "../Images/Detrasdecamaras.png";
import Enojo from "../Images/enojo.png";
import Envidia from "../Images/Envidia.png";
import Miedo from "../Images/miedo.png";
import Timidez from "../Images/Timidez.png";
import Tristeza from "../Images/Tristeza.png";
import imagen from '../Images/fondo-home.jpg';
import proximo from '../Images/proximopaso.png';

function SentimientosEnActo() {
return (
    <div className="Home">
    <div className="image-container">
        <img src={logo} alt="Imagen reconociendo emociones" className="blog-image" />
        <div className="centered-text">Sentimientos en Acto </div>
      </div>

      <div className="cuerpo-blog" >
        <div className="text-containerSenacto" >
            <p>Bienvenidos a Sentimientos en Acto, un espacio donde el arte del teatro se entrelaza con la profundidad de nuestras emociones más sinceras en la cotidianidad. Aquí exploramos cómo los sentimientos más intensos y auténticos cobran vida a través de la interpretación teatral.</p>
        </div>
        <p className="p-centrado">¡Acompáñanos en este viaje emocional y descubre la magia de Sentimientos en Acto!</p>
        <div className='espacio'></div>
        <div className="container-ocio">
            <div className='section-ocio'>
            <a href="https://www.youtube.com/watch?v=X-W8TvMWmx8" target="_blank" rel="noopener noreferrer">
            <div><img src={Tristeza} alt="Tristeza" className="imagenes-inicio"></img></div>
            <h3 >
                Tristeza
            </h3>
            </a>
            <p>Los estudiantes deciden plasmar la emoción de tristeza por medio de situaciones familiares cotidianas, a través de una compañía amistosa, también dieron solución a la misma.</p>
            </div>
            <div className='section-ocio'>
            <a href="https://www.youtube.com/watch?v=eOsdDViI4Rs" target="_blank" rel="noopener noreferrer">
            <div><img src={Miedo} alt="Miedo" className="imagenes-inicio"></img></div>
            <h3>Miedo</h3>
            </a>
            <p>En esta dramatización lo que los estudiantes deciden plasmar es el miedo que poseen al exponer un caso hipotético a través de una perdida amistosa.</p>
            </div>
            <div className='section-ocio'>
            <a href="https://www.youtube.com/watch?v=oJ6JTGUqXEY" target="_blank" rel="noopener noreferrer">
            <div><img src={Envidia} alt="Envidia" className="imagenes-inicio"></img></div>
            <h3>Envidia</h3>
            </a>
            <p>En esta dramatización la emoción de la envidia es plasmada, no por el protagonista, por el contrario, por los antagonistas, pues no aguantan ver a un pobre pero feliz.</p>
            </div>
            <div className='section-ocio'>
            <a href="https://www.youtube.com/watch?v=yJ8qirkzTAY" target="_blank" rel="noopener noreferrer">
            <div><img src={Timidez} alt="Timidez" className="imagenes-inicio"></img></div>
            <h3>Timidez</h3>
            </a>
            <p>A partir de una situación no muy lejana del contexto escolar, se dramatiza la timidez, pues usualmente todos queremos tener un romance adolescente, ¿no?</p>
            </div>
            <div className='section-ocio'>
            <a href="https://www.youtube.com/watch?v=YS9BlCow-60" target="_blank" rel="noopener noreferrer">
            <div><img src={Ansiedad} alt="Ansiedad" className="imagenes-inicio"></img></div>
            <h3>Ansiedad</h3>
            </a>
            <p>La dramatización de estas estudiantes efectivamente muestran el cómo la ansiedad atormenta a las personas sin diferenciar espacios, personas ni lugares, sin embargo, reflejan también una posible solución, si quieres saber cuál es te invito a mirar el videoclip.</p>
            </div>
            <div className='section-ocio'>
            <a href="https://www.youtube.com/watch?v=fpBStf7yREM" target="_blank" rel="noopener noreferrer">
            <div><img src={Enojo} alt="enojo" className="imagenes-inicio"></img></div>
            <h3>Enojo</h3>
            </a>
            <p>Con algo de timidez las estudiantes más introvertidas del grupo deciden hacer la dramatización del enojo y como se ve en entornos escolares.</p>
            </div>
        </div>
        <div className='sectionSEA '>
        <a href="https://www.youtube.com/watch?v=fpBStf7yREM" target="_blank" rel="noopener noreferrer">
        <h1>Detrás de Cámaras</h1>
        <div className="contact-line2" ></div>
        <div className='espacio'><img src={DetrasDeCamaras} alt="Detras camaras" className="imagenes-inicio"></img></div>
        </a>
        </div>
        
      </div>
      <div className="cuerpo-blogn" style={{ backgroundImage: `url(${imagen})` }}>
            <div className='container-ocio'>
                <div className='section-ocio'>
                    <div><img src={proximo} alt="proximo paso" className="imagenes-inicio"></img></div>
                </div>
                <div className='section-SEA'>
                    <div className="text-container3">Emoti y sus desenfrenadas emociones</div>
                    <div className="contact-line2" ></div>
                    <h4>Parte final</h4>
                    <p>Invitamos a todos nuestros visitantes a dejar volar su imaginación y crear su propio final para la historia. Sumérgete en el Valle de las Emociones y ayuda a Emoti a encontrar la llave de la felicidad, o crea un desenlace completamente nuevo y sorpréndenos.</p>
                    <p className='p-centrado'>¡Deja que tu imaginación brille y crea un final inolvidable para "Emoti y sus desenfrenadas emociones"! </p>
                    <button className="button2">crear final</button> {/* Botón centrado */}
                </div>
            </div>
    
        </div>
    </div>
);
}

export default SentimientosEnActo;