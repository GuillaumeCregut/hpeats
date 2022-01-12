import React, { useEffect, useState } from 'react';
import CardList from '../components/cartlist/CartList';

const Cart = (props) => {
    /*here we call API for animals */

    /*Def local variables */
    const [shippinPrice, setShippinPrice] = useState(0);
    const { cartItems, addToCart, removeFromCart } = props;
    return (
        <div>
            <h2>Panier</h2>
            <CardList
                cart={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart} />
            <p>Prix Total :</p>
            {/*Ici on mets le composant carousel de choix de mode de livraison. Il recoit en props 
            l tabeau etourné par l'aPI,le poids total du panier et la variable (shippinPrice) permettant de calculer le cout total de la livraison*/}
            <p>Montant à payer : </p>
            {/*Ici on mets le bouton de validation du panier*/}
        </div>
    )
}

export default Cart
