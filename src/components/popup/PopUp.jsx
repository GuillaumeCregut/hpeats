import React from 'react'
import '../meals/MealCardsLists.css';
import './PopUp.css';
const PopUp = ({ item2, addToCart, toggleVisibility }) => {
    return (
        <div id={item2.id} className='MealHidden PopUpMail'>
            <p className='CloseCross'><span className='cross' onClick={() => toggleVisibility(item2.id)} >&times;</span></p>
            <h2 className='PopUpTitle'>{item2.name}</h2>
            <div className="PopUpContItem">
                <img className='PopUpImage' src={item2.picture} alt={item2.name} />
                <div>
                    <p className='PopUpDesc'>{item2.description}</p>
                    <p className='PopUpPrice'>Prix : {item2.price} <i className="fab fa-d-and-d fa-1x MoneyPopupIcon"></i></p>
                </div>
            </div>

            <div className='PopUpBtn'>
                <button className='PopUpAddBtn' onClick={() => addToCart(item2)}>Ajouter au panier</button>
            </div>
        </div>
    )
}

export default PopUp
