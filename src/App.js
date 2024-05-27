import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

// Importando tus componentes de página
import Home from './pages/Home';
import NuestroEscenario from './pages/NuestroEscenario';
import ReconociendoEmociones from './pages/ReconociendoEmociones';
import RinconOcio from './pages/RinconOcio';
import imagen from './Images/fondo-home.jpg';


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
          <ul className='barra-navegacion' style={{ display: 'flex', gap: '10px' }}>
            <li><Link to="/">inicio</Link></li>
            <li><Link to="/reconociendo-emociones">Reconociendo Emociones</Link></li>
            <li><Link to="/rincon-ocio">Rincón de Ocio</Link></li>
            <li><Link to="/nuestro-escenario">Nuestro Escenario</Link></li>
          </ul>
        </nav>
      
    </header>

    

    {/* Aquí es donde se renderizarán tus componentes de página */}
    <Route path="/" exact component={Home} />
    <Route path="/nuestro-escenario" component={NuestroEscenario} />
    <Route path="/reconociendo-emociones" component={ReconociendoEmociones} />
    <Route path="/rincon-ocio" component={RinconOcio} />
  </div>
  <footer>
    <div className="cuerpo-blog" style={{ backgroundImage: `url(${imagen})` }}>
    <div className='footer'><p>© 2024 Proyecto USTA. Luna Nicolle Corpus Gomez - Vannesa Ortega - Yulixa Yuliana Ruiz Rubio.</p>
    <p>Universidad Santo Tomás, Estudiantes de Comunicación Social</p>
    </div>
    </div>
    </footer>
</Router> 
  );
}

export default App;