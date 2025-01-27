import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout'
import Home from './pages/Home/home';
import Apropos from './pages/Apropos/apropos';
import Erreur404 from './pages/Erreur404/erreur404';
import Fichelogement from './pages/Fichelogement/fichelogement';

export default function App(){
  return (
    <div className='App'>
  <BrowserRouter>
    <Routes>
      <Route element= {<Layout/>}>
        <Route path ="/" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Fichelogement" element={<Fichelogement />} />
        <Route path="*" element={<Erreur404 />} />
      </Route>    
    </Routes>
    </BrowserRouter>
    </div>
  );
}
