import {Link} from 'react-router-dom' 
import Logor from '../../assets/Logorouge.png'
import '../../styles/header.css'


export default function Header () {
    return (
        <div className='Header'>
            <img src= {Logor} alt = 'logo Kasa en rouge' className='logo-rouge' />
            <nav>
                    <Link to="Home"> Accueil </Link>
                    <Link to="Apropos"> A Propos </Link>      
            </nav>

        </div>
    )
}