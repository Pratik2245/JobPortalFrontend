import { Menu, Indicator, Notification } from "@mantine/core";
import {
  Check,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";

const NotificationMenu = () => {
  const [opened, setOpened] = useState(false);
    const checkIcon = <Check size={20} />;
  return (
    <Menu shadow="md" width={400} opened={opened} onChange={setOpened}>
          <Menu.Target>
            <div className="flex  cursor-pointer items-center gap-2">
               <div className="bg-[#3d3d3d] p-1.5 rounded-full">
               <Indicator offset={6} size={8} color="bright-sun.4" processing>
                {/* <Avatar src="avatar1.png" alt="it's me" /> */}
                <IoMdNotificationsOutline size={24} />
             </Indicator>
             </div>
            </div>
          </Menu.Target>
    
          <Menu.Dropdown className="text-xl" onChange={() => setOpened(true)}>
            <Link to="/profile">
             <div className="!hover:bg-amber-300 rounded-md">
             <Notification
              icon={checkIcon}
              color="teal"
              title="All good!"
              mt="md"
              >
             Everything is fine
            </Notification>
            </div>

            </Link>
          
            <Menu.Divider />
    
           
          </Menu.Dropdown>
        </Menu>
  )
}

export default NotificationMenu