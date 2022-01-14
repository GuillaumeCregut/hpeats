import React from 'react';
import CardIcon from './CardIcon';
import "./MenuFilters.css" ;
import {Link} from 'react-router-dom';

import LogoVegan from '../../assets/img/LogoVegan.png';
import Logoflexi from '../../assets/img/LogoFlexi.png';
import LogoTradi from '../../assets/img/LogoTradi.png';
import LogoPotion from '../../assets/img/LogoPotion.png';
import LogoEtrange from '../../assets/img/LogoEtrange.png';
import LogoCart from '../../assets/img/LogoCart.png';
import Logo from '../Logo.jsx'

function MenuFilters({filterFunction}) {
    return (
        <div className='MenuFilters'>
            <div className='logo-title-cart'>
                <div className='logo-hpeat'>
                    <Logo />
                </div>
                <h1>Bienvenue à HPEats !</h1>            
                <div className='logo-cart'>
                <Link to='/cart' className='cart'><CardIcon logo={LogoCart} title = "Panier"/></Link>
                </div>
            </div>

            <div className='logo-menu'>
                <CardIcon logo={LogoVegan} title = "Vegan" filter={filterFunction} kind='vegan'/>
                <CardIcon logo={Logoflexi} title = "Flexi"  filter={filterFunction} kind='flexi'/>
                <CardIcon logo={LogoTradi} title = "Tradi" filter={filterFunction} kind='tradi' />
                <CardIcon logo={LogoPotion} title = "Potion" filter={filterFunction} kind='potions' />
                <CardIcon logo={LogoEtrange} title = "Etrange"  filter={filterFunction} kind='strange'/>
            </div>   
        </div>
    )
}

export default MenuFilters
