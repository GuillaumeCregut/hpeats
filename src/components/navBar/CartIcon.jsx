import React from 'react';
import "./CardIcon.css";
import LogoCart from '../../assets/img/LogoCart.png';

function CardIcon({ }) {

    return (
        <div className='CardIcon'>
            <img src={LogoCart} alt="logo" />
            <p>Panier</p>
        </div>
    )
}

export default CardIcon;
