import { Avatar, Indicator } from "@mantine/core";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Settings } from "lucide-react";
import { SiCloudflareworkers } from "react-icons/si";
import NavLinks from "./NavLinks";
const Header = () => {
  return (
    <div className="w-full text-white flex justify-between items-center px-6 bg-[#2d2d2d] h-23">
      <div className="flex items-center text-[#ffbd20] gap-2">
        <SiCloudflareworkers size={35} />
        <span className="font-bold text-3xl">JobSparks</span>
      </div>
      <NavLinks />
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-2">
          <div>Pratik</div>
          <div>
            <Avatar src="avatar1.png" alt="it's me" />
          </div>
        </div>
        <div className="bg-[#3d3d3d] p-1.5 rounded-full">
          <Settings />
        </div>
        <div className="bg-[#3d3d3d] p-1.5 rounded-full">
          <Indicator offset={6} size={8} color="bright-sun.4" processing>
            <IoMdNotificationsOutline size={24} />
          </Indicator>
        </div>
      </div>
    </div>
  );
};

export default Header;
