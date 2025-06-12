import { Menu, Button, Text, Avatar, Switch } from "@mantine/core";
import {
  ArrowLeftRight,
  FileCheck,
  LogOut,
  MessageCircle,
  Moon,
  Sun,
  TrashIcon,
  UserPen,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  const [opened, setOpened] = useState(false);
  const [checked, setChecked] = useState(false);
  return (
    <Menu shadow="md" width={200} opened={opened} onChange={setOpened}>
      <Menu.Target>
        <div className="flex  cursor-pointer items-center gap-2">
          <div>Pratik</div>
          <div>
            <Avatar src="avatar1.png" alt="it's me" />
          </div>
        </div>
      </Menu.Target>

      <Menu.Dropdown className="text-xl" onChange={() => setOpened(true)}>
        <Link to="/profile">
          <Menu.Item leftSection={<UserPen size={14} />}>Profile</Menu.Item>
        </Link>
        <Menu.Item leftSection={<MessageCircle size={14} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<FileCheck size={14} />}>Resume</Menu.Item>
        <Menu.Item
          leftSection={<Moon size={14} />}
          rightSection={
            <Switch
              size="md"
              color="dark.4"
              onLabel={<Sun size={16} color="var(--mantine-color-yellow-4)" />}
              offLabel={<Moon size={16} color="var(--mantine-color-blue-6)" />}
              checked={checked}
              onChange={(event) => setChecked(event.currentTarget.checked)}
            />
          }
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item color="red" leftSection={<LogOut size={14} />}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;
