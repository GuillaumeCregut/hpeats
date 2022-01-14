import React from 'react'
import MealCardsLists from '../components/meals/MealCardsLists';
import MenuFilters from '../components/navbar/MenuFilters'

const Home = () => {
     const [filterKind, setFilterKind] = useState('')
    return (
        <div className='home'>
            <MenuFilters filterFunction= {setFilterKind}/>            
            <MealCardsLists />
        </div>
    )
            
}

export default Home
