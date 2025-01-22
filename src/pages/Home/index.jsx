import Section from '../../components/Section/section'
import  imageHome from'../../assets/imageHome.jpg'
import './Home.css'
import Card from '../../components/Card/index'

export default function Home () {
    return (
        <>
        <div>
        <Section imgSrc={imageHome} alt="Image de la page d'accueil" />
        <div className='textehome'>
            Chez vous, partout et ailleurs
        </div>
        </div>
        <Card/>

        </>
    )
};


