'use client';
import React from 'react';


const Content = () => {
  return (
    <section id='convenor'>
      <div className=" px-4 md:px-8">
        <div className="text-center text-3xl  md:text-5xl text-[#003161] font-thin font-serif">
            <br/>
          Register <span className="text-[#006A67]">now</span>
        </div>

        <div className="mt-6 flex flex-col lg:flex-row justify-center items-center lg:items-start lg:space-x-10">
          {/* Text Section */}
          <div className="text-lg md:text-xl text-[#000B58] flex flex-col items-center lg:items-start font-serif text-justify space-y-4  rounded-xl p-6 w-full lg:w-[60%] ">
            <p>
            Rotary Club of Bengal Presidency brings to you Rotary Forum of Diplomacy 2025, an open house Model United Nations, on March 1st and 2nd, 2025. We would be glad to have you as a part of this event. We look forward to hosting you soon.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
