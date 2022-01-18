import React from 'react'
import MealCardsLists from '../components/meals/MealCardsLists';
import MenuFilters from '../components/navbar/MenuFilters'

const Home = ({ user }) => {

    return (
        <div className='home'>
            <MenuFilters user={user} />
            <MealCardsLists />
        </div>
    )

}

export default Home
