import React from 'react';
import InfiniteCarousel from "react-leaf-carousel";
import AnimalCard from './AnimalCard';

export default function Carousel({animalCard, totalWeight, updatePrice}) {
  console.log(animalCard)
  return (
    <div>
    <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={0.5}
    sideSize={0.1}
    slidesToScroll={4}
    slidesToShow={4}
    scrollOnDevice={true}
  >
    {animalCard
    .filter((element) => parseInt(element.payload) > totalWeight)
    .map((element, index) => (
  <AnimalCard key={index} src={element.image} alt={element.name} updatePrice={updatePrice} animalPrice={element.price} />
    ))}
    </InfiniteCarousel>
    </div>
  )
}



