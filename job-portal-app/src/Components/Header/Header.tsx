import { Button, Indicator } from "@mantine/core";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Anchor } from "lucide-react";
import NavLinks from "./NavLinks";
import { Link, useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useSelector } from "react-redux";
import NotificationMenu from "./NotificationMenu";
const Header = () => {
  const user = useSelector((state: any) => state.user);
  const location = useLocation();
  return location.pathname != "/signup" && location.pathname != "/login" ? (
    <div className="w-full text-white  flex justify-between items-center px-6 bg-[#2d2d2d] h-23">
      <div className="flex items-center text-[#ffbd20] gap-2">
        <Anchor size={35} />
        <span className="font-bold text-3xl">JobSparks</span>
      </div>
      <NavLinks />
      <div className="flex gap-4 items-center">
        {user ? (
          <ProfileMenu />
        ) : (
          <Link to="/login">
            <Button variant="subtle" color="#ffbd20">
              Login
            </Button>
          </Link>
        )}
        
           {user? <NotificationMenu/>:<></>}
      
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Header;
