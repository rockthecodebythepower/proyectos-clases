import { Flex } from "@chakra-ui/react";

const Floor = () => {
  return (
    <Flex
      backgroundImage="url('https://www.transparenttextures.com/patterns/football-no-lines.png')"
      w="200px"
      h="100px"
      position="absolute"
      borderRadius="100%"
      bottom="-50px"
      left="0px"
      bgColor="white"
    ></Flex>
  );
};

export default Floor;
