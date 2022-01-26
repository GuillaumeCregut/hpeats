import React from 'react';
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import './MealModal.css';

const MealModal = ({ cartModal, addToCart}) => {
    const [isOpen, setIsOpen] = useState(false);

  return (
      <div>
          <div className='darkBG'/>
            <div className='centered'>
            <div className='modal'>
                {/* <div className='modalHeader'> */}
                    {/* <img className="modalHeader" src={mealCard.picture} alt={mealCard.name} /> */}
                
                {/* <button className='mealCart' onClick={() => addToCart(mealCard)}>Ajouter au panier</button>
                </div>
                <button className='closeBtn' onClick={() => setIsOpen(false)}>
                </button> */}
                <div className='modalContent'>
                    <img className="mealpic" src={cartModal.picture} alt={cartModal.name} />
                    <p className='mealDescription'>{cartModal.description}</p>
                    <p className='mealPrice'>{cartModal.price}<i className="fab fa-d-and-d fa-1x MoneyIcon"></i></p>
                </div>
                <div className='modalActions'>
                    <div className='actionsContainer'>
                        <button className='deleteBtn' onClick={() => setIsOpen(false)}>
                        Ajouter au panier
                        </button>
                        <button className='cancelBtn' onClick={() => setIsOpen(true)}>
                        Annuler
                        </button>
                </div>
                </div>
            </div>
            </div>
      </div>
  )
};

export default MealModal;
