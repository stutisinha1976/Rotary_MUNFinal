import Nav from "@/components/landing/nav";
import Content from "@/components/rotary/content";
import Carousel1 from "@/components/rotary/carousel1";
import Carousel2 from "@/components/rotary/carousel2";
export default function Page() {
  return (
    <div className="bg-[#E3FEF7]">
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50">
        <Nav />
      </div>

      {/* Background and Content */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/logo.png')] bg-fixed bg-cover bg-center bg-no-repeat opacity-70"></div>

        {/* Content */}
        <div className="relative z-10">
          {/* Wrapper for consistent padding */}
          <div className="px-4 md:px-8">
            <Content />
            <Carousel1 />
            <Carousel2 />
          </div>
        </div>
      </div>
    </div>
  );
}
