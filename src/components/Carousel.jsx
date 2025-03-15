import React from "react";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousel = ({ children, slidesPerPage }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1440 },
      items: slidesPerPage,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: slidesPerPage,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: Math.max(2, Math.floor(slidesPerPage / 2)),
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <MultiCarousel
      responsive={responsive}
      swipeable
      draggable
      infinite
      autoPlay
      autoPlaySpeed={3000}
      keyBoardControl
      customTransition="all 0.5s ease"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="px-1"
    >
      {children}
    </MultiCarousel>
  );
};

export default Carousel;
