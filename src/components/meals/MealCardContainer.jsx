import React from 'react'
import MealCards from './MealCards';
import './MealCardContainer.css';

const MealCardContainer = ({ mealsCardFirstFilter, filterTypes, mealCard, addToCart}) => {
    return (
        <div className='Mealcards-container'>            
            <div className='mealCards'>
                {
                    mealsCardFirstFilter
                        .filter((item) => item.type.includes(filterTypes))
                        .map((item2, index) => (
                            <MealCards key={index} mealCard={item2}  />
                        ))
                }
            </div>
        </div>
    )
}

export default MealCardContainer
