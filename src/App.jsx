import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../src/components/pages/Home/index';
import Apropos from '../src/components/pages/Apropos/index';
import Erreur404 from '../src/components/pages/Erreur404/index';
import Fichelogement from '../src/components/pages/Fichelogement/index';
import Header from './components/Header/index'
import Footer from './components/Footer/index'


export default function App(){
  return (
    <div className='App'>
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Apropos" element={<Apropos />} />
      <Route path="/Fichelogement" element={<Fichelogement />} />
      <Route path="*" element={<Erreur404 />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}
