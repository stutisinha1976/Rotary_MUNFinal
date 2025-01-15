'use client'
import React from 'react';

const Fees = () => {
    return (
        <section id='fees' className="flex justify-center items-center py-8 px-4 md:px-8">
            <div className="text-center w-full max-w-3xl">
                {/* Title */}
                <div className="text-3xl md:text-4xl text-[#003161] font-thin font-serif mb-4">
                    <u><b>Delegation Fees</b></u>
                </div>

                {/* Subtitle */}
                <div className="text-2xl text-[#003161] font-thin font-serif mb-6">
                    <i>Early Bird Registrations</i>
                </div>

                {/* List Section */}
                <div className="flex justify-center items-center">
                    <div className="text-lg md:text-xl text-[#000B58] font-serif rounded-xl p-6 w-full">
                        <ol className="list-disc list-inside space-y-4 text-center sm:text-left">
                            <li>Single delegation: INR 499</li>
                            <li>Double delegation: INR 949</li>
                            <li>International Press: INR 449</li>
                        </ol>
                    </div>
                </div>
                <h1 className='text-lg md:text-xl text-[#000B58] font-serif rounded-xl mt-8 w-full'><u>For foreign delegates:</u></h1>
                <div className="flex justify-center items-center w-full">
                    <div className="text-lg md:text-xl text-[#000B58] font-serif rounded-xl p-6 w-full">
                        <ol className="list-disc list-inside  text-center space-y-4 sm:text-left">
                            <li>Single delegation: INR 499</li>
                            <li>Double delegation: INR 949</li>
                            <li>International Press: INR 449</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Fees;
