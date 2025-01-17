import {Link} from 'react-router-dom' 
import Logor from '../../assets/Logorouge.png'


export default function Header () {
    return (
        <div className='Header'>
            <img src= {Logor} alt = 'logo Kasa en rouge' className='logo-rouge' />
            <nav>
                <ul>
                    <li><Link to="Home"> Accueil </Link></li>
                    <li><Link to="Apropos"> A Propos </Link></li>
                </ul>
            </nav>

        </div>
    )
}