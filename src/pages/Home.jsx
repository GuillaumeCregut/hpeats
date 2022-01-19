import React from 'react'
import MealCardsLists from '../components/meals/MealCardsLists';
import MenuFilters from '../components/navbar/MenuFilters'

const Home = ({addToCart}) => {
     
    return (
        <div className='home'>
            <MenuFilters />            
            <MealCardsLists addToCart={addToCart} />
        </div>
    )
            
}

export default Home
