'use client';
import React from 'react';

const Content = () => {
  return (
    <section
      id="team"
      className="flex items-center justify-center h-screen overflow-hidden"
    >
      <div className="px-4 md:px-8 flex flex-col items-center animate-fadeIn">
        <div className="text-center text-3xl md:text-5xl text-[#003161] font-thin font-serif">
          <br />
          Coming <i><span className="text-[#006A67]">soon<span className="dots">...</span></span></i>
        </div>

        <div className="mt-6 flex flex-col lg:flex-row justify-center lg:items-center lg:space-x-10">
          {/* Text Section */}
          <div className="text-lg md:text-2xl text-[#000B58] flex flex-col items-center font-serif text-center space-y-4 p-6 w-full lg:w-[60%] animate-bounce-once">
            <p>Stay tuned.</p>
          </div>
        </div>
      </div>

      {/* Tailwind Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounceOnce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes dotFlashing {
          0% {
            opacity: 0.2;
          }
          20% {
            opacity: 1;
          }
          100% {
            opacity: 0.2;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out forwards;
        }

        .animate-bounce-once {
          animation: bounceOnce 1.2s ease-in-out;
        }

        .dots {
          display: inline-flex;
          align-items: center;
        }

        .dots::before {
          content: '.';
          animation: dotFlashing 1.5s infinite 0s ease-in-out;
        }

        .dots::after {
          content: '..';
          animation: dotFlashing 1.5s infinite 0.2s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Content;
