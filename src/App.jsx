// import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/main';
import PoliticaPrivacidad from './components/PoliticaPrivacidad'; // la nueva página

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
      </Routes>
    </Router>
  );
}

export default App;

