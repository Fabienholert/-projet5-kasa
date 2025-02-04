import {NavLink} from 'react-router-dom' 
import Logor from '../../assets/Logorouge.png'
import './header.scss'


export default function Header () {
    return (
        <header className='header'>
            <img src= {Logor} alt = 'logo Kasa en rouge' className='header__logo' />
            <nav className='header__nav'>
                    <NavLink to="/" className='header__link'> Accueil </NavLink>
                    <NavLink to="/Apropos" className='header__link'> A Propos </NavLink>      
            </nav>

        </header>
    )
}