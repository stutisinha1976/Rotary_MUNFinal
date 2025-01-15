'use client';
import React from 'react';
import Image from 'next/image';

const President = () => {
  return (
    <section id='president'>
    <div className="mt-28 px-4">
      <div className="text-center text-3xl md:text-5xl text-[#003161] font-thin font-serif">
        Message from our <i><span className="text-[#006A67]">President</span></i>
      </div>
    
      <div className="mt-6 flex flex-col lg:flex-row items-center justify-center lg:items-start lg:space-x-8">
        {/* Image Section */}
        <div className="flex justify-center mb-8 lg:mb-0 lg:ml-12">
          <Image
            src="/president.jpg"
            alt="Perks Image"
            width={300}
            height={250}
            className="rounded-lg shadow-lg shadow-black"
          />
        </div>

        {/* Text Section */}
        <div className="text-lg md:text-xl text-[#000B58] pb-8 flex flex-col items-center lg:items-start font-serif text-justify space-y-4 shadow-lg rounded-xl p-4 w-full lg:w-[55%]">
          <p>
            Fellow Rotarians, young leaders and everyone reading this

            I invite you to Forum of Diplomacy organised by our Rotary Club of Bengal Presidency, a Model United Nations conference which going to be the first of its kind in Rotary District 3291. This event fosters global understanding, peace, and cooperation.

            Develop essential skills in public speaking, critical thinking, and teamwork while shaping a brighter future.<br/>
            <br/>

            Best regards,<br/>
            Rtn. Sirsanya Bandopadhyay <br/>
            President, Rotary Club of Bengal Presidency
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default President;
