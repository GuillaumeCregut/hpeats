import React from 'react'
import MealCards from './MealCards';
// Modal
import MealModal from './MealModal'
import { useState } from "react";

import './MealCardContainer.css';

const MealCardContainer = ({ mealsCardFirstFilter, filterTypes, mealCard }) => {
     // The Modal
  
//   const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='Mealcards-container'>

             {/* TheModal */}
            {/* <button className='primaryBtn' onClick={() => setIsOpen(true)}>
                <img className="mealImage" src={mealCard.picture} alt={mealCard.name} />
                <h2>{mealCard.name} : {mealCard.price}<i className="fab fa-d-and-d fa-1x MoneyIcon"></i></h2>

            </button>
            {isOpen && <MealModal setIsOpen={setIsOpen} mealCard={mealCard}/>}
             */}
            <div className='mealCards'>
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
