import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";


export default function Layout (){
  return (
    <div>
        <header>
        <Header/>
        </header>
      <main>
        <Outlet /> {/* Les routes enfants seront affichées ici */}
      </main>
      <footer>
     <Footer/>
     </footer>
    </div>
  );
};