import React from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SpeakerCard = ({ speaker }) => {
  return (
    <div className="rounded-lg shadow-lg group hover:shadow-2xl flex flex-col">
      <div className="relative">
        <img src={speaker.image} alt={speaker.name} className="w-full"/>
        <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
          {speaker.social.facebook && (
            <a href={speaker.social.facebook} target="_blank" rel="noopener noreferrer" title="Facebook" className="speaker-sm">
              <FaFacebook size={20} className="text-blue-600" />
            </a>
          )}
          {speaker.social.twitter && (
            <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer" title="Twitter" className="speaker-sm">
              <FaXTwitter size={20} className="text-black-600" />
            </a>
          )}
          {speaker.social.instagram && (
            <a href={speaker.social.instagram} target="_blank" rel="noopener noreferrer" title="Instagram" className="speaker-sm">
              <FaInstagram size={20} className="text-pink-500" />
            </a>
          )}
          {speaker.social.github && (
            <a href={speaker.social.github} target="_blank" rel="noopener noreferrer" title="GitHub" className="speaker-sm">
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
