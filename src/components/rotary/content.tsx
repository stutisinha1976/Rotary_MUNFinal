'use client';
import React from 'react';
import Image from 'next/image';

const Content = () => {
  return (
    <section id='convenor'>
      <div className=" px-4 md:px-8">
        <div className="text-center text-3xl  md:text-5xl text-[#003161] font-thin font-serif">
            <br/>
          Introducing <i><span className="text-[#006A67]">Rotary</span></i>
        </div>

        <div className="mt-6 flex flex-col lg:flex-row justify-center items-center lg:items-start lg:space-x-10">
          {/* Text Section */}
          <div className="text-lg md:text-xl text-[#000B58] flex flex-col items-center lg:items-start font-serif text-justify space-y-4 shadow-lg rounded-xl p-6 w-full lg:w-[60%] ">
            <p>
              With 1.6 million leaders, professionals, and community members worldwide, Rotary is a global organization dedicated to serving others, upholding honesty, and fostering goodwill and peace. For more than a century, Rotary has been guided by the slogan "Service Above Self," directing enthusiasm, vigor, and creativity into long-term initiatives that tackle pressing worldwide issues including poverty, illiteracy, illness, and more.
            </p>
            <p>
              With the mission statement, "Heal the World and Make it a Better Place," Rotary members strive to empower people, strengthen communities, and make enduring, constructive contributions. Their steadfast dedication to global service and humanitarian endeavors guarantees ongoing advancements toward a more just and peaceful world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
