import React, { useState } from 'react';
import { RiCloseLine } from "react-icons/ri";
import './Popup.css';

const Popup = ({ setIsOpen }, mealCard) => {
    // const [isOpen, setisOpen] = useState(false)
    // function togglePopup (){
    //     setisOpen(!isOpen);
    // }

    return (
        <div>
            <div className='darkBG' onClick={() => setIsOpen(false)}>
            <div className='centered'>
                <div className='modal'>
                    <div className='modalHeader'>
                        <h5 className='heading'></h5>
                    </div>
                    <button className='closeBtn' onClick={() => setIsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: "-3px" }} />
                    </button>
                    <div className='modalContent'>
                       <img src={mealCard.picture} alt={mealCard.name}/>
                    </div>
                    <div className='modalActions'>
                        <div className='actionsContainer'>
                            <button className='deleteBtn' onClick={() => setIsOpen(false)}>
                                Delete
                            </button>
                            <button
                                className='cancelBtn'
                                onClick={() => setIsOpen(false)}>   
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>       
            </div>
            </div>
        </div>
    )
}


export default Popup;

