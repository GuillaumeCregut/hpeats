import React from 'react'

const Desserts = ({ mealCard }) => {
    
    return ( 
        
        <div className='Desserts'>
            <img src={mealCard.picture} alt={mealCard.name} />
            <h2>{mealCard.name}</h2> 
        </div>
    )
}

export default Desserts
