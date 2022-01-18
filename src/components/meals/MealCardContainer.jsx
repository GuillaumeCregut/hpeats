import React from 'react'
import MealCards from './MealCards';


const MealCardContainer = ({mealsCards, filterTypes}) => {
    
    return (
        <div className='Mealcards-container'>
            <div>
                {mealsCards
                    .filter((item)=> item.type === (filterTypes)
                    )
                    .map((mealCard, index) =>(
                        <div key={index}>                  
                        <MealCards mealCard = {mealCard} />                   
                        </div> )
                    )}
            </div>
            
        </div>
    )
}

export default MealCardContainer
