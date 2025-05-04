import { Avatar, Indicator } from "@mantine/core";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { Settings } from "lucide-react";
import { SiCloudflareworkers } from "react-icons/si";
const Header = () => {
  return (
    <div className="w-full text-white flex justify-between items-center px-6 bg-[#2d2d2d] h-20">
      <div className="flex items-center text-[#ffbd20] gap-2">
        <span className="font-bold text-3xl">Sparks</span>
        <SiCloudflareworkers size={35} />
      </div>
      <div className="flex gap-5 text-l mt-2  items-center">
        <a href="">Find Job</a>
        <a href="">Find Jobs</a>
        <a href="">Upload Jobs</a>
        <a href="">About Us</a>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-2">
          <div>
            <Avatar src="avatar1.png" alt="it's me" />
          </div>
          <div>Pratik</div>
        </div>
        <div className="bg-[#3d3d3d] p-1.5 rounded-full">
          <Settings />
        </div>
        <div className="bg-[#3d3d3d] p-1.5 rounded-full">
          <Indicator offset={6} size={8} color="green" processing>
            <IoMdNotificationsOutline size={24} />
          </Indicator>
        </div>
      </div>
    </div>
  );
};

export default Header;
