import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-[#16423C] h-auto mt-24 pt-4'>
      <div className='mx-auto px-6'>
        <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start'>
          {/* Logo */}
          <div className='lg:mb-0'>
            <Image
              src="/footerlogo.png"
              alt="Logo"
              width={250}
              height={100}
            />
          </div>

          {/* Navigation Links */}
          <div className='flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10 text-[#C4DAD2]'>
            <section className='flex flex-col items-center lg:items-start'>
              <Link href="/" className='text-xl mb-2 hover:text-[#003161] transition-colors duration-300'>Home</Link>
              <Link href="/#register" className='text-xl mb-2 hover:text-[#003161] transition-colors duration-300'>Register</Link>
              <Link href="/#about" className='text-xl mb-2 hover:text-[#003161] transition-colors duration-300'>About FoD</Link>
              <Link href="/#committee" className='text-xl mb-2 hover:text-[#003161] transition-colors duration-300'>Committees</Link>
              <Link href="/#perks" className='text-xl mb-2 hover:text-[#003161] transition-colors duration-300'>Perks</Link>
              <Link href="/#president" className='text-xl mb-2 hover:text-[#003161] transition-colors duration-300'>Message from President</Link>
              <Link href="/#convenor" className='text-xl mb-2 hover:text-[#003161] transition-colors duration-300'>Message from Convenor</Link>
            </section>

            {/* Contact Info */}
            <section className='flex items-center lg:items-start gap-3 mt-4 lg:mt-0'>
              <span className='text-xl'>Mobile No.: +122 358 48484</span>
              <div className='border-white border-b w-32'></div>
              <span className='text-xl'>E-mail: mineflow@gmail.com</span>
            </section>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className='flex justify-center mt-8 text-[#C4DAD2]'>
          <p className='text-lg'>© 2025 FoD. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
