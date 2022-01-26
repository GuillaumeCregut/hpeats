import { Link } from 'react-router-dom';
import './MealCard.css';

const MealCards = ({ mealCard, toggle }) => {
    const handleClick = () => {
        toggle(mealCard.id);
    }
    return (
        <div className='MealCards'>
            <div className='meal-container'>
                {/* <Link to={{ pathname: `/mealInfos/${mealCard.id}` }}>
                    <img className="mealImage" src={mealCard.picture} alt={mealCard.name} />
                </Link> */}
                <img className="mealImage" src={mealCard.picture} alt={mealCard.name} onClick={handleClick} />
                <h2>{mealCard.name}</h2>
                <h3><span>Tarif:  </span>{mealCard.price}<i className="fab fa-d-and-d fa-1x MoneyIcon"></i></h3>
            </div>
        </div>
    )
}

export default MealCards

