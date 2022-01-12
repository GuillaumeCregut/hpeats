import React from 'react'
import CardIcone from './CardIcone'
import "./MenuFilters.css" 

import LogoVegan from '../../assets/img/LogoVegan.png'
import Logoflexi from '../../assets/img/LogoFlexi.png'
import LogoTradi from '../../assets/img/LogoTradi.png'
import LogoPotion from '../../assets/img/LogoPotion.png'
import LogoEtrange from '../../assets/img/LogoEtrange.png'



function MenuFilters() {
    return (
        <div className='Menufilters'>
            <div className='logo-menu'>
                <CardIcone logo={LogoVegan} title = "Vegan"/>
                <CardIcone logo={Logoflexi} title = "Flexi"/>
                <CardIcone logo={LogoTradi} title = "Tradi"/>
                <CardIcone logo={LogoPotion} title = "Potion"/>
                <CardIcone logo={LogoEtrange} title = "Etrange"/>
            </div>
        </div>
    )
}

export default MenuFilters
