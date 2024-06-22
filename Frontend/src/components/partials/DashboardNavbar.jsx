import { Avatar, Box, Divider, Menu, Text } from "@mantine/core";
import { IconBell } from "@tabler/icons-react";
import React, { useState } from "react";

const DashboardNavbar = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div className="h-2xl flex items-center justify-between border-b border-gray-300 px-md">
      <Text>Good morning</Text>
      <Box className="flex items-center gap-sm">
        <Text>Friday 19 Jan, 2024</Text>
        <IconBell className="text-gray-300" />

        <Menu opened={opened} onChange={setOpened}>
          <Menu.Target>
            <Avatar
              color="cyan"
              radius="xl"
              className="cursor-pointer hover:bg-gray-100"
            >
              MK
            </Avatar>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>Profile</Menu.Item>
            <Menu.Item>Dashboard</Menu.Item>
            <Divider />
            <Menu.Item>Logout</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Box>
    </div>
  );
};

export default DashboardNavbar;
