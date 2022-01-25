import React from 'react';
import { RiCloseLine } from "react-icons/ri";
import './MealModal.css';

const MealModal = ({setIsOpen, mealCard}, addToCart) => {

  return (
      <div>
          <div className='darkBG' onClick={() => setIsOpen(false)} />
            <div className='centered'>
            <div className='modal'>
                <div className='modalHeader'>
                    <img className="modalHeader" src={mealCard.picture} alt={mealCard.name} />
                
                <button className='mealCart' onClick={() => addToCart(mealCard)}>Ajouter au panier</button>
                </div>
                <button className='closeBtn' onClick={() => setIsOpen(false)}>
                </button>
                <div className='modalContent'>
                    <p className='mealDescription'>{mealCard.description}</p>
                    <p className='mealPrice'>{mealCard.price}<i className="fab fa-d-and-d fa-1x MoneyIcon"></i></p>
                </div>
                <div className='modalActions'>
                <div className='actionsContainer'>
                    <button className='deleteBtn' onClick={() => setIsOpen(false)}>
                    Ajouter au panier
                    </button>
                    <button className='cancelBtn' onClick={() => setIsOpen(false)}>
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
