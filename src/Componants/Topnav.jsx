import {
  Box,
  HStack,
  Heading,
  MenuItem,
  MenuButton,
  MenuList,
  Icon,
  Menu,
} from "@chakra-ui/react";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const Topnav = ({ title }) => {
  return (
    <Box bg="white" px="4">
      <HStack maxW="70rem" h="16" justifyContent="space-between" mx="auto">
        <Heading fontWeight="700" fontSize="28px">
          {title}
        </Heading>
        <Menu>
          <MenuButton>
            <Icon as={FaRegUserCircle} fontSize="28px"></Icon>
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default Topnav;
