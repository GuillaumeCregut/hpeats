import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardList from '../components/cartlist/CartList';
import Logo from '../components/Logo';
import './Cart.css';
import Carousel from '../components/carousel/Carousel';
import axios from 'axios';


const Cart = (props) => {
    /*here we call API for animals */
    const [animalCards, setAnimalCards] = useState([]);
    const url ='https://a.nacapi.com/HPEatsAnimals';

    useEffect(() => {
    axios
    .get(url)
    .then((res)=>res.data)
    .then((data)=> setAnimalCards(data))
    }, []);
    
    /*Def local variables */
    const { cartItems, addToCart, removeFromCart, shippinPrice, setShippinPrice } = props;
    /*Calculate total price and total Weight*/
    let totalWeight = 0;
    let totalPriceItems = 0;
    cartItems.forEach((item) => {
        totalPriceItems += item.price * item.qty;
        totalWeight += item.weight * item.qty;
        return 0;
    })
    let totalPrice = totalPriceItems + parseInt(shippinPrice);

    const validCart = () => {
        //If user is logged userLogged
        if (true) {
            alert(`Veuillez régler le montant de ${totalPrice} mornilles`);
        }
        else {
            alert('Veuillez vous connecter pour commander');
        }
    }

    return (
        <div>
            <div className="LogoDiv">
                <Link to="/"><Logo /></Link>
            </div>
            <h2 className="CartTitle">Panier</h2>
            <CardList
                cart={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart} />
            <Carousel animalCard={animalCards} totalWeight={totalWeight} updatePrice={setShippinPrice} />
            <div className='CartCheckOut'>
                <p>Prix Total : <span className="">{totalPriceItems}</span> <i className="fab fa-d-and-d fa-2x MoneyIcon"></i></p>
                <p>Poids total : {totalWeight} kg</p>
            </div>
            {/*Ici on mets le composant carousel de choix de mode de livraison. Il recoit en props 
                l tabeau etourné par l'aPI,le poids total du panier et la variable (shippinPrice) permettant de calculer le cout total de la livraison*/}
            <div className='CartCheckOut' >
                <p>Montant à payer : <span className="">{totalPrice}</span> <i className="fab fa-d-and-d fa-2x MoneyIcon"></i></p>
                <div className='CartValidationBtn' onClick={validCart}>Valider le panier</div>
            </div>
        </div>
    )
}

export default Cart
