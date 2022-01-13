import React from 'react'
import Desserts from './Desserts';
import MainMeals from './MainMeals';
import Starters from './Starters';

const MealCardContainer = ({mealsCards, filterTypes}) => {
    
    return (
        <div className='Mealcards-container'>
            {mealsCards
                .filter((item)=> item.type === (filterTypes)
                )
            .map((mealCard, index) =>(
                <div key={index}>                  
                    <Starters mealCard = {mealCard} />                   
                </div> )
                )}
        </div>
    )
}

export default MealCardContainer
