'use client';
import React from 'react';
import Image from 'next/image';

const Convener = () => {
  return (
    <section id='convenor'>
    <div className="mt-28 px-4">
      <div className="text-center text-3xl md:text-5xl text-[#003161] font-thin font-serif">
        Message from our <i><span className="text-[#006A67]">Convenor</span></i>
      </div>
    
      <div className="mt-6 flex flex-col lg:flex-row justify-center items-center lg:items-start lg:space-x-10">
        {/* Image Section */}
        

        {/* Text Section */}
        <div className="text-lg md:text-xl text-[#000B58] pb-8 flex flex-col items-center lg:items-start font-serif text-justify space-y-4  rounded-xl p-4 w-full lg:w-[60%]">
          <p>
          Fellow delegates and dignitaries,

I warmly welcome you to our Forum of Diplomacy a Model United Nations Conference organised by Rotary Club of Bengal Presidency! Scheduled for the 1st-2nd March, 2025 we will engage in diplomatic discussions, negotiate, and resolve pressing global issues.

I look forward to witnessing your passion, creativity, and dedication to shaping a brighter future.

Let us make this conference an unforgettable experience! <br/>
<br/>

Best regards,<br/>
IPP Rtn. Arka Kumar Nag<br/>
Convenor, Forum of Diplomacy.
          </p>
        </div>
        <div className="flex justify-center mb-8 lg:mb-0 lg:ml-12">
          <Image
            src="/convener.jpg"
            alt="Perks Image"
            width={300}
            height={250}
            className="rounded-lg shadow-lg shadow-black"
          />
        </div>
      </div>
    </div>
    </section>
  );
};

export default Convener;
