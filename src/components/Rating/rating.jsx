import './rating.scss'

const Rating = ({ rating, maxStars = 5 }) => {
    return (
        <div className="fichelogement__rating">
            {"★".repeat(rating) + "☆".repeat(maxStars - rating)}
        </div>
    );
};

export default Rating;