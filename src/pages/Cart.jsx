import React, { useEffect, useState } from 'react';
import CardList from '../components/cartlist/CartList';
import './Cart.css';
const Cart = (props) => {
    /*here we call API for animals */

    /*Def local variables */
    const [shippinPrice, setShippinPrice] = useState(0);
    const { cartItems, addToCart, removeFromCart } = props;
    /*Calculate total price and total Weight*/
    let totalWeight = 0;
    let totalPriceItems = 0;
    console.log(cartItems);
    cartItems.map((item) => {
        totalPriceItems += item.price * item.qty;
        totalWeight += item.weight * item.qty;
        return 0;
    })
    let totalPrice = totalPriceItems + shippinPrice;
    return (
        <div>
            <h2 className="CartTitle">Panier</h2>
            <CardList
                cart={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart} />
            <p>Prix Total : <span className="">{totalPriceItems}</span> <i className="fab fa-d-and-d fa-2x MoneyIcon"></i></p>
            <p>Poids total : {totalWeight} kg</p>
            {/*Ici on mets le composant carousel de choix de mode de livraison. Il recoit en props 
            l tabeau etourné par l'aPI,le poids total du panier et la variable (shippinPrice) permettant de calculer le cout total de la livraison*/}
            <p>Montant à payer : <span className="">{totalPrice}</span> <i className="fab fa-d-and-d fa-2x MoneyIcon"></i></p>
            {/*Ici on mets le bouton de validation du panier*/}
        </div>
    )
}

export default Cart
