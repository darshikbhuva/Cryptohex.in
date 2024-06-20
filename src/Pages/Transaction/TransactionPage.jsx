import React from "react";
import DashboardLayout from "../../Componants/DashboardLayout";
import { MdOutlineFileDownload } from "react-icons/md";

import {
  Button,
  HStack,
  Icon,
  Stack,
  Tag,
  Text,
  Flex,
  Card,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TransactionTable from "./Componants/TransactionTable";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

const TransactionPage = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposite",
      count: 114,
    },
    {
      name: "Widthdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];
  return (
    <DashboardLayout title="Transaction">
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={MdOutlineFileDownload} fontSize="large" />}>
          Explore CV
        </Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs>
          <TabList
            pt="4"
            justifyContent="space-between"
            display="flex"
            width="full"
          >
            <HStack>
              {tabs.map((tabs) => (
                <Tab key={tabs.name} display="flex" gap="2" pb="4">
                  {tabs.name}{" "}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tabs.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>

            <InputGroup maxW="200px" pr="6">
              <InputLeftElement pointerEvents="none">
                <Icon as={CiSearch}></Icon>
              </InputLeftElement>
              <Input type="tel" placeholder="Search..." />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable></TransactionTable>
            </TabPanel>
            <TabPanel>
              <TransactionTable></TransactionTable>
            </TabPanel>
            <TabPanel>
              <TransactionTable></TransactionTable>
            </TabPanel>
            <TabPanel>
              <TransactionTable></TransactionTable>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default TransactionPage;
