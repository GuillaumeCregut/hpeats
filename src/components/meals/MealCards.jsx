import './MealCard.css';

const MealCards = ({ mealCard, toggle }) => {
    const handleClick = () => {
        toggle(mealCard.id);
    }
    return (
        <div className='MealCards'>
            <div className='meal-container'>
                <img className="mealImage" src={mealCard.picture} alt={mealCard.name} onClick={handleClick} />
                <div className='meal-desc'>
                    <h2>{mealCard.price}<i className="fab fa-d-and-d fa-1x MoneyIcon"></i></h2>
                </div>
            </div>
        </div>
    )
}

export default MealCards

