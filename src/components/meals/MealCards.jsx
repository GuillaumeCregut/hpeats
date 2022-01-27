import './MealCard.css';

const MealCards = ({ mealCard, handleShow }) => {

    return (
        <div className='MealCards'>
            <div className='meal-container'>
                    <img className="mealImage" src={mealCard.picture} alt={mealCard.name} />
                <div className='meal-desc'>
                    <h2>{mealCard.name} : {mealCard.price}<i className="fab fa-d-and-d fa-1x MoneyIcon"></i></h2>
                </div>
            </div>
        </div>
    )
}

export default MealCards
