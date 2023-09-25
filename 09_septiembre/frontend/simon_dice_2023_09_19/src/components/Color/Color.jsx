import { Flex } from "@chakra-ui/react";
import React from "react";

const Color = ({ bg, bl, br, bb, bt, onClick, strongBg }) => {
  return (
    <Flex
      onClick={onClick}
      _active={{bg: strongBg}}
      bg={bg}
      borderRight={br ? "2px solid" : "0px"}
      borderBottom={bb ? "2px solid" : "0px"}
      borderLeft={bl ? "2px solid" : "0px"}
      borderTop={bt ? "2px solid" : "0px"}
      borderColor="blackAlpha.800"
      w="120%"
      cursor="pointer"
      h="120%"
    ></Flex>
  );
};

export default Color;
