import './rating.scss'

const Rating = ({ rating, maxStars = 5 }) => {
    return (
        <div className="fichelogement__rating">
            {[...Array(maxStars)].map((_, index) => (
                <span key={index} className={index < rating ? "red-star" : "gray-star"}>
                    ★
                </span>
            ))}
        </div>
    );
};


export default Rating;