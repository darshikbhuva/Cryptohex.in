import React from "react";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";
import { Box, Container, Flex } from "@chakra-ui/react";

const DashboardLayout = ({ title, children }) => {
  return (
    <div>
      <Flex>
        <Sidenav></Sidenav>
        <Box flexGrow={1}>
          <Topnav title={title} />
          <Container mt="6" maxW="70rem">
            {children}
          </Container>
        </Box>
      </Flex>
    </div>
  );
};

export default DashboardLayout;
