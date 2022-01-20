import React from 'react'
import MealCardsLists from '../components/meals/MealCardsLists';
import MenuFilters from '../components/navbar/MenuFilters'
import { useState } from 'react';

const Home = () => {
    const [filterKind, setFilterKind] = useState('')

    const changeFilter = (newFilter) => {
        if(filterKind === newFilter){
            setFilterKind('')
        }else{
            setFilterKind(newFilter)
        }
    }

    return (
        <div className='home'>
            <MenuFilters changeFilter={changeFilter}/>            
            <MealCardsLists  filterKind={filterKind}/>
        </div>
    )      
}

export default Home
