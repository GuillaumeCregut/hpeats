import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import MealCardContainer from './MealCardContainer';
import './MealCardsLists.css'

const MealCardsLists = () => { 

    const [mealsCards, setMealsCards] = useState([]);
    const [trigger, setTrigger] = useState ('');
    
    const url ='https://a.nacapi.com/HPMeats';
    useEffect(() => {
    axios
    .get(url)
    .then((res)=>res.data)
    .then((data)=> setMealsCards(data))
    }, []);
 
    function handleTrigger(filter){
        setTrigger(filter);
    }
    
    return (

        <div className='MealCardsList'>
            <div className='mealButton'>
                <button onClick={()=>handleTrigger('ent')}>Selectionner Entrée</button>
                <button onClick={()=>handleTrigger('plat')}>Selectionner Plat</button>
                <button onClick={()=>handleTrigger('dessert')}>Selectionner Dessert</button>
            </div>
            <div className='cardimage-container'>
                <MealCardContainer mealsCards={mealsCards} filterTypes = {trigger}/>
            </div>
        </div>
    );
}

export default MealCardsLists;


