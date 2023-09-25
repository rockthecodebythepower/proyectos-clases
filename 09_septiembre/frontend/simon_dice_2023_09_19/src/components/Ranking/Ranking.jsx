import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Ranking = ({ users }) => {
  console.log(users);
  return (
    <Flex
      position="absolute"
      top="0"
      right="0"
      borderBottom="2px solid azure"
      borderLeft="2px solid azure"
      flexDir="column"
      p="20px"
      gap="15px"

    >
      {users.map((user, index) => {
        return (
            <Grid gap="10px" gridTemplateColumns="1fr 1fr 2fr" alignItems="center" justifyContent="center" key={user._id}>
                {index === 0 && <Image src="/assets/corona.png" w="20px" position="absolute" left="35px" top="5px"/>}
                <Box w="50px" h="50px" overflow="hidden" borderRadius="100%">
                    <Image src={user.image ? user.image : "https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067"} w="100%" h="100%" objectFit="cover" objectPosition="center"/>
                </Box>
                <Heading fontSize="20px">{user.userName}</Heading>
                <Text fontSize="25px" textAlign="center">{user.score} puntos</Text>
            </Grid>
        )
      })}
    </Flex>
  );
};

export default Ranking;
