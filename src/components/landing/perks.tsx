'use client';
import React from 'react';
import Image from 'next/image';

const Perks = () => {
  return (
    <section id='perks'>
    <div className="mt-20 px-4 md:px-12">
    <div className="text-center text-3xl md:text-5xl text-[#003161] font-thin font-serif">
  Perks of being a part of 
  <i>
    <span className="block md:inline text-[#006A67]">&nbsp;Forum of Diplomacy MUN</span>
  </i>
</div>

      <div className="mt-6 flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 justify-center">
        
        {/* Left Section (Perks List) */}
        <div className="w-full lg:w-1/2 pl-40 mb-8 lg:mb-0">
          <ul className="text-lg md:text-2xl text-[#000B58] font-serif list-disc space-y-3 p-4">
            <li>Engage in realistic simulations of UN committees, addressing global issues.</li>
            <li>Connect with delegates from diverse backgrounds while enhancing research, public speaking, and negotiation skills.</li>
            <li>Beginner-friendly platform with certificates for all participants and cash prizes for merit holders.</li>
            <li>Opportunities for internships and social media recognition for winners.</li>
          </ul>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full lg:w-1/2 flex justify-center ">
          <Image
            src="/perks.png"
            alt="Perks Image"
            width={400}
            height={400}
            className="object-contain rounded-lg"
          />
        </div>
        
      </div>
    </div>
    </section>
  );
};

export default Perks;
