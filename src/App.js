import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

// Importando tus componentes de página
import Home from './pages/Home';
import NuestroEscenario from './pages/NuestroEscenario';
import ReconociendoEmociones from './pages/ReconociendoEmociones';
import RinconOcio from './pages/RinconOcio';

import Podcast from './pages/Podcast';
import Musica from './pages/Musica';
import MundoArcade from './pages/MundoArcade';
import NotasMagicas from './pages/NotasMagicas';
import Moviemania from './pages/Moviemania';
import JardinLiterario from './pages/JardinLiterario';
import ValledeCharlas from './pages/ValledeCharlas';
import VideosDiarios from './pages/VideosDiarios';
import ValleEnMiniatura from './pages/ValleEnMiniatura';
import Fotogaleria from './pages/Fotogaleria';
import SentimientosEnActo from './pages/SentimientosEnActo';
import footer from './Images/footer.png';


//commit test

// Importando los estilos
import './pages/Home.css';
import './pages/NuestroEscenario.css';
import './pages/ReconociendoEmociones.css';
import './pages/RinconOcio.css';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2>Hablemos Claro</h2>


        <nav>
          <ul className='barra-navegacion'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/reconociendo-emociones">Reconociendo Emociones</Link></li>
            <li><Link to="/sentimientos-en-acto">Sentimientos en acto</Link></li>
            <li><Link to="/rincon-ocio">Rincón de Ocio</Link></li>
            <li><Link to="/nuestro-escenario">Nuestro Escenario</Link></li>
          </ul>
        </nav>
        
      
    </header>

    

    {/* Aquí es donde se renderizarán tus componentes de página */}
    <Route path="/" exact component={Home} />
    <Route path="/reconociendo-emociones" component={ReconociendoEmociones} />
    <Route path="/sentimientos-en-acto" component={SentimientosEnActo} />
    <Route path="/rincon-ocio" component={RinconOcio} />
    <Route path="/nuestro-escenario" component={NuestroEscenario} />
    <Route path="/podcast" component={Podcast} /> {/* Agrega la ruta para el componente Podcast */}
    <Route path="/musica" component={Musica} /> {/* Agrega la ruta para el componente Musica */}
    <Route path="/mundo-arcade" component={MundoArcade} /> {/* Agrega la ruta para el componente ReconociendoEmociones */}
    <Route path="/notas-magicas" component={NotasMagicas} /> {/* Agrega la ruta para el componente NuestroEscenario */}
    <Route path="/moviemania" component={Moviemania} /> {/* Agrega la ruta para el componente RinconOcio */}
    <Route path="/jardin-literario" component={JardinLiterario} /> {/* Agrega la ruta para el componente Podcast */}
    <Route path="/valle-de-charlas" component={ValledeCharlas} /> {/* Agrega la ruta para el componente Musica */}
    <Route path="/videos-diarios" component={VideosDiarios} /> {/* Agrega la ruta para el componente VideosDiarios */}
    <Route path="/valle-en-miniatura" component={ValleEnMiniatura} /> {/* Agrega la ruta para el componente ValleEnMiniatura */}
    <Route path="/fotogaleria" component={Fotogaleria} /> {/* Agrega la ruta para el componente Fotogaleria */}

  </div>
  <footer>
    <div className="cuerpo-blog" style={{ backgroundImage: `url(${footer})` }}>
    <div className='footer'><p>© 2024 Proyecto USTA. Luna Nicolle Corpus Gomez - Vannesa Ortega - Yulixa Yuliana Ruiz Rubio.</p>
    <p>Universidad Santo Tomás, Estudiantes de Comunicación Social</p>
    </div>
    </div>
    </footer>
</Router> 
  );
}

export default App;