import imageHome from '../../assets/imageHome.jpg'
import './Home.css'

export default function Home () {
    return (
        <>
        <div>
        <img src= {imageHome} alt = 'image en fond d écran représentant des rochers' className='imageHome' />
        <div className='textehome'>
            Chez vous, partout et ailleurs
        </div>
        </div>
        <div>Card</div>

        </>
    )
};


