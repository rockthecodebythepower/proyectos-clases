import { Flex, Heading, Progress, Text } from "@chakra-ui/react";
import React from "react";

const BaseStat = ({ pokemon, left }) => {
  return (
    <Flex
      position="absolute"
      justify="center"
      align="end"
      flexDir="column"
      right={!left && "-350px"}
      left={left && "-350px"}
    >
      <Heading>{pokemon?.name}</Heading>
      <Progress
        colorScheme={
          pokemon?.hp <= pokemon?.stats[0].base_stat * 0.1
            ? "red"
            : pokemon?.hp <= pokemon?.stats[0].base_stat * 0.5
            ? "yellow"
            : "green"
        }
        w="200px"
        borderRadius="5px"
        max={parseInt(pokemon?.stats[0].base_stat)}
        value={parseInt(pokemon?.hp)}
        transform="rotate(180deg)"
        bgColor="var(--rtc-color-2)"
      />
      <Text>
        {pokemon?.hp}/{pokemon?.stats[0].base_stat}
      </Text>
    </Flex>
  );
};

export default BaseStat;
