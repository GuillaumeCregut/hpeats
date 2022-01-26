import { Link } from 'react-router-dom';
import './MealCard.css';


const MealCards = ({ mealCard }) => {

    return (
        <div className='MealCards'>
            <div className='meal-container'>
                <Link to={{ pathname: `/mealInfos/${mealCard.id}` }}>
                    <img className="mealImage" src={mealCard.picture} alt={mealCard.name} />
                </Link>
                <div className='meal-desc'>
                    <h2>{mealCard.name} : {mealCard.price}<i className="fab fa-d-and-d fa-1x MoneyIcon"></i></h2>
                </div>
            </div>
        </div>
    )
}

export default MealCards
