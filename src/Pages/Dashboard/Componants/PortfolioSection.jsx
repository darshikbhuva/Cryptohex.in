import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { LuArrowUpToLine } from "react-icons/lu";
import { LuArrowDownToLine } from "react-icons/lu";

const PortfolioSection = () => {
  return (
    <HStack justifyContent="space-between" bg="white" borderRadius="xl" p="6">
      <HStack spacing="10">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm" fontWeight="medium">
              Total Portfolio Value
            </Text>
            <Icon as={IoIosInformationCircleOutline}></Icon>
          </HStack>
          <Text textStyle="h2" fontWeight="medium">
            ₹ 112,312.24
          </Text>
        </Stack>

        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm" fontWeight="medium">
              Wallet Balance
            </Text>
          </HStack>
          <HStack spacing="6">
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.39401000
              </Text>{" "}
              <Tag>BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                ₹ 1,300.00
              </Text>{" "}
              <Tag>INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button>
          <Icon as={LuArrowDownToLine} mr="4px"></Icon>
          Deposit
        </Button>
        <Button>
          <Icon as={LuArrowUpToLine} mr="4px"></Icon>
          Withdraw
        </Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
