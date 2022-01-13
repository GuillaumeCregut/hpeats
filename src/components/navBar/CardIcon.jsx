import React from 'react'
import "./CardIcon.css"

function CardIcon({logo, title}) {
    return (
        <div className='CardIcon'>
            <img src={logo} alt="logo" />
            <p>{title}</p>
        </div>
    )
}

export default CardIcon ;
