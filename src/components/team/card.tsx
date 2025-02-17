import Image from "next/image";

interface TeamCardProps {
  name: string;
  designation: string;
  image: string;
  social: string;
}

const TeamCard = ({ name, designation, image, social }: TeamCardProps) => {
  const handleConnectClick = () => {
    if (social && social.trim() !== "") {
      window.open(social.trim(), "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="relative bg-[#16423C] text-white p-6 rounded-2xl w-64 shadow-lg max-w-xs text-center overflow-hidden group transition-transform duration-300">
      
      <div className="w-40 h-40 mx-auto mb-4 relative">
        {/* Glaze over the image */}
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <div className="absolute top-0 left-[-100%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform rotate-[-30deg] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out z-20"></div>
        </div>

        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>

      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm text-gray-300">{designation}</p>

      <div className="mt-3">
        <button
          onClick={handleConnectClick}
          className={`px-4 py-2 rounded-lg transition ${
            social && social.trim() !== ""
              ? "bg-[#006A67] hover:bg-[#003161] text-white"
              : "bg-gray-500 text-gray-300 cursor-not-allowed"
          }`}
          disabled={!social || social.trim() === ""}
        >
          Connect
        </button>
      </div>
    </div>
  );
};

export default TeamCard;
