import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './MealCard.css';

const MealCards = ({ mealCard }) => {   

    const [mealInfos, setmealInfos] = useState([]);
    
        useEffect(() => {
        axios
        .get(`https://a.nacapi.com/HPMeats/${mealCard.id}`)
        .then((res) => {
            setmealInfos(res.data)
        })
    }, [])

    return ( 
        <div className='MealCards'>
            <div className='meal-container'>
               <Link to = {{pathname:`/mealInfos/${mealInfos.id}`}}>
                    <img className="mealImage" src={mealInfos.picture} alt={mealInfos.name} />
               </Link>            
                <h2>{mealInfos.name}</h2>                     
                <h3><span>Tarif:  </span>{mealInfos.price}<i className="fab fa-d-and-d fa-1x MoneyIcon"></i></h3>
            </div>
        </div>
    )
}

export default MealCards
