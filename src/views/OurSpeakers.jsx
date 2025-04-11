import React from "react";
import SpeakerCard from "../components/SpeakerCard";
import { speakers } from "../assets/data/index";
import Carousel from "../components/Carousel";

const groupByCategory = (speakers) => {
  return speakers.reduce((acc, speaker) => {
    const category = speaker.category || "Uncategorized";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(speaker);
    return acc;
  }, {});
};

const OurSpeakers = () => {
  const groupedSpeakers = groupByCategory(speakers);

  return (
    <div className="bg-[#6B0000]">
      <div className="py-5">
        {Object.entries(groupedSpeakers).map(([category, speakers]) => (
          <div key={category} className="mb-10">
            <div className="bg-[#A66666]">
              <h3 className="font-semibold text-white text-[24px] md:text-[30px] text-center">
                Meet Our {category}
              </h3>
            </div>
            <Carousel slidesPerPage={3}>
              {speakers.map((speaker, index) => (
                <div key={index} className="flex rounded-3xl bg-white mt-4">
                  <SpeakerCard speaker={speaker} />
                </div>
              ))}
            </Carousel>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSpeakers;
