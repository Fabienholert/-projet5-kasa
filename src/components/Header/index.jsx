import {NavLink} from 'react-router-dom' 
import Logor from '../../assets/Logorouge.png'
import './header.css'


export default function Header () {
    return (
        <div className='Header'>
            <img src= {Logor} alt = 'logo Kasa en rouge' className='logo-rouge' />
            <nav>
                    <NavLink to="/"> Accueil </NavLink>
                    <NavLink to="/Apropos"> A Propos </NavLink>      
            </nav>

        </div>
    )
}