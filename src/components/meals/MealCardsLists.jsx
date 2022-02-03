import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import MealCardContainer from './MealCardContainer';
import './MealCardsLists.css'

const MealCardsLists = ({ filterKind, trigger, setTrigger, addToCart }) => {

    const [mealsCards, setMealsCards] = useState([]);
    const url = 'https://a.nacapi.com/HPMeats';
    useEffect(() => {
        axios
            .get(url)
            .then((res) => res.data)
            .then((data) => setMealsCards(data))
    }, []);

    function handleTrigger(filter) {
        setTrigger(filter);
    }
    
    return (
        <div className='MealCardsList'>
            <div className='mealButtons'>
                <button className={trigger === 'ent' ? 'button MealCardBtnSel' : 'button'} onClick={() => handleTrigger('ent')}>Entrée</button>
                <button className={trigger === 'plat' ? 'button MealCardBtnSel' : 'button'} onClick={() => handleTrigger('plat')}>Plat</button>
                <button className={trigger === 'dessert' ? 'button MealCardBtnSel' : 'button'} onClick={() => handleTrigger('dessert')}> Dessert</button>
            </div>
            <div className='cardimage-container'>
                <MealCardContainer mealsCardFirstFilter={mealsCards.filter((item) => item.kind.includes(filterKind))} filterTypes={trigger} addToCart={addToCart} />
            </div>
        </div>
    );
}

export default MealCardsLists;



