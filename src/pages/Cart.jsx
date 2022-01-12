import React, { useEffect, useState } from 'react';
import CardList from '../components/cartlist/CartList';
/*temporaire */
const cartArray = [
    {
        id: "1",
        image: "adbs",
        name: "nom1",
        price: "5",
        quantity: "1",
        weight: "4"
    },
    {
        id: "2",
        image: "adbs",
        name: "nom2",
        price: "7",
        quantity: "1",
        weight: "5"
    },
    {
        id: "3",
        image: "adbs",
        name: "nom3",
        price: "9",
        quantity: "1",
        weight: "8"
    },
    {
        id: "4",
        image: "adbs",
        name: "nom4",
        price: "2",
        quantity: "1",
        weight: "10"
    },
    {
        id: "5",
        image: "adbs",
        name: "nom5",
        price: "3",
        quantity: "1",
        weight: "2"
    },
    {
        id: "6",
        image: "adbs",
        name: "nom6",
        price: "4",
        quantity: "1",
        weight: "3"
    }
];
/*fin temporaire */
const Cart = (props) => {
    /*here we call API for animals */
    /*Def local variables */

    return (
        <div>
            <h2>Panier</h2>
            <CardList
                cart={cartArray} />
            {/*Ici on mets le composant carousel de choix de mode de livraison. Il recoit en props 
            l tabeau etourné par l'aPI,le poids total du panier et la variable permettant de calculer le cout total de la livraison*/}
            {/*Ici on mets le bouton de validation du panier*/}

        </div>
    )
}

export default Cart
