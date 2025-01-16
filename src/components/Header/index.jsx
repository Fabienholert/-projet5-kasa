import {Link} from 'react-router-dom' 


export default function Header () {
    return (
        <div className='Header'>
            <h1>Kasa</h1>
            <nav>
                <ul>
                    <li><Link to="Home"> Accueil </Link></li>
                    <li><Link to="Apropos"> A Propos </Link></li>
                </ul>
            </nav>

        </div>
    )
}