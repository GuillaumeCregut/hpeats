import React from 'react';
import Carousel from 'react-elastic-carousel'
import AnimalCard from './AnimalCard';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

export default function Slider({ animalCard, totalWeight, updatePrice }) {
  return (
    <div className='CarouselAnimal'>
      <Carousel breakPoints={breakPoints} >

        {animalCard
          .filter((element) => parseInt(element.payload) > totalWeight)
          .map((element, index) => (
            <AnimalCard key={index} src={element.image} alt={element.name} updatePrice={updatePrice} animalPrice={element.price} />
          ))}
      </Carousel>
    </div>
  )
}


