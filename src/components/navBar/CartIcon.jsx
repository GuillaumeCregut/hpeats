import React from 'react';
import "./CardIcon.css";
import "./CartIcon.css";
import LogoCart from '../../assets/img/LogoCart.png';

function CartIcon({ cart }) {
    let totalCartItems = cart.reduce((a, c) => { return a + c.qty }, 0);

    return (
        <div className="CartIconContainer">
            <div className='CardIcon'>
                <img src={LogoCart} alt="logo" />
                <p>Panier</p>
                {cart.length > 0 ? <div className="CartSize">{totalCartItems}</div> : ''}
            </div>
        </div>
    )
}

export default CartIcon;
