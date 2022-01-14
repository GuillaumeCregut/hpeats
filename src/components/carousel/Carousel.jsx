import React from 'react';

import InfiniteCarousel from "react-leaf-carousel";

// carousel data object
const ImgData = [
  { alt: "Image1", src: "https://www.aquaportail.com/pictures1106/anemone-clown_1307889811-fleur.jpg", classId:"testImg1"},
  { alt: "Image2", src: "https://blog.interflora.fr/wp-content/uploads/2017/08/Langage-des-fleurs-amour-2.jpg", classId:"testImg2" },
  { alt: "Image3", src: "https://blog.interflora.fr/wp-content/uploads/2014/04/Fleurs-et-couleurs.jpg", classId:"testImg3" },
  { alt: "Image4", src: "https://img.freepik.com/photos-gratuite/gros-plan-belle-fleur-daisy-oxeye_181624-11106.jpg?size=626&ext=jpg", classId:"testImg4" },
  { alt: "Image5", src: "https://www.jardiner-malin.fr/wp-content/uploads/2020/05/fleur-a-bulbe-rouge.jpg" , classId:"testImg5"},
  { alt: "Image6", src: "https://static.actu.fr/uploads/2019/04/Fleur-de-frangipanier_Robynmac-stock.adobe_.com-800.jpg" , classId:"testImg6"},
  { alt: "Image7", src: "http://www.maxitendance.com/wp-content/uploads/2017/06/petunias-night-sky-galaxie-fleur-galaxie-2.jpg" , classId:"testImg7" }
];

// carusel data component

function ImgComponent({ src, alt, classId }) {
  return (
    <div className={classId}>
      <img src={src} alt={alt} />
      <p>{alt}</p>
    </div>
  );
}

// carousel data iterator
const ImgDataIterator = ImgData.map((element) => (
  <ImgComponent src={element.src} alt={element.alt} />
));

export default function RLCarousel() {
  return (
    <InfiniteCarousel
      breakpoints={[
        {
          breakpoint: 200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]}
      lazyLoad={false}
      dots={false}
      showSides={true}
      sidesOpacity={0.1}
      sideSize={0.1}
      slidesToScroll={4}
      slidesToShow={4}
      scrollOnDevice={true}
    >
      {ImgDataIterator }
    </InfiniteCarousel>
  );
}
















