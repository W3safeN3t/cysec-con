import React from 'react';
import Carousel from '../components/Carousel';
import {images} from '../assets/data/index';

const Memories = () => {
  return (
    <div className="bg-[#FFF5CC] p-8">
      <div className="pb-4">
        <p className="font-medium text-[16px]">Events Gallery</p>
        <h1 className="font-medium text-[24px] md:text-[36px]">Past Event Memories</h1>
      </div>
      <Carousel slidesPerPage={4}>
        {images.map((image, index) => (
          <div key={index} className="p-2">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-[300px] object-cover rounded-xl"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Memories;
