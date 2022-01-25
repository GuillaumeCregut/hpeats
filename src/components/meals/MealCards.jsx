import { Link } from 'react-router-dom';
import './MealCard.css';

// Modal
// import MealModal from './MealModal'
// import { useState } from "react";

const MealCards = ({ mealCard }) => {
    // The Modal
  
//   const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='MealCards'>
            {/* TheModal */}
            {/* <button className='primaryBtn' onClick={() => setIsOpen(true)}>
                <img className="mealImage" src={mealCard.picture} alt={mealCard.name} />
                <h2>{mealCard.name} : {mealCard.price}<i className="fab fa-d-and-d fa-1x MoneyIcon"></i></h2>

            </button>
            {isOpen && <MealModal setIsOpen={setIsOpen} mealCard={mealCard}/>} */}
            
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
