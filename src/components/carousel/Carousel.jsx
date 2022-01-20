import React from 'react';
import InfiniteCarousel from "react-leaf-carousel";
import AnimalCard from './AnimalCard';
import axios from 'axios';

export default function Carousel({ totalWeight, updatePrice }) {
  const [animalCards, setAnimalCards] = React.useState([]);
  const url = 'https://a.nacapi.com/HPEatsAnimals';

  React.useEffect(() => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setAnimalCards(data))
  }, []);

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
        {animalCards
          .filter((element) => parseInt(element.payload) > totalWeight)
          .map((element, index) => (
            <AnimalCard key={index} src={element.image} alt={element.name} updatePrice={updatePrice} animalPrice={0} />
          ))}
      </InfiniteCarousel>

    </div>
  )
}



