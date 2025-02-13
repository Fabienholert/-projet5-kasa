import arrowprev from '../../assets/arrowprev.png'
import arrownext from '../../assets/arrownext.png'
import {useState} from "react"
import './slideshow.scss'


export default function Slideshow({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="slideshow">
            <div className="slideshow__content">
                {images && images.length > 0 ? (
                    <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className='carroussel'/>
                ) : (
                    <p>Aucune image disponible</p>
                )}
            </div>
            {images.length > 1 && (
                            <div className="slideshow__counter">
                                {currentIndex + 1} / {images.length}
                            </div>
                        )}
            {images.length > 1 && (
            <div className="slideshow__controls">
                <button onClick={handlePrev}><img src= {arrowprev} alt='précédent'/></button>
                <button onClick={handleNext}><img src= {arrownext} alt='suivant'/></button>
            </div>
            )}
        </div>
    );
}