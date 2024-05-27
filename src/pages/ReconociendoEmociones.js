import React from 'react';
import './Home.css';
import logo from '../Images/Reconociendo_emociones_banner.png'; // Importa la imagen del logo aquí
import background from '../Images/17ib2g.png';
import flecha_fondo from '../Images/22dpwz.png';
import tc from '../Images/t-c.png';

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
    <img src={flecha_fondo} alt="flecha" className="flecha" />
    <table border="0" className='tablita'>
     <tr>
      <td><h2>Relaciones Interpersonales</h2>La habilidad de reconocer y comprender las emociones de los demás facilita las relaciones interpersonales positivas. Las personas que son capaces de identificar las emociones de sus compañeros pueden establecer relaciones más sólidas y empáticas</td>
      <td><h2>Resolucion de Conflictos</h2>El reconocimiento de emociones es esencial para resolver conflictos de manera constructiva. Las personas que pueden identificar y expresar sus emociones de manera adecuada tienen más probabilidades de encontrar soluciones pacíficas a los conflictos interpersonales.</td>
     </tr>
     <tr>
      <td><h2>Bienestar Mental</h2>La capacidad de reconocer y gestionar las emociones está estrechamente relacionada con el bienestar mental. Las personas que son conscientes de sus propias emociones y saben cómo manejarlas tienen menos probabilidades de experimentar problemas de salud mental como la ansiedad y la depresión. </td>
      <td><h2>Rendimiento Acádemico</h2>Las emociones juegan un papel importante en el rendimiento académico de los estudiantes. Los adolescentes que son capaces de regular sus emociones tienen más probabilidades de mantenerse enfocados y motivados en sus estudios, lo que puede conducir a un mejor desempeño académico. </td>
     </tr>
    </table>
    </div>
    <div className="cuerpo-blog" style={{ backgroundImage: `url(${background})` }}>
    <div class="container">
        <h1>Consejos para el manejo de emociones y el reconocimiento de las mismas</h1>
        <div class="clearfix">
            <div class="column">
                <div class="tip">
                    <h3>1. Atención Plena</h3>
                    <p>Práctica de la atención plena o mindfulness. Esta técnica puede ayudar a estar presentes en el momento actual y a tomar conciencia de sus pensamientos y emociones sin sentirse juzgado.</p>
                </div>
                <div class="tip">
                    <h3>2. Diario de emociones</h3>
                    <p>Llevar un diario de emociones en el que registren cómo te sientes en diferentes momentos del día. Esto te ayudará a identificar patrones emocionales y a comprender mejor tus propias reacciones.</p>
                </div>
                <div class="tip">
                    <h3>3. Identificación de señales físicas</h3>
                    <p>Reconocer las señales físicas que acompañan a diferentes emociones, como el ritmo cardíaco acelerado, la tensión muscular o las sensaciones en el estómago. Estas señales pueden servir como indicadores útiles para identificar qué estás sintiendo.</p>
                </div>
                <div class="tip">
                    <h3>4. Expresión creativa</h3>
                    <p>Fomentar formas creativas de expresión emocional, como el arte, la música, la escritura o el teatro. Estas actividades pueden ayudar a procesar y expresar sus emociones de manera saludable.</p>
                </div>
            </div>
            <div class="column">
                <div class="tip">
                    <h3>5. Pausas antes de reaccionar</h3>
                    <p>Es importante tomar una pausa antes de reaccionar ante una situación emocionalmente cargada. Animarse a tomarse un momento para respirar profundamente y reflexionar sobre tus emociones antes de responder puede ayudarte a evitar reacciones impulsivas.</p>
                </div>
                <div class="tip">
                    <h3>6. Desarrollo de habilidades de comunicación</h3>
                    <p>Desarrollar habilidades de comunicación asertiva para expresar tus emociones de manera clara y respetuosa. Esto te permitirá comunicarte de manera efectiva con los demás y evitar conflictos innecesarios.</p>
                </div>
                <div class="tip">
                    <h3>7. Identificación de desencadenantes</h3>
                    <p>Identificar los desencadenantes que provocan ciertas emociones. Una vez que seas consciente de estos desencadenantes, podrás tomar medidas para evitarlos o manejarlos de manera más efectiva en el futuro.</p>
                </div>
                <div class="tip">
                    <h3>8. Autocompasión</h3>
                    <p>La práctica de la autocompasión es aprender a tratarte a ti mismo con amabilidad y comprensión cuando estás experimentando emociones difíciles.</p>
                </div>
            </div>
        </div>
    </div>

    </div>
    </div>
    
  );
}

export default Home;