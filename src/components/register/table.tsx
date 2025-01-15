'use client';
import React from 'react';

const DelegationTable = () => {
  const committees = [
    { name: "United Nations General Assembly - DISEC", modes: "Single Delegation / Double Delegation" },
    { name: "United Nations Human Rights Council (UNHRC)", modes: "Single Delegation" },
    { name: "Lok Sabha", modes: "Single Delegation / Double Delegation" },
    { name: "International Press (IP)", modes: "Not Applicable (NA)" },
  ];

  return (
    <section id="delegation-table" className="bg-transparent">
        <div className='flex justify-center'>
      <div className="px-4 w-[70%] md:px-8">
        {/* Header */}
        <div className="text-center text-3xl md:text-5xl text-[#003161] font-light font-serif mt-8">
          Delegation <span className="text-[#006A67]">Details</span>
        </div>

        {/* Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border border-black bg-transparent text-[#000B58] font-serif text-sm md:text-lg text-left">
            <thead>
              <tr className="">
                <th className="px-4 py-2 text-[#006A67] border-b text-3xl font-semibold text-center border-black  ">
                  Committee
                </th>
                <th className="px-4 py-2 border-b text-3xl font-semibold text-center border-black text-[#006A67] ">
                  Available Delegation Modes
                </th>
              </tr>
            </thead>
            <tbody>
              {committees.map((committee, index) => (
                <tr
                  key={index}
                  
                >
                  <td className="px-4 py-2 border-b border-r text-center border-black">
                    {committee.name}
                  </td>
                  <td className="px-4 py-2 border-b text-center border-black">
                    {committee.modes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </section>
  );
};

export default DelegationTable;
