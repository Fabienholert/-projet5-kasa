import {NavLink} from 'react-router-dom' 
import Logor from '../../assets/Logorouge.png'
import './header.scss'


export default function Header () {
    return (
        <header className='header'>
            <img src= {Logor} alt = 'logo Kasa en rouge' className='header__logo' />
            <nav className='header__link'>
                    <NavLink to="/"> Accueil </NavLink>
                    <NavLink to="/Apropos"> A Propos </NavLink>      
            </nav>

        </header>
    )
}