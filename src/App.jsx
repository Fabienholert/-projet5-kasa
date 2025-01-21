import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout'
import Home from './pages/Home/index';
import Apropos from './pages/Apropos/index';
import Erreur404 from './pages/Erreur404/index';
import Fichelogement from './pages/Fichelogement/index';

export default function App(){
  return (
    <div className='App'>
  <BrowserRouter>
    <Routes>
      <Route path ="/" element= {<Layout/>}>
        <Route index element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Fichelogement" element={<Fichelogement />} />
        <Route path="*" element={<Erreur404 />} />
      </Route>    
    </Routes>
    </BrowserRouter>
    </div>
  );
}
