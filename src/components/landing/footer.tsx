import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-[#16423C] h-auto mt-24 pt-4 font-serif">
      <div className="px-6">
        {/* Top Section with Logo and Columns */}
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-8 lg:justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0 mb-6 lg:mb-0">
            <Image src="/footerlogo.png" alt="Logo" width={250} height={100} priority />
          </div>

          {/* Sitemap Section */}
          <div className="flex-1 text-center lg:text-left mb-6 lg:mb-0">
            <h2 className="text-xl font-semibold text-[#C4DAD2] mb-4">Pagemap</h2>
            <ul className="text-[#C4DAD2] space-y-2">
              <li><Link href="/" className="hover:text-[#003161] transition-colors duration-300">Home</Link></li>
              <li><Link href="/#register" className="hover:text-[#003161] transition-colors duration-300">Register</Link></li>
              <li><Link href="/#about" className="hover:text-[#003161] transition-colors duration-300">About FoD</Link></li>
              <li><Link href="/#committee" className="hover:text-[#003161] transition-colors duration-300">Committees</Link></li>
              <li><Link href="/#perks" className="hover:text-[#003161] transition-colors duration-300">Perks</Link></li>
              <li><Link href="/#president" className="hover:text-[#003161] transition-colors duration-300">Messages from Dignitaries</Link></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="flex-1 text-center lg:text-left mb-6 lg:mb-0">
            <h2 className="text-xl font-semibold text-[#C4DAD2] mb-4">Contact Info</h2>
            <p className="text-lg text-[#C4DAD2]">
              <strong>Mobile No.:</strong><br />
              Soumodip Adhikary (+91 8584975241)<br />
              Rajdeep Mondal (+91 91632 85863)
            </p>
            <div className="border-white border-b my-4 w-32 mx-auto lg:mx-0"></div>
            <p className="text-lg text-[#C4DAD2]">
              <strong>E-mail:</strong><br />
              rotaryforumofdiplomacy@gmail.com
            </p>
          </div>

          {/* Social Media Section */}
          <div className="flex-1 text-center lg:text-left mb-6 lg:mb-0">
            <h2 className="text-xl font-semibold text-[#C4DAD2] mb-4">Follow Us</h2>
            <div className="flex justify-center items-center space-x-4 lg:justify-start">
              <Link href="https://www.facebook.com/share/18qRYcPtnE/" target="_blank" rel="noopener noreferrer">
                <Image src="/facebook.webp" alt="Facebook" width={30} height={30} />
              </Link>
              <Link href="https://www.linkedin.com/company/rotary-forum-of-diplomacy/" target="_blank" rel="noopener noreferrer">
                <Image src="/linkedin.webp" alt="LinkedIn" width={30} height={30} />
              </Link>
              <Link href="https://www.instagram.com/rotary.fod?igsh=MWxvOW1saGU2NTlwcw==" target="_blank" rel="noopener noreferrer">
                <Image src="/insta.webp" alt="Instagram" width={30} height={30} />
              </Link>
            </div>
            <p className="mt-4 text-lg text-[#C4DAD2]">Stay connected with us on social media!</p>
          </div>

          {/* Location Section */}
          <div className="flex-1 text-center lg:text-left mb-6 lg:mb-0">
            <h2 className="text-xl font-semibold text-[#C4DAD2] mb-4">Location</h2>
            <p className="text-lg text-[#C4DAD2]">
              <strong>Bidhannagar College</strong>
            </p>
            <div className="mt-4 w-full h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.850432167968!2d88.40238107491103!3d22.58469667948316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275de91e4c157%3A0x3ff58aa616f57ca1!2sBidhannagar%20College!5e0!3m2!1sen!2sin!4v1739638217048!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="mt-2">
              <Link href="https://g.co/kgs/qfpLuLo" target="_blank" rel="noopener noreferrer" className="text-[#C4DAD2] hover:underline">
                View on Google Maps
              </Link>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-center mt-8 text-[#C4DAD2]">
          <p className="text-lg text-center">© 2025 FoD. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
