import React from 'react'
import CardIcon from './CardIcon'
import "./MenuFilters.css" 

import LogoVegan from '../../assets/img/LogoVegan.png'
import Logoflexi from '../../assets/img/LogoFlexi.png'
import LogoTradi from '../../assets/img/LogoTradi.png'
import LogoPotion from '../../assets/img/LogoPotion.png'
import LogoEtrange from '../../assets/img/LogoEtrange.png'
import Logo from '../Logo.jsx'


function MenuFilters() {
    return (
        <div className='Menufilters'>
          
            <div className='logo-menu'>
                <div className='logo-hpeat'>
                    <Logo />
                </div>
                <CardIcon logo={LogoVegan} title = "Vegan"/>
                <CardIcon logo={Logoflexi} title = "Flexi"/>
                <CardIcon logo={LogoTradi} title = "Tradi"/>
                <CardIcon logo={LogoPotion} title = "Potion"/>
                <CardIcon logo={LogoEtrange} title = "Etrange"/>
            </div>
        </div>
    )
}

export default MenuFilters
