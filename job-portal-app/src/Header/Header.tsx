import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { SiCloudflareworkers } from "react-icons/si";
const Header = () => {
  return (
    <div className="w-full text-white flex justify-between items-center px-6 bg-black h-24">
      <div className="flex items-center gap-2">
        <SiCloudflareworkers size={35} />
        <span className="font-bold text-2xl">Sparks</span>
      </div>
      <div className="flex gap-3 text-l">
        <a href="">Find Job</a>
        <a href="">Find Jobs</a>
        <a href="">Upload Jobs</a>
        <a href="">About Us</a>
      </div>
      <div className="flex gap-4">
        <IoMdNotificationsOutline size={22} />
        <div className="name">Pratik</div>
        <IoSettingsSharp size={22} />
      </div>
    </div>
  );
};

export default Header;
