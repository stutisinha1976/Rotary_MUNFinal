'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Register = () => {
  return (
    <>
    <section id="register">
      <div className="w-full h-full">
        <div className="text-center">
          <p className="text-6xl font-thin pt-28 text-[#003161] font-serif">
            Rotary Club of Bengal Presidency
            <br />
            <span className="text-3xl">
              <i>presents</i>
            </span>
            <br />
          </p>
          <p className="text-8xl font-thin lg:text-8xl lg:mt-4 text-[#006A67] font-serif">
            Forum of Diplomacy:
          </p>
          <p className="mt-4 text-2xl font-semibold text-[#003161] font-serif">
            Engage. Envision. Empower.
          </p>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <Link href="/register">
          <button className="text-3xl bg-[#003161] bg-opacity-30 font-serif border border-[#001F3F] hover:bg-[#001F3F] hover:-translate-y-1 hover:scale-80 hover:text-[#FFF4B7] duration-300 text-[#213555] px-2 py-2 mt-8 rounded-xl gap-5 font-light">
            Register now
          </button>
        </Link>
      </div>
      </section>
    </>
  );
};

export default Register;
