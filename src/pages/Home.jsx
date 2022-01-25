import React from 'react'
import MealCardsLists from '../components/meals/MealCardsLists';
import MenuFilters from '../components/navbar/MenuFilters'
import { useState } from 'react';

const Home = ({ addToCart, user, cart }) => {

    const [filterKind, setFilterKind] = useState('');
    const [trigger, setTrigger] = useState('');
    const changeFilter = (newFilter) => {
        setTrigger('');
        if (filterKind === newFilter) {
            setFilterKind('')
        } else {
            setFilterKind(newFilter)
        }
    }

    return (
        <div className='home'>
            <MenuFilters changeFilter={changeFilter} user={user} cart={cart} />
            <MealCardsLists filterKind={filterKind} trigger={trigger} setTrigger={setTrigger} />
        </div>
    )
}

export default Home
