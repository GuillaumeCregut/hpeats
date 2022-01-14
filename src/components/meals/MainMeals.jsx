import React from 'react'

const MainMeals = ({ mealCard }) => {
    
    return ( 
        <div className='MainMeals'>
            <img src={mealCard.picture} alt={mealCard.name} />
            <h2>{mealCard.name}</h2> 
        </div>
    )
}

export default MainMeals
