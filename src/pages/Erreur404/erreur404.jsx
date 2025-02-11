import {Link} from 'react-router-dom' 
import './erreur404.scss'


export default function Error404() {
    return (
        <div className='error'>

        <h2 className='error__title'>
            404
        </h2>
        <p className='error__text'>
            <span>Oups! La page que </span> <span> vous demandez n&apos;existe pas.</span>
        </p>
        <Link to="/" className='error__link'> Retournez sur la page d accueil </Link>
        </div>
    )
}