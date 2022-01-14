import React from 'react'
import './Main.css'

const Main = ({meal}) => {
    
    return (
        <div className='Main'>
            <div className='main-container'>
                <img className = 'mainImg' src={meal.picture} alt={meal.name} /> 
            </div>
      </div>
    )
}

export default Main
