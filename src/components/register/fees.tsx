'use client'
import React from 'react';

const Fees = () => {
    return (
        <section id='fees' className="flex flex-col justify-between items-center py-8 px-4 md:px-8 min-h-screen">
            <div className="text-center w-full max-w-4xl">
                {/* Title */}
                <div className="text-3xl md:text-4xl text-[#006A67] font-thin font-serif mb-6">
                    <u><b>Delegation Fees</b></u>
                </div>

                {/* Subtitle for Early Bird */}
                <div className="text-3xl text-[#003161] font-thin font-serif rounded-lg  mb-6 shadow-lg shadow-black">
                    <i>Early Bird Registrations</i>
                </div>

                {/* Early Bird List Section - Displayed in a row */}
                <div className="flex flex-wrap justify-center items-center space-x-8 mb-8">
                    <div className="text-lg md:text-xl text-[#006A67] font-serif rounded-xl p-6 w-full sm:w-[45%] lg:w-[40%]">
                        <ol className="list-disc list-inside space-y-4 sm:text-left text-center">
                            <li>Single delegation: INR 499</li>
                            <li>Double delegation: INR 949</li>
                            <li>International Press: INR 449</li>
                        </ol>
                    </div>
                </div>

                {/* Subtitle for Foreign Delegates (Early Bird) */}
                <h1 className="text-lg md:text-2xl font-semibold text-[#000B58] font-serif rounded-xl mt-8 w-full">For foreign delegates:</h1>
                <div className="flex flex-wrap justify-center items-center space-x-8 mb-8">
                    <div className="text-lg md:text-xl text-[#006A67] font-serif rounded-xl w-full sm:w-[45%] lg:w-[30%]">
                        <ol className="list-disc list-inside mt-2 space-y-4 sm:text-left text-center">
                            <li>Single delegation: 10 USD</li>
                            <li>Double delegation: 20 USD</li>
                            <li>International Press: 7 USD</li>
                        </ol>
                    </div>
                </div>

                {/* Subtitle for Round 1 and Round 2 Registrations */}
                <div className="text-3xl text-[#003161] font-thin font-serif mb-2 mt-6  rounded-lg shadow-lg shadow-black">
                    <i>Round 1 and Round 2 Registrations</i>
                </div>

                {/* Round 1 and 2 List Section */}
                <div className="flex flex-wrap justify-center items-center space-x-8 mb-8">
                    <div className="text-lg md:text-xl text-[#006A67] font-serif rounded-xl p-6 w-full sm:w-[45%] lg:w-[40%]">
                        <ol className="list-disc list-inside space-y-4 sm:text-left text-center">
                            <li>Single delegation: INR 699</li>
                            <li>Double delegation: INR 1349</li>
                            <li>International Press: INR 649</li>
                        </ol>
                    </div>
                </div>

                {/* Subtitle for Foreign Delegates (Round 1 & 2) */}
                <h1 className="text-lg md:text-2xl text-[#000B58] font-serif rounded-xl mt-8 w-full">For foreign delegates:</h1>
                <div className="flex flex-wrap justify-center items-center space-x-8 mb-8">
                    <div className="text-lg md:text-xl text-[#006A67] font-serif rounded-xl w-full sm:w-[45%] lg:w-[30%]">
                        <ol className="list-disc list-inside space-y-4 sm:text-left text-center">
                            <li>Single delegation: 12 USD</li>
                            <li>Double delegation: 22 USD</li>
                            <li>International Press: 10 USD</li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* Portfolio Button - Positioned at the end */}
            <div className="flex flex-col items-center justify-center mt-8 mb-4 text-lg md:text-xl text-[#000B58] font-serif rounded-xl w-full">
                For Portfolio Matrix, 
                <a href="https://docs.google.com/spreadsheets/d/1WI1XFeci-PS9vzVs5qYbZz-3Waw4uirYjCw9Tq-5oG4/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <button className="bg-[#006A67] text-[#FFF4B7] py-2 px-6 mt-2 rounded-lg hover:bg-[#000B58]">
                        Click here
                    </button>
                </a>
            </div>
        </section>
    );
};

export default Fees;
