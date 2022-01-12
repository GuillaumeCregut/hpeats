import React from 'react'
import "./CardIcone.css"
function CardIcone({logo, title}) {
    return (
        <div className='CardIcone'>
            <img src={logo} alt="logo" />
            <p>{title}</p>
        </div>
    )
}

export default CardIcone ;
