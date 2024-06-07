import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

// Importando tus componentes de página
import Home from './pages/Home';
import NuestroEscenario from './pages/NuestroEscenario';
import ReconociendoEmociones from './pages/ReconociendoEmociones';
import RinconOcio from './pages/RinconOcio';
<<<<<<< Updated upstream
=======
import imagen from './Images/fondo-home.jpg';
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
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

>>>>>>> Stashed changes


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
          <ul style={{ display: 'flex', gap: '10px' }}>
            <li><Link to="/">inicio</Link></li>
            <li><Link to="/nuestro-escenario">Nuestro Escenario</Link></li>
            <li><Link to="/reconociendo-emociones">Reconociendo Emociones</Link></li>
            <li><Link to="/rincon-ocio">Rincón de Ocio</Link></li>
          </ul>
        </nav>
      
    </header>

    {/* Aquí es donde se renderizarán tus componentes de página */}
    <Route path="/" exact component={Home} />
    <Route path="/nuestro-escenario" component={NuestroEscenario} />
    <Route path="/reconociendo-emociones" component={ReconociendoEmociones} />
    <Route path="/rincon-ocio" component={RinconOcio} />
  </div>
<<<<<<< Updated upstream
=======
  <footer>
    <div className="cuerpo-blog" style={{ backgroundImage: `url(${imagen})` }}>
      <div className='footer'><p>© 2024 Proyecto USTA. Luna Nicolle Corpus Gomez - Vannesa Ortega - Yulixa Yuliana Ruiz Rubio - Lauren Sofia Leon</p>
      <p>Universidad Santo Tomás, Estudiantes de Comunicación Social</p>
      <div className="social-icons">

      </div>

      </div>
      
    </div>

    </footer>
>>>>>>> Stashed changes
</Router> 
  );
}

export default App;