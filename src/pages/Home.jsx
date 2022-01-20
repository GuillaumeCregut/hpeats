import React from 'react'
import MealCardsLists from '../components/meals/MealCardsLists';
import MenuFilters from '../components/navbar/MenuFilters'
import { useState } from 'react';

const Home = ({ addToCart, user }) => {

    const [filterKind, setFilterKind] = useState('')
    const changeFilter = (newFilter) => {
        if (filterKind === newFilter) {
            setFilterKind('')
        } else {
            setFilterKind(newFilter)
        }
    }

    return (
        <div className='home'>
            <MenuFilters changeFilter={changeFilter} user={user} />
            <MealCardsLists filterKind={filterKind} addToCart={addToCart} />
        </div>
    )
}

export default Home
