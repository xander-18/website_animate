// import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/main';
import PoliticaPrivacidad from './pages/politica-de-privacidad';
import FormularioAsesores from './pages/form-leads';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/asesoria" element={<FormularioAsesores />} />
        <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
      </Routes>
    </Router>
  );
}

export default App;


