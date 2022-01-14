<<<<<<< HEAD
import React from 'react';
import MenuFilters from '../components/navbar/MenuFilters';
import {useState} from 'react';

function Home() {
    const [filterKind, setFilterKind] = useState('')
    return (
        <div>
            <MenuFilters filterFunction= {setFilterKind} />
=======
import React from 'react'
import MealCardsLists from '../components/meals/MealCardsLists';
import MenuFilters from '../components/navbar/MenuFilters'

const Home = () => {
     
    return (
        <div className='home'>
            <MenuFilters />            
            <MealCardsLists />
>>>>>>> dev
        </div>
    )
            
}

export default Home
