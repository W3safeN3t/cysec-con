import React from 'react';
import shield from '../assets/images/cysec-shield.png';
import logo from '../assets/images/cysec-logo.png';
import safenet from '../assets/images/safenet-logo.png';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-[#BFC3F2] px-5 py-10 flex lg:flex-row md:flex-col sm:flex-col md:items-center justify-evenly'>
      <div className='flex items-center md:justify-between md:gap-10 pb-8 md:pb-0'>
        <img src={shield} alt="" />
        <img src={logo} alt="" />
        <img src={safenet} alt="" />
      </div>

      <div className='flex flex-col md:flex-row md:gap-20 px-5 md:px-0'>
        <div>
          <h1 className='text-[#B22222] font-FiraSans font-medium text-[28px]'>Quick Links</h1>
          <div className='flex flex-col md:flex-row md:gap-10 font-FiraSans font-normal text-[15px] pl-3 md:pl-0'>
            <div className='flex flex-col space-y-3 py-2 text-[16px]'>
              <a href="#">Home</a>
              <a href="#about-us">About CYSEC CON</a>
              <a href="#our-speakers">Speakers</a>
            </div>
            <div className='flex flex-col space-y-3 py-2 text-[16px]'> 
              <a 
                href="https://wa.me/+2349138014878?text=Hello%20Cysec-Con,%20my%20name%20is%20[Your%20Name].%20I%20want%20to%20be%20a%20sponsor%20for%20the%20upcoming%20event."
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a Sponsor
              </a>
              <a href="https://tinyurl.com/WeSafeNet" target="_blank">Join Our Community</a>
              <a href="https://tinyurl.com/cysec-con" target="_blank" className='text-[#B22222]'>Get Ticket</a>
            </div>
          </div>
        </div>

        <div>
          <div className='font-FiraSans font-normal text-[15px] '>
            <h1 className='text-[#B22222] font-FiraSans font-medium text-[28px] '>Connect</h1>
            <div className='space-y-3 py-2 text-[16px] pl-3 md:pl-0'>
              <p>Phone: <a href="tel:+2349138014878" className='hover:pointer-cursor font-medium'>+234 913 801 4878</a></p>
              <p>Email: <a href="mailto:WeSafeNetwork@gmail.com" className='font-medium'>wesafenetwork@gmail.com</a></p>
            </div>
          </div>
          <div className='flex py-3 gap-4 pl-3 md:pl-0'>
            <a href="https://www.instagram.com/cysec_con" target="_blank"><FaInstagram size={24} /></a>
            <a href="https://x.com/cysec_con" target="_blank"><FaXTwitter size={24} /></a>
            <a href="https://www.linkedin.com/company/safenethq/" target="_blank"><FaLinkedin size={24} /></a>
            <a href="https://t.me/+QiYpQshW7qtlZTJk" target="_blank"><FaTelegram size={24} /></a>
              {/* https://x.com/wesafenet
              https://www.instagram.com/wesafenet */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
