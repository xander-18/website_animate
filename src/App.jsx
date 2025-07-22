// import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/main';
import PoliticaPrivacidad from './pages/politica-de-privacidad';
import FormularioAsesores from './pages/form-leads';
// import Contacto from './components/Contacto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/asesoria" element={<FormularioAsesores />} />
        <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
        {/* <Route path="/contactanos " element={<Contacto />} /> */}
      </Routes>
    </Router>
  );
}

export default App;


