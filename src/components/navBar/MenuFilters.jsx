import React from 'react';
<<<<<<< HEAD
import {Link} from 'react-router-dom';
import CardIcon from './CardIcon';
import AnimationQuote from './AnimationQuote';
import "./MenuFilters.css" ;

=======
import CardIcon from './CardIcon';
import "./MenuFilters.css";
import { Link } from 'react-router-dom';
import LogoUser from '../logouser/LogoUser';
>>>>>>> dev


import LogoVegan from '../../assets/img/LogoVegan.png';
import Logoflexi from '../../assets/img/LogoFlexi.png';
import LogoTradi from '../../assets/img/LogoTradi.png';
import LogoPotion from '../../assets/img/LogoPotion.png';
import LogoEtrange from '../../assets/img/LogoEtrange.png';
import LogoCart from '../../assets/img/LogoCart.png';
import Logo from '../Logo.jsx'

function MenuFilters({ changeFilter, user }) {

    return (
        <div className='MenuFilters'>
            <div className='logo-title-cart'>
                <div className='logo-hpeat'>
                    <Logo />
                </div>
<<<<<<< HEAD
                <div className='title-quote'>
                <h1>Bienvenue à HPEats ! </h1>
                <AnimationQuote /> 
                </div>           
=======
                <h1>Bienvenue à HPEats !</h1>
>>>>>>> dev
                <div className='logo-cart'>
                    <Link to="/user"> <LogoUser user={user} /> </Link>
                    <Link to='/cart' className='cart'><CardIcon logo={LogoCart} title="Panier" /></Link>
                </div>
            </div>

            <div className='logo-menu'>
                <CardIcon logo={LogoVegan} title="Vegan" filter={changeFilter} kind='vegan' />
                <CardIcon logo={Logoflexi} title="Flexi" filter={changeFilter} kind='flexi' />
                <CardIcon logo={LogoTradi} title="Tradi" filter={changeFilter} kind='tradi' />
                <CardIcon logo={LogoPotion} title="Potion" filter={changeFilter} kind='potions' />
                <CardIcon logo={LogoEtrange} title="Etrange" filter={changeFilter} kind='strange' />
            </div>
        </div>
    )
}

export default MenuFilters
