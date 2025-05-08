import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { SiCloudflareworkers } from "react-icons/si";

const Footer = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="w-1/4 flex flex-col gap-4">
        <div className="flex items-center text-[#ffbd20] gap-2">
          <SiCloudflareworkers size={25} />
          <span className="font-bold text-xl">JobSparks</span>
        </div>

        <div className="text-sm text-[#b0b0b0]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, aut
          reprehenderit nostrum non at cupiditate
        </div>
        <div className="flex gap-3 text-[#ffbd20] [&>div]:bg-[#3d3d3d] [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-[#4f4f4f]">
          <div>
            <Instagram />
          </div>
          <div>
            <Facebook />
          </div>
          <div>
            <Youtube />
          </div>
          <div>
            <Twitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
