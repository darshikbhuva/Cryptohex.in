import {
  Stack,
  Icon,
  HStack,
  Box,
  Text,
  Heading,
  color,
} from "@chakra-ui/react";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { IoCall } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Sidenav = () => {
  const location = useLocation();
  console.log(location);

  const IsActiveLink = (link) => {
    return location.pathname == link;
  };
  const navlinks = [
    {
      icon: MdDashboard,
      name: "Dashboard",
      link: "/",
    },
    {
      icon: TbArrowsDoubleNeSw,
      name: "Transaction",
      link: "/Transaction",
    },
  ];

  return (
    <Stack
      justifyContent="space-between"
      boxShadow="lg "
      bg="white"
      width="16rem"
      h="100vh"
    >
      <Box>
        <Heading
          as="h1"
          fontSize="20px"
          pt="3.5rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="blueviolet"
        >
          @CRYPTOHEX
        </Heading>
        <Box mt="6" mx="3">
          {navlinks.map((nav) => (
            <Link to={nav.link} key={nav.name}>
              <HStack
                bg={IsActiveLink(nav.link) ? "#f3f3f7" : "transparent"}
                color={IsActiveLink(nav.link) ? "#171717" : "#797E82"}
                py="3"
                px="4"
                mt="2"
                borderRadius="10px"
                _hover={{
                  bg: "#f3f3f7",
                  color: "#171717",
                }}
              >
                <Icon as={nav.icon} />
                <Text fontSize="14px" fontWeight="medium">
                  {nav.name}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mt="6" mx="3" mb="6">
        <Link to="/Support">
          <HStack
            py="3"
            px="4"
            borderRadius="10px"
            _hover={{
              bg: "#f3f3f7",
              color: "#171717",
            }}
            bg={IsActiveLink("/Support") ? "#f3f3f7" : "transparent"}
            color={IsActiveLink("/Support") ? "#171717" : "#797E82"}
          >
            <Icon as={IoCall} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
