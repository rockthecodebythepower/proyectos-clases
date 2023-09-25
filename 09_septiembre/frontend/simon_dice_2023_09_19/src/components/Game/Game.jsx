import { Button, Flex, Grid } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Color from "../Color/Color";

let CONTADOR_CLICKS = 0;

const Game = () => {
  const [numbers, setNumbers] = useState([]);
  const [actualNumber, setActualNumber] = useState();

  const start = (estado) => {
    if (estado === "checkeo") {
      const number = Math.floor(Math.random() * 4 + 1);
      setNumbers([...numbers, number]);
    }

    if (!estado) {
      CONTADOR_CLICKS = 0;
    }

    let i = 0;

    let intervalo = setInterval(() => {
      if (numbers.length !== i) {
        let number = numbers[i];
        i++;
        setActualNumber(number);
      } else {
        setActualNumber();
        i = 0;
        clearInterval(intervalo);
      }
    }, 500);
  };

  const check = (number) => {
    if (numbers[CONTADOR_CLICKS] === number) {
      if (numbers.length - 1 === CONTADOR_CLICKS) {
        // se ha acabado la ronda
        start("checkeo");
        setActualNumber();
        CONTADOR_CLICKS = 0;
      } else {
        // has acertado pero la ronda sigue
        CONTADOR_CLICKS++;
      }
    } else {
        // has fallado y por lo tanto pierdes
      console.log("NO has hecho click en el correcto");
      alert("has perdido");
    }
  };

  useEffect(() => {
    start("continuar");
  }, [numbers]);

  return (
    <Flex flexDir="column" gap="50px">
      <Grid
        gridTemplateColumns="1fr 1fr"
        gridTemplateRows="1fr 1fr"
        borderRadius="100%"
        w="300px"
        h="300px"
        background="white"
        overflow="hidden"
        position="relative"
      >
        <Flex
          background="#333333"
          position="absolute"
          borderRadius="100%"
          w="100px"
          h="100px"
          top="100px"
          left="100px"
        ></Flex>
        <Color
          strongBg="orange"
          bg={actualNumber === 1 ? "orange" : "orange.300"}
          onClick={() => check(1)}
          bb
          br
        />
        <Color
          strongBg="blue"
          bg={actualNumber === 2 ? "blue" : "blue.300"}
          onClick={() => check(2)}
          bb
          bl
        />
        <Color
          strongBg="red"
          bg={actualNumber === 3 ? "red" : "red.300"}
          onClick={() => check(3)}
          br
          bt
        />
        <Color
          strongBg="green"
          bg={actualNumber === 4 ? "green" : "green.300"}
          onClick={() => check(4)}
          bl
          bt
        />
      </Grid>
      <Button onClick={() => start("checkeo")}>JUGAR</Button>
    </Flex>
  );
};

export default Game;
