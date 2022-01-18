import React from 'react';
import CardIcon from './CardIcon';
import "./MenuFilters.css";
import { Link } from 'react-router-dom';
import LogoUser from '../logouser/LogoUser';

import LogoVegan from '../../assets/img/LogoVegan.png';
import Logoflexi from '../../assets/img/LogoFlexi.png';
import LogoTradi from '../../assets/img/LogoTradi.png';
import LogoPotion from '../../assets/img/LogoPotion.png';
import LogoEtrange from '../../assets/img/LogoEtrange.png';
import LogoCart from '../../assets/img/LogoCart.png';
import Logo from '../Logo.jsx'

function MenuFilters({ user }) {
    return (
        <div className='MenuFilters'>
            <div className='logo-title-cart'>
                <div className='logo-hpeat'>
                    <Logo />
                </div>
                <h1>Bienvenue à HPEats !</h1>
                <div className='logo-cart'>
                    <Link to="/user"> <LogoUser user={user} /> </Link>
                    <Link to='/cart' className='cart'><CardIcon logo={LogoCart} title="Panier" /></Link>
                </div>
            </div>

            <div className='logo-menu'>
                <CardIcon logo={LogoVegan} title="Vegan" />
                <CardIcon logo={Logoflexi} title="Flexi" />
                <CardIcon logo={LogoTradi} title="Tradi" />
                <CardIcon logo={LogoPotion} title="Potion" />
                <CardIcon logo={LogoEtrange} title="Etrange" />
            </div>
        </div>
    )
}

export default MenuFilters
