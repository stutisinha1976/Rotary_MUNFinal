'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/router";

const Nav = () => {
  return (
    <div>
      <nav className='flex justify-between px-6 bg-[#16423C]'>
        <div>
          <Image
            src="/og_logo.png"
            alt="Next.js logo"
            width={100}
            height={100}
          />
        </div>

        <div className='flex gap-10 font-serif text-xl font-medium text-[#C4DAD2] items-center mr-16'>
          <Link href="/" className="hidden lg:block">Home</Link>
          <Link href="/register" className="hidden lg:block">Register</Link>
          <Link href="/rotary" className="hidden lg:block">About Rotary</Link>
          <Link href="/#faq" className="hidden lg:block">Our Team</Link>
          <Link href="/#faq" className="hidden lg:block">Sponsors</Link>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden flex items-center">
            <button className="text-3xl text-[#FFF4B7]" onClick={() => {/* Toggle menu */}}>
              &#9776; {/* Hamburger icon */}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu (Hidden by default) */}
      <div className="lg:hidden hidden">
        <div className="flex flex-col items-center gap-6 bg-[#000B58] text-[#FFF4B7] py-4">
          <Link href="/" className="text-xl">Home</Link>
          <Link href="/#guidelines" className="text-xl">Register</Link>
          <Link href="/#working" className="text-xl">About Rotary</Link>
          <Link href="/#faq" className="text-xl">Our Team</Link>
          <Link href="/#faq" className="text-xl">Sponsors</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
