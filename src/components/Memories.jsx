import React from 'react';
import Carousel from './Carousel';
import img1 from '../assets/images/Gallery1.png';
import img2 from '../assets/images/Gallery2.png';
import img3 from '../assets/images/Gallery3.png';
import img4 from '../assets/images/Gallery4.png';
import img5 from '../assets/images/Gallery5.png';
import img6 from '../assets/images/Gallery6.png';
import img7 from '../assets/images/Gallery7.png';
import img8 from '../assets/images/Gallery8.png';
import img9 from '../assets/images/Gallery9.png';
import img10 from '../assets/images/Gallery10.png';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

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
