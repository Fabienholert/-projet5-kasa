import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import { Outlet } from "react-router-dom";


export default function Layout (){
  return (
    <>
        <Header/>
      <main>
        <Outlet /> {/* Les routes enfants seront affichées ici */}
      </main>
      <Footer/>
    </>
  );
};