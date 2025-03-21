import React, { useState } from "react";
import SpeakerCard from "../utils/constant/SpeakerCard";
import { speakers } from "../assets/data/index";
import Carousel from "../utils/constant/Carousel";
import CategoryTabs from "../utils/constant/CategoryTab";

const OurSpeakers = () => {
  const [category, setCategory] = useState("all");

  const filteredSpeakers =
    category === "all"
      ? speakers
      : speakers.filter((speaker) => speaker.category.toLowerCase() === category.toLowerCase());

  return (
    <div className="bg-[#6B0000]">
      <div className="font-FiraSans text-center">
        <div className="bg-[#A66666]">
          <h2 className="font-semibold text-white text-[24px] md:text-[34px]">Meet Our Speakers</h2>
        </div>
      </div>
      <div className="pt-10 px-0 lg:px-0">
        <div className="flex flex-col">
          <CategoryTabs category={category} setCategory={setCategory} className="pb-4" />
          <Carousel slidesPerPage={4} >
            {filteredSpeakers.map((speaker, index) => (
              <div key={index} className="flex rounded-lg bg-white mt-4">
                <SpeakerCard speaker={speaker}/>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="font-FiraSans text-white py-8 px-10 md:px-36 text-center">
          <h1 className="font-semibold text-[24px] md:text-[30px] pb-5"> More To Be Announced.</h1>
          <h2 className="font-normal text-[16px] md:text-[28px]">
            We Are Finalizing An Incredible Lineup Of Industry Leaders. Stay Tuned!
          </h2>
      </div>
    </div>
  );
};

export default OurSpeakers;
