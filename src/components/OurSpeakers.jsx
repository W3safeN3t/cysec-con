import React, { useState } from 'react';
import SpeakerCard from './SpeakerCard';
import { speakers } from '../constants/index';
import MultiCarousel from './Carousel';
import CategoryTabs from './CategoryTab';

const OurSpeakers = () => {
  const [category, setCategory] = useState('all');

  // Filter speakers based on the selected category
  const filteredSpeakers = category === 'all' 
    ? speakers 
    : speakers.filter(speaker => speaker.category.toLowerCase() === category.toLowerCase());

  return (
    <div className="py-10 lg:px-0 px-2">
      <h2 className="text-3xl font-bold text-center mb-8">Our Speakers</h2>
    
      {/* Display filtered speakers in the carousel */}
      <div className="mx-auto lg:w-[1400px] py-10">
        {/* Category filter tabs */}
        <CategoryTabs category={category} setCategory={setCategory} />

        <MultiCarousel>
          {filteredSpeakers.map((speaker, index) => (
            <div key={index} className="px-2 mt-10 mb-16">
              <SpeakerCard speaker={speaker} />
            </div>
          ))}
        </MultiCarousel>
      </div>
    </div>
  );
};

export default OurSpeakers;
