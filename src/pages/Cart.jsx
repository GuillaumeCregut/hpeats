import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardList from '../components/cartlist/CartList';
import './Cart.css';
import cartArray from '../data.js';
import TempItem from "../components/tempitem/TempItem";
import TempItem2 from '../components/tempitem/TempItem2';
import Logo from '../components/Logo';

const Cart = (props) => {
    /*here we call API for animals */

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
    let totalPrice = totalPriceItems + shippinPrice;

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
            {/*temporaire */}
            {cartArray.map((item) =>
                <TempItem
                    itemArray={item}
                    addTotCart={addToCart}
                />
            )}
            {
                /*  */
            }
            <div className="LogoDiv">
                <Link to="/"><Logo /></Link>
            </div>
            <h2 className="CartTitle">Panier</h2>
            <CardList
                cart={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart} />
            <div className='CartCheckOut'>
                <p>Prix Total : <span className="">{totalPriceItems}</span> <i className="fab fa-d-and-d fa-2x MoneyIcon"></i></p>
                <p>Poids total : {totalWeight} kg</p>
                {/*Ici on mets le composant carousel de choix de mode de livraison. Il recoit en props 
                l tabeau etourné par l'aPI,le poids total du panier et la variable (shippinPrice) permettant de calculer le cout total de la livraison*/}
            </div>
            <TempItem2
                totalWeight={totalWeight}
                setShippinPrice={setShippinPrice}
            />
            <div className='CartCheckOut' >
                <p>Montant à payer : <span className="">{totalPrice}</span> <i className="fab fa-d-and-d fa-2x MoneyIcon"></i></p>
                <div className='CartValidationBtn' onClick={validCart}>Valider le panier</div>
            </div>
        </div>
    )
}

export default Cart
