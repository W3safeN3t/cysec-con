import React, { useState } from 'react';
import logo from '../assets/images/cysec-logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='sticky top-0 z-50 bg-white py-0 md:py-3 font-FiraSans'>
      <div className='container mx-auto flex justify-between items-center md:px-10'>
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-8 md:gap-12 text-[20px] font-FiraSans font-normal">
            <li>
              <a href="#about-us" className="hover:bg-[#FDBFBF] rounded-md p-2">About Us</a>
            </li>
            <li>
              <a href="#our-speakers" className="hover:bg-[#FDBFBF] rounded-md p-2">Our Speakers</a>
            </li>
            <li>
              <a href="https://tinyurl.com/WeSafeNet" target="_blank" className="hover:bg-[#FDBFBF] rounded-md p-2">Join Our Community</a>
            </li>
            <button className="text-white bg-[#6B0000] rounded-md p-3 hover:bg-[#FDBFBF]">
              <a href="https://tinyurl.com/cysec-con" target="_blank">Get Your Ticket</a>
            </button>
          </ul>
        </div>

        <div className="md:hidden flex items-center pr-6">
          <button onClick={toggleMenu} className="text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white border-t border-gray-800 px-6`}>
        <ul className="flex flex-col space-y-6 py-6">
          <li>
            <a href="#about-us" className="hover:bg-[#FDBFBF] rounded-md p-2">About Us</a>
          </li>
          <li>
            <a href="#our-speakers" className="hover:bg-[#FDBFBF] rounded-md p-2">Our Speakers</a>
          </li>
          <li>
            <a href="https://tinyurl.com/WeSafeNet" target="_blank" className="hover:bg-[#FDBFBF] rounded-md p-2">Join Our Community</a>
          </li>
          <button className="text-white bg-[#6B0000] rounded-md p-2 hover:bg-[#FDBFBF] flex justify-start items-center">
            <a href="https://tinyurl.com/cysec-con" target="_blank">Get Your Ticket</a>
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
