import Nav from "@/components/landing/nav";
import Register from "@/components/landing/register";
import Footer from "@/components/landing/footer";
import Perks from "@/components/landing/perks";
import About from "@/components/landing/aboutfod";
import Carousel from "@/components/landing/carousel";
import President from "@/components/landing/president";
import Convener from "@/components/landing/convener";
export default function Page() {
  return (
    <div className="bg-[#E3FEF7]">
      <div className="sticky top-0 z-50">
      <Nav />
      </div>
      {/* Background with fixed position and opacity adjustment */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/logo.png')]  bg-fixed bg-cover bg-center bg-no-repeat opacity-70 "></div>
        
        {/* Content */}
        <div className="relative">
          <Register />
          <About />
          <Carousel />
          <div className="">
          <Perks />
          </div>
          <President/>
          <Convener/>
          <Footer />
        </div>
      </div>
    </div>
  );
}
