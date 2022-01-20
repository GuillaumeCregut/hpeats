import React from 'react';
import Carousel from 'react-elastic-carousel'
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



