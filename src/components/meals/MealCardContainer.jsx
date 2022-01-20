import React from 'react'
import MealCards from './MealCards';

const MealCardContainer = ({ mealsCardFirstFilter, filterTypes }) => {

    return (
        <div className='Mealcards-container'>
            <div>
                {mealsCardFirstFilter
                    .filter((item) => item.type.includes(filterTypes)
                    )
                    .map((mealCard, index) => (
                        <div key={index}>
                            <MealCards mealCard={mealCard} />
                        </div>)
                    )}

            </div>
        </div>
    )
}

export default MealCardContainer
