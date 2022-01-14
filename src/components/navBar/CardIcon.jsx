import React from 'react'
import "./CardIcon.css"

function CardIcon({logo, title, filter, kind}) {
    return (
        <div className='CardIcon'>
            <img onClick={() => {filter(kind)}} src={logo} alt="logo" />
            <p>{title}</p>
        </div>
    )
}

export default CardIcon ;
