import React from "react";
import { FaAward, FaBriefcase, FaFlag, FaMicrophone, FaUsers, FaTools, FaGamepad, FaShoppingBag } from "react-icons/fa";
import bgImage from "../assets/images/Frame1.png";
import star from "../assets/images/Star.png";
import halfstar from "../assets/images/Halfstar.png"

const About = () => {
  const items = [
    { icon: <FaAward className="text-white text-3xl" />, title: "Awards & Recognitions", text: "Celebrate outstanding achievements in cybersecurity with exclusive awards." },
    { icon: <FaBriefcase className="text-white text-3xl" />, title: "Career Villages", text: "Connect with mentors, polish your skills, and unlock pathways to your dream cybersecurity career." },
    { icon: <FaFlag className="text-white text-3xl" />, title: "CTF Challenge", text: "Put your skills to the test in thrilling cybersecurity challenges." },
    { icon: <FaMicrophone className="text-white text-3xl" />, title: "Experts Talks", text: "Learn from top cybersecurity leaders and innovators." },
    { icon: <FaUsers className="text-white text-3xl" />, title: "Networking", text: "Build valuable connections with industry professionals." },
    { icon: <FaTools className="text-white text-3xl" />, title: "Workshop", text: "Master practical techniques through hands-on training." },
    { icon: <FaGamepad className="text-white text-3xl" />, title: "Side Attraction", text: "Fun hands-on activities that explore real-world hacking techniques." },
    { icon: <FaShoppingBag className="text-white text-3xl" />, title: "Swag & Merchandise", text: "Take home exclusive event-themed goodies." },
  ];

  return (
    <div>
      <div className="md:p-20 py-16 bg-cover" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="bg-red-300 w-4/5 mx-auto rounded-xl p-8 md:p-10 relative text-center" >
          <div className="absolute -top-12 -left-12 md:-top-10 -left-10">
            <img src={star} alt="Star" className="scale-75 md:scale-100"/>
          </div>
          <h5 className="font-FiraSans font-medium text-[24px] md:text-[36px] pt-2 md:pt-10 mb-6 md:mb-8 ">About Us</h5>
          <p className="font-FiraSans font-normal text-[18px] md:text-[24px] md:pb-5 text-center
          ">
            CYSEC CON is not just another conference, it is an experience. CYSEC-CON is designed for both cybersecurity professionals and individuals from other fields. 
            While cybersecurity experts will gain hands-on technical skills, professionals from diverse industries can benefit from some of our Career Village sessions, 
            which focus on enhancing soft skills, refining job application strategies, and unlocking new career opportunities.
          </p>
        </div>
      </div>
      
      <div className="bg-indigo-300 w-full py-8 font-FiraSans relative">
        <h5 className="text-[24px] md:text-[36px] font-medium text-center mb-6">What to Expect</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <div key={index} className="flex items-center rounded-lg p-4">
              <div className="flex items-center justify-center bg-blue-700 rounded-full w-16 h-16 mr-4 aspect-square">
                {item.icon}
              </div>
              <div>
                <h6 className="text-[18px] md:text-[24px] font-medium">{item.title}</h6>
                <p className="text-[16px] text-[#433E3E]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute -bottom-14 -right-0">
            <img src={halfstar} alt="Half-star"/>
          </div>
      </div>
    </div>
  );
};

export default About;
