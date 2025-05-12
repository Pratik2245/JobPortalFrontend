import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { SiCloudflareworkers } from "react-icons/si";
import { footerLinks } from "../Data/Data";

const Footer = () => {
  return (
    <div className="mt-20 pb-5 flex justify-around gap-3">
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
      {footerLinks.map((item, index) => (
        <div key={index} className="">
          <div className="text-lg font-semibold mb-4 text-[#ffbd20]">
            {item.title}
          </div>
          {item.links.map((links, index) => (
            <div
              key={index}
              className="cursor-pointer mb-1 hover:translate-x-2 transition ease-in-out text-[#b0b0b0] hover:text-[#ffbd20]
 text-sm "
            >
              {links}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Footer;
