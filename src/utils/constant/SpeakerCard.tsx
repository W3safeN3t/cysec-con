import React from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const SpeakerCard = ({ speaker }) => {
  return (
    <div className="rounded-lg shadow-lg group hover:shadow-2xl w-full h-full flex flex-col">
      <div className="relative w-full h-72">
        <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover rounded-t-lg" />
        <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
          {speaker.social.facebook && (
            <a href={speaker.social.facebook} target="_blank" rel="noopener noreferrer" title="Facebook" className="bg-white rounded-full p-2 shadow">
              <FaFacebook size={20} className="text-blue-600" />
            </a>
          )}
          {speaker.social.instagram && (
            <a href={speaker.social.instagram} target="_blank" rel="noopener noreferrer" title="Instagram" className="bg-white rounded-full p-2 shadow">
              <FaInstagram size={20} className="text-pink-500" />
            </a>
          )}
          {speaker.social.github && (
            <a href={speaker.social.github} target="_blank" rel="noopener noreferrer" title="GitHub" className="bg-white rounded-full p-2 shadow">
              <FaGithub size={20} className="text-gray-800" />
            </a>
          )}
        </div>
      </div>
      <div className="p-4 flex-grow">
        <h2 className="font-FiraSans font-semibold text-[18px] mb-1">{speaker.name}</h2>
        <p className="font-FiraSans font-semibold text-[#433E3E] text-[14px] mb-4">{speaker.title}</p>
        <p className="font-FiraSans font-normal text-[#433E3E] text-[12px]">{speaker.description}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
