import React from 'react';
import "./CardIcon.css";

function CardIcon({logo, title, filter, kind}) { 
 
    return (
        
         <div className="CardIcon">   
            <button><img onClick={() =>filter(kind)} 
            src={logo} 
            alt="logo" />
            <p>{title}</p></button>
         </div> 
         
    )
}

export default CardIcon ;
