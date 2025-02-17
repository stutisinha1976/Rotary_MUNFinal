'use client';

import React from 'react';
import TeamCard from './card';

const teamMembers = [
  {
    name: "Sirsanya Bandopadhyay ",
    designation: "President",
    image: "/president.jpg", // Use actual image path in /public
    social: "",
  },
  {
    name: "Arka Kumar Nag",
    designation: "Convener",
    image: "/convener.jpg",
    social: "",
  },
  {
    name: "Subham Das",
    designation: "Principal Advisor",
    image: "/advisor.jpg",
    social: "",
  },
  
  {
    name: " Arinda Sarkar",
    designation: "Logistical Advisor",
    image: "/arinda.jpg",
    social: "https://www.facebook.com/share/1G8UPEc6BB/",
  }
];
const top4 = [
  {
    name: "Soumodip Adhikary ",
    designation: "Secretary General",
    image: "/secgen.jpg", // Use actual image path in /public
    social: "https://www.instagram.com/_s.m.o.k.e.s.c.r.e.e.n_/",
  },

  {
    name: "Rajdeep Mondal ",
    designation: "Director General",
    image: "/rajdeep.jpg", // Use actual image path in /public
    social: "https://www.instagram.com/rajdeep__mondal?igsh=ZHd5MmNjanBoMjhw",
  },
  {
    name: "Arijit Majumder ",
    designation: "Charge D'Affairs",
    image: "/arijit.jpg", // Use actual image path in /public
    social: " https://www.instagram.com/arijitxd?igsh=MTFwb2ozMWNya3lnZA==",
  },
  {
    name: "Shrobana Sengupta ",
    designation: "Equity Officer",
    image: "/shrobana.jpg", // Use actual image path in /public
    social: " ",
  },
];
const content = [
  {
    name: "Medha Banerjee  ",
    designation: "Content Writer",
    image: "/medha.jpeg", // Use actual image path in /public
    social: "https://www.instagram.com/c.a.r.e.l.e.s.s_w.h.i.s.p.e.r?igsh=MWgzeXlpaHJuYjNkZQ==",
  },

  {
    name: "Sristi Modak ",
    designation: "Content Writer",
    image: "/sristi.jpg", // Use actual image path in /public
    social: "https://www.instagram.com/iti_raai?igsh=Nmh6MDk2N2doYXk0",
  },
  {
    name: "Chahat Jaiswal  ",
    designation: "Content Writer",
    image: "/chahat.jpg", // Use actual image path in /public
    social: " https://www.linkedin.com/in/chahat-jaiswal-766851272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  
];
const social = [
  {
    name: "Sattwik Singha Roy   ",
    designation: "Social Media manager",
    image: "/sattwik.jpg", // Use actual image path in /public
    social: "https://www.instagram.com/sattwik_10x?igsh=YmRjbTF3emhoajZm",
  },

  {
    name: "Upahar Jana  ",
    designation: "Social Media manager",
    image: "/upahar.jpeg", // Use actual image path in /public
    social: "https://www.instagram.com/up_rupam_keshav",
  },
  
  
];
const del= [ {
  name: "Rupesh kr Jha ",
  designation: "Delegate Affairs",
  image: "/rupesh.jpg", // Use actual image path in /public
  social: "https://www.instagram.com/rupeshjha2109?igsh=bmMzZHNzYnF3ZTJo",
},]
const tech= [ {
  name: "Stuti Sinha ",
  designation: "Technical Affairs",
  image: "/stuti.jpg", // Use actual image path in /public
  social: "https://www.instagram.com/rainbownailsc/",
},]
const ext= [ {
  name: "Sreaya Samanta  ",
  designation: "External Affairs ",
  image: "/sreaya.jpg", // Use actual image path in /public
  social: "https://www.instagram.com/rainbownailsc/",
},]
const marketing= [ {
  name: "Debjoty Karkun   ",
  designation: "Marketing and Sponsorships ",
  image: "/debjoty.jpg", // Use actual image path in /public
  social: "https://www.instagram.com/okayydeb_?utm_source=qr&igsh=ZWFzNHh2Y2NtcXdw",
},]
const hospitality= [ {
  name: "Bhavna Barnwal   ",
  designation: "Hospitality ",
  image: "/bhavna.jpg", // Use actual image path in /public
  social: "https://www.instagram.com/___the_groovy_angel___?igsh=MThvM2R1ZmFxMTBkcw==",
},]
const logistics= [ {
  name: "Kaushik Kr Trivedi ",
  designation: "Logistics ",
  image: "/kaushik.webp", // Use actual image path in /public
social: "Instagram- https://www.instagram.com/kaushiktrivedi_?igsh=MXNkOHgxcDMyY2F5dw==",
},
{
  name: "Rahul Gupta ",
  designation: "External Affairs ",
  image: "/kaushik.webp", // Use actual image path in /public
social: "Instagram- https://www.instagram.com/kaushiktrivedi_?igsh=MXNkOHgxcDMyY2F5dw==",
},
{
  name: "Kaushik Kr Trivedi ",
  designation: "External Affairs ",
  image: "/kaushik.webp", // Use actual image path in /public
social: "Instagram- https://www.instagram.com/kaushiktrivedi_?igsh=MXNkOHgxcDMyY2F5dw==",
},]
const graphics= [ {
  name: "Hrisikesh pan  ",
  designation: "Graphics Designer",
  image: "/hrishikesh.jpg", // Use actual image path in /public
  social: "https://www.instagram.com/its_hrishi_006?igsh=c3FkM2N6ODBlM2Ey",
},
{
  name: "Jisita Dhar  ",
  designation: "Graphics Designer",
  image: "/jisita.jpg", // Use actual image path in /public
  social: "https://www.instagram.com/your.jishi.23?igsh=MThuNXJsem5ubXNiMA==",
},]
const Content = () => {
  return (
    <div className="px-4 md:px-8 text-center">
      <h1 className="text-3xl md:text-5xl text-[#003161] font-thin font-serif ">
       Introducing our <span className="text-[#006A67]">Team</span> for RCMUN 2025
      </h1>
      <h2 className="text-3xl mt-12 md:text-3xl text-[#003161] font-thin font-serif ">
         <span className="text-[#003161]">Rotary Team</span>
      </h2>
      {/* Team Members Section */}
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
      <h2 className="text-3xl mt-12 md:text-3xl text-[#003161] font-thin font-serif ">
         <span className="text-[#003161]">Top 4 Board Members</span>
      </h2>
      <div className="mt-10 flex flex-wrap justify-center gap-6">
       
        {top4.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
      <h1 className="text-3xl mt-16 md:text-4xl text-[#003161] font-thin font-serif ">
       Under the <span className="text-[#006A67]"> <i>Secretary General</i></span> 
      </h1>
      <h2 className="text-3xl mt-12 md:text-3xl text-[#003161] font-thin font-serif ">
         <span className="text-[#003161]">USG Delegate Affairs</span>
      </h2>
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {del.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
    </div>
    <h2 className="text-3xl mt-12 md:text-3xl text-[#003161] font-thin font-serif ">
         <span className="text-[#003161]">USG Technical Affairs</span>
      </h2>
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {tech.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
    </div>
    <h2 className="text-3xl mt-12 md:text-3xl text-[#003161] font-thin font-serif ">
         <span className="text-[#003161]">USG External Affairs</span>
      </h2>
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {ext.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
    </div>
    <h2 className="text-3xl mt-12 md:text-3xl text-[#003161] font-thin font-serif ">
         <span className="text-[#003161]">USG Graphics</span>
      </h2>
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {graphics.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
    </div>
    <h2 className="text-3xl mt-12 md:text-3xl text-[#003161] font-thin font-serif ">
         <span className="text-[#003161]">USG Content</span>
      </h2>
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {content.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
    </div>
    <h2 className="text-3xl mt-12 md:text-3xl text-[#003161] font-thin font-serif ">
         <span className="text-[#003161]">USG Social Media and Outreach</span>
      </h2>
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {social.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
    </div>
    
    <h2 className="text-3xl mt-12 md:text-3xl text-[#003161] font-thin font-serif ">
         <span className="text-[#003161]">USG Marketing and Sponsorships</span>
      </h2>
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {marketing.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
    </div>
    <h2 className="text-3xl mt-12 md:text-3xl text-[#003161] font-thin font-serif ">
         <span className="text-[#003161]">USG Hospitality</span>
      </h2>
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {hospitality.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
    </div>
    <h2 className="text-3xl mt-12 md:text-3xl text-[#003161] font-thin font-serif ">
         <span className="text-[#003161]">USG Logistics</span>
      </h2>
      <div className="mt-10 pb-10 flex flex-wrap justify-center gap-6">
        {logistics.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
    </div>
   
    </div>
  );
};

export default Content;
