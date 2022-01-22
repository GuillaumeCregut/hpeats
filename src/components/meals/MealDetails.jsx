import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Logo from '../Logo';
import './MealDetails.css';

const MealDetails = ({ addToCart }) => {

    const [mealInfos, setMealInfos] = useState([]);
    const params = useParams();

    useEffect(() => {
        axios
            .get(`https://a.nacapi.com/HPMeats/${params.id}`)
            .then((res) => {
                setMealInfos(res.data)
            })
    }, [])

    return (
        <div className='MealDetails containeur'>
            
            <div className="LogoDiv">
                <Link to="/"><Logo /></Link>
            </div>
            <img className='image-details' src={mealInfos.picture} alt={mealInfos.name} />
            <p className='mealDescription'>{mealInfos.description}</p>
            <p className='mealPrice'>{mealInfos.price}<i className="fab fa-d-and-d fa-1x MoneyIcon"></i></p>
            <button className='mealCart' onClick={() => addToCart(mealInfos)}>Ajouter au panier</button>
        </div>
    )
}

export default MealDetails
