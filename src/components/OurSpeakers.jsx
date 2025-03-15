import React, { useState } from 'react';
import SpeakerCard from './SpeakerCard';
import { speakers } from '../constants/index';
import Carousel from './Carousel';
import CategoryTabs from './CategoryTab';

const OurSpeakers = () => {
  const [category, setCategory] = useState('all');

  const filteredSpeakers = category === 'all' 
    ? speakers 
    : speakers.filter(speaker => speaker.category.toLowerCase() === category.toLowerCase());

  return (
    <>
    <div className="font-FiraSans text-center">
      <div className="bg-[#A66666]">
        <h2 className="font-medium text-[20px] md:text-[32px]">Meet Our Speakers</h2>
      </div>
      <div className="bg-[#6B0000] text-white py-8 px-10 md:px-36">
        <h1 className="font-semibold text-[24px] md:text-[32px] pb-5">To Be Announced.</h1>
        <h2 className="font-normal text-[16px] md:text-[28px]">We Are Finalizing An Incredible Lineup Of Industry Leaders. Stay Tuned!</h2>
      </div>
    </div>
    <div className="pt-10 lg:px-0 overflow-hidden hidden">
      <h2 className="text-3xl font-bold text-center font-FiraSans font-medium text-[36px]">Meet Our Speakers</h2>
      <div className="lg:w-[1400px] py-10">
        <CategoryTabs category={category} setCategory={setCategory} />
        <Carousel slidesPerPage={4}>
          {filteredSpeakers.map((speaker, index) => (
            <div key={index} className="mt-4 mb-8">
              <SpeakerCard speaker={speaker} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
    </>
  );
};

export default OurSpeakers;
