import React from 'react';
import Carousel from 'react-elastic-carousel'
import AnimalCard from './AnimalCard';

export default function Slider({ animalCard, totalWeight, updatePrice }) {
  return (
    <div>
      <Carousel itemsToShow={3}>
        {animalCard
          .filter((element) => parseInt(element.payload) > totalWeight)
          .map((element, index) => (
            <AnimalCard key={index} src={element.image} alt={element.name} updatePrice={updatePrice} animalPrice={element.price} />
          ))}
      </Carousel>
    </div>
  )
}
