import React from 'react'
import poulet from '../../assets/img/poulet.png';
import stop from '../../assets/img/stop.png';
import './AdBox.css';
const AdBox = (props) => {
    return (
        <div className='AdBox'>
            <div className="AdBoxImgContainer">
                <img src={poulet} alt='chicken' className='AdBoxImg Chicken' />
                <img src={stop} alt='stop' className='AdBoxImg Stop' />
            </div>
            <div className="AdBoxSloganContainer">
                <p className='AdSlogan'>Aucun poulet notable ? Normal, nous sommes une entreprise responsable</p>
            </div>
        </div>
    )
}

export default AdBox
