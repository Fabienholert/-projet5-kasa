import {Link} from 'react-router-dom' 
import './erreur404.scss'
import '../../assets/variable.scss'


export default function Error404() {
    return (
        <>

        <h2 className='error__title'>
            404
        </h2>
        <p className='error__text'>
            Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className='error__link'> Retournez sur la page d accueil </Link>

        </>
    )
}