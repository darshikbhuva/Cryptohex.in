import React from "react";
import { CustomCard } from "../../../Chakra/CustomCard";
import { Tag, Text } from "@chakra-ui/react";

const InfoCard = ({ imgUrl, TagText, text, inverted }) => {
  return (
    <CustomCard
      bgImage={imgUrl}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgColor={inverted ? "white" : "p.purple"}
    >
      <Tag
        color={inverted ? "white" : "p.purple"}
        bg={inverted ? "p.purple" : "white"}
        borderRadius="full"
      >
        {TagText}
      </Tag>
      <Text
        mt="4"
        fontWeight="medium"
        textStyle="none"
        color={inverted ? "black" : "white"}
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
