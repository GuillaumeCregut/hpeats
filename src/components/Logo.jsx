import React from 'react'
import LogoHpeat from '../assets/img/LogoHpeat.png'
import "./Logo.css"

function Logo() {
    return (
        <div className='Logo'>
            <img src={LogoHpeat} alt="logo" />
            <p className="SiteTitle">HPEat</p>
        </div>
    )
}

export default Logo
