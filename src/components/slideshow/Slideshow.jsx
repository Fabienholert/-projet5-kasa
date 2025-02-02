import arrowprev from '../../assets/arrowprev.png'
import arrownext from '../../assets/arrownext.png'
import {useState} from "react"


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
            <div className="slideshow-content">
                {images && images.length > 0 ? (
                    <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className='carroussel'/>
                ) : (
                    <p>Aucune image disponible</p>
                )}
            </div>
            {images && images.length > 1 && (
            <div className="slideshow-controls">
                <button onClick={handlePrev}><img src= {arrowprev}/></button>
                <button onClick={handleNext}><img src= {arrownext}/></button>
            </div>
            )}
        </div>
    );
}