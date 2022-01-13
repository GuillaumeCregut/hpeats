import './Starters.css';

const Starters = ({ mealCard }) => {     

    return ( 
        <div className='Starters'>
            <img className="starters-img" src={mealCard.picture} alt={mealCard.name} />
            <h2>{mealCard.name}</h2> 
        </div>
    )
}

export default Starters
