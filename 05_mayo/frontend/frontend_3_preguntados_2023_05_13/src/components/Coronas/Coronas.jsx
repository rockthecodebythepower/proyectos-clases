import { Flex } from "@chakra-ui/react";
import React from "react";
import Corona from "../Corona/Corona";

const Coronas = ({ coronas }) => {

  return (
    <Flex gap="10px" height="15vh" align="center" justify="center" background="var(--primary)"> 
      {coronas.map((corona) => {
        return (
          <Corona
            key={JSON.stringify(corona)}
            url={corona.url}
            alt={corona.corona}
            conseguida={corona.acertada}
          />
        );
      })}
    </Flex>
  );
};

export default Coronas;
