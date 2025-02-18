import Image from "next/image";

interface TeamCardProps {
  name: string;
  designation: string;
  image: string;
  social: string;
}

const TeamCard = ({ name, designation, image }: TeamCardProps) => {
  return (
    <div className="relative bg-[#0B1C3F] text-white p-6 rounded-2xl w-64 shadow-xl max-w-xs text-center overflow-hidden group transition-transform duration-300 ">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#CDAA7D]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="w-40 h-40 mx-auto mb-4 relative">
        {/* Luxurious Glaze */}
        <div className="absolute rounded-full inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
        <div className="absolute inset-0 overflow-hidden rounded-full">
          <div className="absolute top-0 left-[-100%] w-[150%] h-full bg-gradient-to-r from-transparent via-[#CDAA7D]/50 to-transparent transform rotate-[-30deg] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out z-20"></div>
        </div>

        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-full border-2 border-[#CDAA7D]"
        />
      </div>

      <h2 className="text-xl font-semibold font-serif text-[#CDAA7D]">{name}</h2>
      <p className="text-lg font-serif text-gray-300 italic">{designation}</p>
    </div>
  );
};

export default TeamCard;
