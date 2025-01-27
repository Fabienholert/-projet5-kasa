
import {Link} from 'react-router-dom' 
import './erreur404.css'


export default function Error404() {
    return (
        <>

        <h2 >
            404
        </h2>
        <p>
            Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/"> Retournez sur la page d accueil </Link>

        </>
    )
}