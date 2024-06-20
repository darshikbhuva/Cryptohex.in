import React, { Fragment } from "react";
import { CustomCard } from "../../../Chakra/CustomCard";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiFillDollarCircle } from "react-icons/ai";
import { PiCurrencyBtcFill } from "react-icons/pi";

const Transaction = () => {
  const transactions = [
    {
      id: "1",
      icon: AiFillDollarCircle,
      text: "INR Deposit",
      price: "+ ₹81,123.10",
      Profit: "",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: PiCurrencyBtcFill,
      text: "BTC Sell",
      price: "- 12.48513391 BTC",
      profit: "+ $81,123.10",
      timestamp: "2022-05-27 12:32 PM",
    },
    {
      id: "3",
      icon: AiFillDollarCircle,
      text: "INR Deposit",
      price: "+ ₹81,123.10",
      Profit: "",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "3",
      icon: AiFillDollarCircle,
      text: "INR Deposit",
      price: "+ ₹81,123.10",
      Profit: "",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];
  return (
    <CustomCard h="full">
      <Text fontSize="sm" color="black.80">
        Recent Transactions
      </Text>
      <Stack spacing={4} mt="10px">
        {transactions.map((item) => (
          <Fragment key={item.id}>
            {item !== 0 && <Divider />}
            <Flex>
              <Grid
                placeItems="center"
                bg="black.5"
                boxSize={10}
                borderRadius="full"
              >
                <Icon as={item.icon}></Icon>
              </Grid>
              <Flex justifyContent="space-between" w="full">
                <Stack spacing={0}>
                  <Text textStyle="h6">{item.text}</Text>
                  <Text color="black.40" fontSize="sm">
                    {item.timestamp}
                  </Text>
                </Stack>

                <Text textStyle="h6">{item.price}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button colorScheme="gray" mt="5" width="full">
        View All
      </Button>
    </CustomCard>
  );
};

export default Transaction;
