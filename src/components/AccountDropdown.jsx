import { useContext } from "react";
import { useRouter } from "next/router";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuDivider,
  MenuItem,
  Avatar,
} from "@chakra-ui/react";

import { MainStateContext } from "@/state-management/index";
import { logout } from "@lib/firebase/auth";

import Toast from '@/components/toast';

import useAuth from "@/hooks/auth";

const AccountDropdown = () => {
  const state = useContext(MainStateContext);
  const router = useRouter();
  const { user } = useAuth();

  const onLogout = async () => {
    try {
      await logout();
      router.push('/login');
      Toast.success('Logged out successfully');
    } catch (err) {
      Toast.error('Unable to logout');
    }
  }

  return (
    <Menu>
      <MenuButton>
        <Avatar
          name={user?.email}
          src={user?.profile_pic}
        />
      </MenuButton>
      <MenuList>
        <MenuGroup
          title='Profile'
        >
          <MenuItem
            isDisabled='true'
            cursor='pointer'
          >
            {user?.email}
          </MenuItem>
          <MenuItem
            onClick={() => router.push("/connected-apps")}
          >
            Apps
          </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuItem
          onClick={onLogout}
        >Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AccountDropdown;