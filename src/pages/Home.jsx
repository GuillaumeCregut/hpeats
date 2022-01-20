import React from 'react'
import MealCardsLists from '../components/meals/MealCardsLists';
import MenuFilters from '../components/navbar/MenuFilters'

const Home = () => {
    return (
        <div className='home'>
            <MenuFilters />            
            <MealCardsLists />
        </div>
    )
            
}

export default Home
