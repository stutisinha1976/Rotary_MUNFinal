'use client';
import React from "react";
import Link from "next/link";

const Register = () => {
  return (
    <section id="register" className="w-full h-full py-8 md:py-16">
      {/* Main Heading Section */}
      <div className="text-center">
        <p className="text-4xl sm:text-5xl md:text-6xl font-thin pt-28 text-[#003161] font-serif">
          Rotary Club of Bengal Presidency
          <br />
          <span className="text-xl sm:text-2xl md:text-3xl">
            <i>presents</i>
          </span>
          <br />
        </p>
        <p className="text-5xl sm:text-6xl lg:text-8xl font-thin text-[#006A67] font-serif mt-4">
          Forum of Diplomacy:
        </p>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-[#003161] font-serif">
          Engage. Envision. Empower.
        </p>
      </div>

      {/* Register Button Section */}
      <div className="mt-8 flex justify-center">
        <Link href="/register">
          <button className="text-xl sm:text-2xl md:text-3xl bg-[#003161] bg-opacity-30 font-serif border border-[#001F3F] hover:bg-[#001F3F] hover:-translate-y-1 hover:scale-105 hover:text-[#FFF4B7] duration-300 text-[#213555] px-4 py-3 mt-8 rounded-xl gap-5 font-light">
            Register now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Register;
