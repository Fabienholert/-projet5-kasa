import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../src/components/pages/Home/index';
import Apropos from '../src/components/pages/Apropos/index';
import Erreur404 from '../src/components/pages/Erreur404/index';
import Fichelogement from '../src/components/pages/Fichelogement/index';

export default function App(){
  return (
    <div className='App'>
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Apropos" element={<Apropos />} />
      <Route path="*" element={<Erreur404 />} />
      <Route path="/Fichelogement" element={<Fichelogement />} />
    </Routes>
    </Router>
    </div>
  );
}
