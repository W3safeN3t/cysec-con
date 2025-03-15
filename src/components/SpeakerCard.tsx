import React from 'react';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa'; 

const SpeakerCard = ({ speaker }) => {
  return (
    <div className="rounded-lg shadow-lg sm:hover:shadow-2xl transform group">
      <div className="relative">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-full h-80 lg:h-60 object-cover rounded-t-lg md:group-hover:rounded-lg md:group-hover:scale-105 transition-all duration-300"
        />
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col space-y-3">
          {speaker.social.facebook && (
            <div className="bg-white rounded-full p-2 shadow">
                <a
                title='Facebook'
                href={speaker.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition"
                >
                <FaFacebook size={20} />
                </a>
            </div>
          )}
          {speaker.social.instagram && (
            <div className="bg-white rounded-full p-2 shadow">
              <a
              title='Instagram'
              href={speaker.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 transition"
              >
              <FaInstagram size={20} />
              </a>
            </div>
          )}
          {speaker.social.github && (
            <div className="bg-white rounded-full p-2 shadow">
                <a
                title='Github'
                href={speaker.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black transition"
                >
                <FaGithub size={20} />
                </a>
            </div>
          )}
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 font-FiraSans">{speaker.name}</h2>
        <p className="text-gray-600 text-sm mb-3 font-FiraSans">{speaker.title}</p>
        <p className="text-gray-500 text-sm">{speaker.description}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
