// import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/main';
import PoliticaPrivacidad from './pages/politica-de-privacidad';

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

