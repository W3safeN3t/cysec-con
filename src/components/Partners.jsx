import React from 'react';
import { partners } from '../assets/data/index';
import star6 from '../assets/images/Star 6.png';

const Partners = () => {
  return (
      <div className="bg-[#FFFFFF] py-10 px-6 md:px-16">
        <div className="font-FiraSans font-medium text-[24px] md:text-[36px] pb-8 text-center">
          <p>Partner With Us</p>
        </div>

        <div className="font-FiraSans grid grid-cols-1 md:grid-cols-2 gap-x-10 md:pb-6 relative">
          <img src={star6} alt="star" className='absolute top-2/3 right-6 md:top-64 md:left-40' />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pb-6 md:pb-0">
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center">
                <img src={partner.image} alt={`Partner`} className="w-full h-32 rounded-2xl"/>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div >
              <h3 className="font-medium text-[24px] text-[#1D2EE7] pb-3">Brand Visibility</h3>
              <p className="font-normal text-[16px] text-[#433E3E] w-3/4 md:w-full">Exposure to a highly targeted audience through event marketing, website presence, and social media.</p>
            </div>

            <div>
              <h3 className="font-medium text-[24px] text-[#1D2EE7] pb-3">Networking Opportunities</h3>
              <p className="font-normal text-[16px] text-[#433E3E] w-3/4 md:w-full">Connect with industry leaders, potential clients, and key decision-makers.</p>
            </div>

            <div>
              <h3 className="font-medium text-[24px] text-[#1D2EE7] pb-3">Lead Generation</h3>
              <p className="font-normal text-[16px] text-[#433E3E] w-3/4 md:w-full">Collect high quality leads from engaged participants interested in your products/services.</p>
            </div>

            <div>
              <h3 className="font-medium text-[24px] text-[#1D2EE7] pb-3">Media Coverage</h3>
              <p className="font-normal text-[16px] text-[#433E3E] w-2/3 md:w-5/6">Feature in press releases, conference materials, and digital promotions.</p>
            </div>
          </div>
        </div>

        <div className="px-6 pt-10 py-4 text-center">
          <button className="font-FiraSans font-normal text-[16px] md:text-[24px] rounded-lg px-3 py-3 md:py-2 bg-[#1D2EE7] text-[white]">
          <a 
            href="https://wa.me/+2349138014878?=text=Hello%20Cysec-Con,%20my%20name%20is%20[Your%20Name].%20I%20want%20to%20be%20a%20sponsor%20for%20the%20upcoming%20event."
            target="_blank"
            rel="noopener noreferrer"
          >
              Become a Partner
            </a>
          </button>
        </div>
      </div>
  )
}

export default Partners;
