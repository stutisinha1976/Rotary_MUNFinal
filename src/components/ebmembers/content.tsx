'use client';

import React from 'react';
import TeamCard from './card';
const unga = [{
    name: "Diptesh Banerjee ",
    designation: "Chairperson",
    image: "/dipteshunga.jpg", 
    social: "", 
  },
  {
    name: "Swapneel Dutta ",
    designation: "Co-Chairperson",
    image: "/swapnaneelunga.jpg", 
    social: "", 
  },
  {
    name: "Rupam Saha ",
    designation: "Vice Chairperson",
    image: "/rupamunga.jpg", 
    social: "", 
  }];
  const ls = [{
    name: "Shounak Banerjee Chowdhury",
    designation: "Speaker",
    image: "/shounakls.jpg", 
    social: "", 
  },
  {
    name: "Daivam Nishant ",
    designation: "Co-Deputy Speaker",
    image: "/daivamls.jpg", 
    social: "", 
  },
  {
    name: "Sananda Ray ",
    designation: "Co-Deputy Speaker",
    image: "/sanandals.jpg", 
    social: "", 
  }];
  
  const hrc = [{
    name: "Rupaz Bhadra",
    designation: "Chairperson",
    image: "/rupazhrc.jpg", 
    social: "", 
  },
  {
    name: "Ribhu Banerjee ",
    designation: "Co-Vice Chairperson",
    image: "/ribhuhrc.jpg", 
    social: "", 
  },
  {
    name: "Akashdeep Sen ",
    designation: "Co-Vice Chairperson",
    image: "/akashdeephrc.jpg", 
    social: "", 
  }];
  const wha = [{
    name: "Sayanabha Chandra",
    designation: "Co-Chairperson",
    image: "/sayanabhaunga.jpg", 
    social: "", 
  },
  {
    name: "Aparna Ishweri ",
    designation: "Co-Vice Chairperson",
    image: "/aparnawha.jpg", 
    social: "", 
  },
  ];
  const ip = [{
    name: "Sweta Sahoo",
    designation: "Head of International Press",
    image: "/swetaip.jpg", 
    social: "", 
  },
  {
    name: "Subhayan Malick ",
    designation: "Photographer-in-chief",
    image: "/subhayanip.jpg", 
    social: "", 
  },
  ];
  const Content = () => {
  return (
    <div className="px-4 md:px-8 text-center">
      <h1 className="text-3xl md:text-5xl text-[#003161] font-thin font-serif ">
       Meet our <span className="text-[#006A67]">Executive Board members</span> for RCMUN 2025
      </h1>
      <h2 className="text-3xl mt-12 md:text-3xl text-[#003161] font-thin font-serif ">
         <span className="text-[#003161]"><span className='font-bold'>United Nations General Assembly</span>:<br/> Disarmament and International Security Committee</span>
      </h2>
      {/* Team Members Section */}
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {unga.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
        </div>
        <h2 className="text-3xl mt-12 md:text-3xl text-[#003161] font-thin font-serif ">
         <span className="text-[#003161]"><span className='font-bold'>Lok Sabha</span><br/> </span>
      </h2>
      {/* Team Members Section */}
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {ls.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
        </div>
        <h2 className="text-3xl mt-12 md:text-3xl text-[#003161] font-thin font-serif ">
         <span className="text-[#003161]"><span className='font-bold'>United Nations Human Rights Council</span><br/> </span>
      </h2>
      {/* Team Members Section */}
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {hrc.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
        </div>
        <h2 className="text-3xl mt-12 md:text-3xl text-[#003161] font-thin font-serif ">
         <span className="text-[#003161]"><span className='font-bold'>World Health Assembly</span><br/> </span>
      </h2>
      {/* Team Members Section */}
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {wha.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
        </div>
        <h2 className="text-3xl mt-12 md:text-3xl text-[#003161] font-thin font-serif ">
         <span className="text-[#003161]"><span className='font-bold'>International Press</span><br/> </span>
      </h2>
      {/* Team Members Section */}
      <div className="mt-10 flex flex-wrap justify-center gap-6 pb-8">
        {ip.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
        </div>
        </div>
         );
        };
        
        export default Content;