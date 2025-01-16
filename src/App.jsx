import {Router, Route, Routes } from 'react-router-dom'
import Home from '../src/components/pages/Home/index';
import Apropos from '../src/components/pages/Apropos/index';
import Erreur404 from '../src/components/pages/Erreur404/index';
import Fichelogement from '../src/components/pages/Fichelogement/index';

export default function App(){
  return (
    <div className='App'>
  <Router>
    <Routes>
      <Route path="pages/..." element={<Home />} />
      <Route path="pages/..." element={<Apropos />} />
      <Route path="/pages/.../" element={<Erreur404 />} />
      <Route path="pages/..." element={<Fichelogement />} />
    </Routes>
    </Router>
    </div>
  )
}
