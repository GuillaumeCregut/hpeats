import { Link } from 'react-router-dom';
import './MealCard.css';

const MealCards = ({ mealCard, handleClick }) => {

    return (
        <div className='MealCards'>
            <div className='meal-container'>
                <img className="mealImage" src={mealCard.picture} alt={mealCard.name} onClick={handleClick(mealCard.id)} />
                <h2>{mealCard.name}</h2>
                <h3><span>Tarif:  </span>{mealCard.price}<i className="fab fa-d-and-d fa-1x MoneyIcon"></i></h3>
            </div>
        </div>
    )
}

export default MealCards
