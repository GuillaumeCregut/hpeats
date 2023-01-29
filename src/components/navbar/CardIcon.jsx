import React from 'react';
import "./CardIcon.css";

function CardIcon({logo, title, filter, kind,filterKind}) { 
 
    return (
        
         <div className={ filterKind===kind?'CardIcon CardIconContainer':'CardIcon'}>   
            <img onClick={() =>filter(kind)} 
            src={logo} 
            alt="logo" />
            <p>{title}</p>
         </div> 
         
    )
}

export default CardIcon ;
