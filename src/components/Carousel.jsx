import React from "react";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomLeftArrow, CustomRightArrow } from "./Arrows.jsx";

const Carousel = ({ children, slidesPerPage }) => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1440 }, items: slidesPerPage },
    desktop: { breakpoint: { max: 1440, min: 1024 }, items: slidesPerPage },
    tablet: { breakpoint: { max: 1024, min: 600 }, items: 2 },
    mobile: { breakpoint: { max: 600, min: 0 }, items: 1 },
  };

  return (
    <MultiCarousel
      responsive={responsive}
      scrollable
      swipeable
      draggable
      infinite
      autoPlay
      autoPlaySpeed={3000}
      keyBoardControl
      customTransition="all 0.5s ease"
      transitionDuration={500}
      containerClass="carousel-container relative"
      itemClass="px-3 flex justify-center"
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
    >
      {children}
    </MultiCarousel>
  );
};


export default Carousel;
