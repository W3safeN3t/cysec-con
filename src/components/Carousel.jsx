import React from 'react';
import MultiCarousel from 'react-multi-carousel'; // Rename the import
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // For very large screens (e.g., 1440px and above)
    breakpoint: { max: 4000, min: 1440 },
    items: 4,
  },
  desktop: {
    // For desktop screens
    breakpoint: { max: 1440, min: 1024 },
    items: 3,
  },
  tablet: {
    // For tablets
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    // For mobile devices
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const Carousel = ({ children }) => {
  return (
    <MultiCarousel
      responsive={responsive}
      swipeable
      draggable
      showDots
      infinite
      autoPlay
      autoPlaySpeed={3000}
      keyBoardControl
      customTransition="all 0.5s ease"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {children}
    </MultiCarousel>
  );
};

export default Carousel;
