'use client';
import React from 'react';
import Image from 'next/image';

const Secgen = () => {
  return (
    <section id="secgen">
      <div className="mt-28 px-4">
        <div className="text-center text-3xl md:text-5xl text-[#003161] font-thin font-serif">
          Message from the <i><span className="text-[#006A67]">Secretary General</span></i>
        </div>

        <div className="mt-6 flex flex-col lg:flex-row items-center justify-center lg:items-start lg:space-x-8">
          {/* Image Section */}
          <div className="flex justify-center mb-8 lg:mb-0 lg:ml-12">
            <Image
              src="/secgen.jpg"
              alt="Secretary General"
              width={350}
              height={250}
              className="rounded-lg shadow-lg shadow-black"
              priority
            />
          </div>

          {/* Text Section */}
          <div className="text-lg md:text-xl text-[#000B58] pb-8 flex flex-col items-center lg:items-start font-serif text-justify space-y-4 rounded-xl p-4 w-full lg:w-[55%]">
            <p>
              Dear delegates, faculty advisors, and esteemed guests,
              <br />
              I warmly welcome you to Rotary Forum of Diplomacy, a Model United Nations conference organised by Rotary Club of Bengal Presidency. This event embodies our commitment to fostering global understanding, peace, and cooperation. As we navigate the complexities of our world, your engagement and ideas are crucial in shaping a brighter future.

              <br /><br />
              Through this conference, we aim to empower you with the skills, knowledge, and mindset necessary to become informed global citizens and future leaders. Our dedicated team has worked tirelessly to create a dynamic and enriching experience, featuring thought-provoking committees, engaging speakers, and cultural exchange opportunities.
              <br /><br />
              I encourage you to embrace this unique opportunity to connect, learn, and grow with fellow delegates from around the world. Together, let&apos;s harness the power of diplomacy, collaboration, and negotiation to address pressing global challenges.
              <br /><br />
              Thank you for your participation, and I wish you a successful and enriching Model United Nations experience!
              <br /><br />
              Sincerely,<br />
              Soumodip Adhikary <br />
              Secretary General
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Secgen;
