import React from 'react';
import pic from '../assets/images/hero-logo.png';
import calendar from '../assets/images/calendar-icon.png';
import map from '../assets/images/pin-icon.png';
import ticket from "../assets/images/ticket-icon.png";

const HeroSection = () => {
  return (
    <div>
      <div className='mx-auto p-6 md:px-20 flex flex-col md:flex-row justify-between items-center'>
        <div>
          <h1 className='text-[20px] md:text-[24px] font-medium font-FiraSans'>
            <span className='text-[#6B0000]'>SafeNet Society</span> Presents
          </h1>
          <h1 className='font-ElectroHolic text-[36px] md:text-[56px]'>
            CYSEC-CON 2025
          </h1>
          <h1 className='text-[24px] md:text-[50px] font-FiraSans font-bold leading-tight'>
            Mastering Cybersecurity Through <span className='text-[#6B0000]'>Action</span>
          </h1>
          <p className='font-RobotoSerif text-[14px] md:text-[16px] pt-1 pb-3 md:pt-5'>
            Nigeria's first hands-on cybersecurity event, designed to turn theory to mastery.
          </p>
        </div>

        <div>
          <img src={pic} alt="" className="w-[600px] md:w-[700px] h-auto" />
        </div>
      </div>


      <div className='bg-[#6B0000] text-white py-10 flex flex-col lg:flex-row lg:items-center justify-between px-10 md:px-20'>
        <div className='flex items-center gap-4 py-5 md:m-0'>
          <img src={calendar} alt="" />
          <p className='font-RobotoSerif text-[16px] md:text-[20px]'>April 12th, 2025</p>
        </div>

        <div className='flex items-center gap-4 py-5 md:m-0'>
          <img src={map} alt="" />
          <div className='font-RobotoSerif text-[16px] md:text-[20px]'>
            <p>International Conference Center,</p>
            <p>Lead City University, Oyo</p>
          </div>
        </div>

        <div className='flex items-center py-5 md:m-0'>
          <button className='w-full md:w-auto text-white border border-white font-FiraSans font-bold p-3 rounded-md hover:bg-[#FDBFBF] hover:border-transparent transition flex justify-center items-center gap-2'>
            <a href="https://tinyurl.com/cysec-con" target="_blank" className='font-FiraSans font-normal text-[20px] md:text-[26px] text-center'>Get Your Ticket</a>
            <img src={ticket} alt="Get-Your-Ticket"/>
          </button>
        </div>
      </div>

    </div>
  )
}

export default HeroSection;
