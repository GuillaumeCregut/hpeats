import React from 'react'
import PopUp from '../popup/PopUp';
import MealCards from './MealCards';
import './MealCardContainer.css';

const MealCardContainer = ({ mealsCardFirstFilter, filterTypes, addToCart, cart }) => {
    const arrayVisible = [];
    const toggleVisibility = (id) => {
        let indice = arrayVisible.findIndex(element => element.id === id);
        let visibility = arrayVisible[indice].visibility;
        let i = '';
        const lePopup = document.getElementById(id);
        if (visibility) {
            lePopup.classList.remove('MealVisible');
            lePopup.classList.add('MealHidden');
        }
        else {
            lePopup.classList.add('MealVisible');
            lePopup.classList.remove('MealHidden');
        }
        arrayVisible[indice].visibility = !arrayVisible[indice].visibility;
    }
    mealsCardFirstFilter.forEach((item2) => arrayVisible.push({ id: item2.id, visibility: false }));
    return (
        <div className='Mealcards-container'>
            {
                mealsCardFirstFilter
                    .filter((item) => item.type.includes(filterTypes))
                    .map((item2, index) => (
                        <div className='MealLine'>
                            <MealCards key={index} mealCard={item2} toggle={toggleVisibility} addToCart={addToCart} />

                            <PopUp key={index + 1000} item2={item2} toggleVisibility={toggleVisibility} addToCart={addToCart} />
                        </div>
                    ))

            }
        </div>
    )
}

export default MealCardContainer
