import React from 'react';
import './AnimalCard.css';


function AnimalCard({ src, alt, updatePrice, animalPrice }) {
  return (
    <div>
      <img className='ImgCarousel' src={src} alt={alt} onClick={() => updatePrice(animalPrice)} />
      <p>{alt} : {animalPrice} <i className="fab fa-d-and-d fa-2x MoneyIcon"></i></p>
    </div>
  );
}

export default AnimalCard;