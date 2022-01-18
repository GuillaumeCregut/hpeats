import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Starters = ({ mealCard }) => {   
    const [mealInfos, setmealInfos] = useState([]);

    useEffect(() => {
        axios
        .get(`https://a.nacapi.com/HPMeats/${mealCard.id}`)
        .then((res) => {
            setmealInfos(res.data)
        })
    }, [])

    return ( 
        <div className='Starters'>
            <div className='meal-container'>
               <Link to = {{pathname:`/mealInfos/${mealInfos.id}`}}>
                    <img className="starters-img" src={mealCard.picture} alt={mealCard.name} />
               </Link>            
                <h2>{mealInfos.name}</h2>                     
                <h4><span>Tarif:</span>{mealCard.price}</h4>
            </div>
        </div>
    )
}

export default Starters
