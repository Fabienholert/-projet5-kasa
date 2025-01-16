import {Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home';
import APropos from './pages/APropos';
import Erreur404 from './pages/Erreur404';
import FicheLogement from './pages/FicheLogement';

function App(){
  return (
  <Router>
    <Routes>
      <Route path="pages/..." element={<Home />} />
      <Route path="pages/..." element={<APropos />} />
      <Route path="/pages/.../" element={<Erreur404 />} />
      <Route path="pages/..." element={<FicheLogement />} />
    </Routes>,
    </Router>
  )
}
export default App