'use client';
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id='about'>
    <div className="mt-28 px-4 md:px-8">
      <div className="text-center text-3xl md:text-5xl text-[#003161] font-thin font-serif">
        What is <i><span className="text-[#006A67]">Forum of Diplomacy?</span></i>
      </div>
      <div className="mt-6 flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
        {/* Image Section */}
        <div className="flex justify-center mb-8 lg:mb-0 lg:ml-12">
          <Image
            src="/about_rc.png"
            alt="Perks Image"
            width={300}
            height={250}
            className="rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="text-lg md:text-xl text-[#000B58] font-serif text-justify space-y-4  rounded-xl p-4 w-full lg:w-[60%]">
          <p>
            The Forum of Diplomacy is an enthralling platform where passionate individuals take on the role of delegates in the spirited world of diplomacy. Participants engage in discussions, negotiate, and orate their views to find mutually beneficial solutions to pressing modern issues.
          </p>
          <div className="text-2xl text-center md:text-3xl text-[#003161] font-thin font-serif mt-6">
            All about <span className="text-[#006A67] font-semibold"><u>FOD Model United Nations</u></span>
          </div>
          <div className="text-lg md:text-xl text-[#000B58] font-serif text-justify space-y-4 shadow-lg rounded-xl p-4">
            <p>
              Model United Nations (MUN) fosters engaging debates on global issues, honing skills in diplomacy, research, and public speaking. Committees like UNGA DISEC, UNHRC, Lok Sabha, and International Press provide platforms for delegates to craft resolutions and tackle challenges. Participants gain insights from expert speakers while networking and engaging in thought-provoking discussions.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;
