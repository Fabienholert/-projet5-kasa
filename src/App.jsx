import {Router, Route, Routes } from 'react-router-dom'
import Home from '../src/components/pages/Home/index';
import Apropos from '../src/components/pages/Apropos/index';
import Erreur404 from '../src/components/pages/Erreur404/index';
import FicheLogement from '../src/components/pages/FicheLogement/index';

export default function App(){
  return (
  <Router>
    <Routes>
      <Route path="pages/..." element={<Home />} />
      <Route path="pages/..." element={<Apropos />} />
      <Route path="/pages/.../" element={<Erreur404 />} />
      <Route path="pages/..." element={<FicheLogement />} />
    </Routes>
    </Router>
  )
}
