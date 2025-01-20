import Header from '../../Header/index'
import Footer from '../../Footer/index'
import {Link} from 'react-router-dom' 


export default function Error() {
    return (
        <>
            <Header />
        <div className=''>
            404
        </div>
        <p>
            Oups! La page que vous demandez n existe pas.
        </p>
        <Link to="Home"> Retournez sur la page d accueil </Link>
        <Footer />
        </>
    )
}