import React from 'react'
import MealCards from './MealCards';

const MealCardContainer = ({ mealsCardFirstFilter, filterTypes }) => {

    return (
        <div className='Mealcards-container'>
            <div>
                {
                    mealsCardFirstFilter
                        .filter((item) => item.type.includes(filterTypes))
                        .map((item2, index) => (
                            <MealCards key={index} mealCard={item2} />
                        ))

                }
            </div>
        </div>
    )
}

export default MealCardContainer
