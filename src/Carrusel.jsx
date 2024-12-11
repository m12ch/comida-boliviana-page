import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'lpz1.jpg',
    altText: ' ',
    caption: ' ',
    key: 1,
  },
  {
    src: 'or1.jpg',
    altText: ' ',
    caption: ' ',
    key: 2,
  },
  {
    src: 'pt1.jpg',
    altText: ' ',
    caption: ' ',
    key: 3,
  },
  {
    src: 'cocha1.jpg',
    altText: ' ',
    caption: ' ',
    key: 4,
  },
  {
    src: 'chuq1.jpg',
    altText: ' ',
    caption: ' ',
    key: 5,
  },
  {
    src: 'tr1.jpg',
    altText: ' ',
    caption: ' ',
    key: 6,
  },
  {
    src: 'stc1.jpg',
    altText: ' ',
    caption: ' ',
    key: 7,
  },
  {
    src: '/beni1.jpg',
    altText: ' ',
    caption: ' ',
    key: 8,
  },
  {
    src: '/pando1.jpg',
    altText: ' ',
    caption: ' ',
    key: 9,
  },
];

function Carrusel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={{
            width: "100%",
            maxWidth: "800px",
            height: "400px",
            objectFit: "cover",
            margin: "auto",
            borderRadius: "15px",
          }}/>
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className="carousel-dark"
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Carrusel;