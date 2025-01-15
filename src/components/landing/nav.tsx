'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="flex justify-between px-6 bg-[#16423C] items-center">
        {/* Logo */}
        <div>
          <Image
            src="/og_logo.png"
            alt="Next.js logo"
            width={100}
            height={100}
          />
        </div>

        {/* Navigation Links */}
        <div className="flex gap-10 font-serif text-xl font-medium text-[#C4DAD2] items-center">
          {/* Desktop Links */}
          <div className="hidden lg:flex gap-10">
            <Link href="/">Home</Link>
            <Link href="/register">Register</Link>
            <Link href="/rotary">About Rotary</Link>
            <Link href="/#faq">Our Team</Link>
            <Link href="/#faq">Sponsors</Link>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            className="lg:hidden text-3xl text-[#FFF4B7]"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? "✖" : "☰"} {/* Toggle between hamburger and close icons */}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-6 bg-[#000B58] text-[#FFF4B7] py-4">
          <Link href="/" onClick={toggleMobileMenu} className="text-xl">
            Home
          </Link>
          <Link href="/register" onClick={toggleMobileMenu} className="text-xl">
            Register
          </Link>
          <Link href="/rotary" onClick={toggleMobileMenu} className="text-xl">
            About Rotary
          </Link>
          <Link href="/#faq" onClick={toggleMobileMenu} className="text-xl">
            Our Team
          </Link>
          <Link href="/#faq" onClick={toggleMobileMenu} className="text-xl">
            Sponsors
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
