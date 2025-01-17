import {Link} from 'react-router-dom' 
import Logorouge from '../../assets/Logorouge'


export default function Header () {
    return (
        <div className='Header'>
            <h1>{Logorouge}</h1>
            <nav>
                <ul>
                    <li><Link to="Home"> Accueil </Link></li>
                    <li><Link to="Apropos"> A Propos </Link></li>
                </ul>
            </nav>

        </div>
    )
}