
import {Link} from 'react-router-dom' 


export default function Error404() {
    return (
        <>

        <div className=''>
            404
        </div>
        <p>
            Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/"> Retournez sur la page d accueil </Link>

        </>
    )
}