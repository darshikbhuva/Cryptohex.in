import React from "react";
import { CustomCard } from "../../../Chakra/CustomCard";
import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const PriceSection = () => {
  const timestamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];
  return (
    <CustomCard h="full">
      <Flex justifyContent="space-between" align="top">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm" fontWeight="medium">
              Wallet Balance
            </Text>
          </HStack>
          <HStack spacing="2">
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.39401000
              </Text>{" "}
            </HStack>
            <HStack fontWeight="medium" color="green.500" mt="2">
              <Icon as={FiArrowUpRight}></Icon>
              <Text fontSize="sm" fontWeight="medium">
                0.04%
              </Text>
            </HStack>
          </HStack>
        </Stack>

        <HStack mt="-20px">
          <Button>
            <Icon as={CiCirclePlus} mr="4px"></Icon>
            Buy
          </Button>
          <Button>
            <Icon as={CiCircleMinus} mr="4px"></Icon>
            Sell
          </Button>
        </HStack>
      </Flex>

      <Tabs variant="soft-rounded" mt="15px">
        <Flex justify="end">
          <TabList bg="black.5" py="5px" px="3px">
            {["1H", "1D", "1W", "1M"].map((time) => (
              <Tab
                fontSize="sm"
                px="8px"
                py="4px"
                _selected={{ bg: "white" }}
                borderRadius="4"
              >
                {time}
              </Tab>
            ))}
          </TabList>
        </Flex>

        <TabPanels>
          <TabPanel>
            <Image src="./Public\graph.svg" width="100%" mt="3rem" />
            <HStack justifyContent="space-between">
              {timestamps.map((time) => (
                <Text color="black.80" key={time} fontSize="sm">
                  {time}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <Image src="./Public\graph.svg" width="100%" mt="3rem" />
            <HStack justifyContent="space-between">
              {timestamps.map((time) => (
                <Text color="black.80" key={time} fontSize="sm">
                  {time}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <Image src="./Public/graph.svg" width="100%" mt="3rem" alt="Graph Chart" />
            <HStack justifyContent="space-between">
              {timestamps.map((time) => (
                <Text color="black.80" key={time} fontSize="sm">
                  {time}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <Image src="./Public\graph.svg" width="100%" mt="3rem" />
            <HStack justifyContent="space-between">
              {timestamps.map((time) => (
                <Text color="black.80" key={time} fontSize="sm">
                  {time}
                </Text>
              ))}
            </HStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
