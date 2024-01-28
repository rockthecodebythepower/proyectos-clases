import { Flex, Grid, Heading, Image, Progress, Text } from "@chakra-ui/react";
import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../providers/ThemeProvider";
import BaseStat from "../../components/BaseStat/BaseStat";
import Floor from "../../components/Floor/Floor";

const Coliseum = () => {
  const { id } = useParams();
  const [pokemonSelected, setPokemonSelected] = useState();
  const [pokemonRandom, setPokemonRandom] = useState();
  const { light } = useContext(ThemeContext);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((pokemon) => {
        const moves = [...pokemon.moves.splice(0, 4)];
        const defMoves = [];

        for (const move of moves) {
          fetch(move.move.url)
            .then((res) => res.json())
            .then((res) => {
              defMoves.push({
                accuracy: res.accuracy,
                power: res.power,
                pp: res.pp,
                priority: res.priority,
                damage_class: res.damage_class.name,
                name: res.name,
                id: res.id,
              });
              if (defMoves.length === 4) {
                const pokemonDef = {
                  name: pokemon.name,
                  image:
                    pokemon.sprites.versions[`generation-v`][`black-white`]
                      .animated.back_default,
                  stats: pokemon.stats,
                  moves: [...defMoves],
                  hp: pokemon.stats[0].base_stat,
                };
                console.log(pokemonDef);
                setPokemonSelected(pokemonDef);
              }
            });
        }
      });
    fetch(
      `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151) + 1}`
    )
      .then((res) => res.json())
      .then((res) => setPokemonRandom({ ...res, hp: res.stats[0].base_stat }));
  }, []);

  const mySelection = useCallback(
    (movePokeSelected) => {
      if (pokemonRandom) {
        fetch(
          pokemonRandom.moves[
            Math.floor(Math.random() * pokemonRandom.moves.length)
          ].move.url
        )
          .then((res) => res.json())
          .then((res) => {
            if (res.priority > movePokeSelected.priority) {
              attack({
                myTurn: false,
                myMovement: movePokeSelected,
                enemyMovement: res,
              });
            } else {
              attack({
                myTurn: true,
                myMovement: movePokeSelected,
                enemyMovement: res,
              });
            }
          });
      }
    },
    [pokemonRandom, pokemonSelected]
  );

  const attack = ({ myTurn, myMovement, enemyMovement, end }) => {
    if (!myTurn) {
      if (Math.floor(Math.random() * 100) > enemyMovement.accuracy) {
        console.log("El ataque ha fallado");
      } else {
        const pokemonNewVersion = { ...pokemonSelected };
        pokemonNewVersion.hp = Math.floor(
          pokemonNewVersion.hp -
            (pokemonRandom.stats[1].base_stat + enemyMovement.power) / 10
        );
        setPokemonSelected({ ...pokemonNewVersion });
      }
    } else {
      if (Math.floor(Math.random() * 100) > myMovement.accuracy) {
        console.log("El ataque ha fallado");
      } else {
        const pokemonNewVersion = { ...pokemonRandom };
        pokemonNewVersion.hp = Math.floor(
          pokemonNewVersion.hp -
            (pokemonSelected.stats[1].base_stat + myMovement.power) / 10
        );
        setPokemonRandom({ ...pokemonNewVersion });
      }
    }
    if (!end) {
      setTimeout(() => {
        attack({
          myTurn: !myTurn,
          myMovement: myMovement,
          enemyMovement: enemyMovement,
          end: true,
        });
      }, 2000);
    }
  };

  return (
    <Flex
      className="coliseum"
      minH="100svh"
      maxW="1200px"
      margin="auto"
      p="50px"
      pt="200px"
      position="relative"
    >
      <Flex position="absolute" bottom="200px" left="300px">
        <BaseStat pokemon={pokemonSelected} />
        <Image
          src={pokemonSelected?.image}
          w="200px"
          position="relative"
          zIndex="9"
          filter={`drop-shadow(0px 0px 2px ${
            light
              ? "var(--rtc-light-mode-bg-negative)"
              : "var(--rtc-dark-mode-bg-negative)"
          })`}
        />
        <Floor />
      </Flex>
      <Flex position="absolute" top="200px" right="300px">
        <BaseStat pokemon={pokemonRandom} left />
        <Image
          src={
            pokemonRandom?.sprites.versions[`generation-v`][`black-white`]
              .animated.front_default
          }
          w="200px"
          position="relative"
          zIndex="9"
          filter={`drop-shadow(0px 0px 2px ${
            light
              ? "var(--rtc-light-mode-bg-negative)"
              : "var(--rtc-dark-mode-bg-negative)"
          })`}
        />
        <Floor />
      </Flex>
      <Grid
        templateColumns="1fr 1fr"
        gap="20px"
        position="absolute"
        bottom="50px"
        p="20px"
        borderRadius="10px"
        left="40%"
        bgColor="var(--rtc-color-3)"
      >
        {pokemonSelected?.moves.map((move) => (
          <Flex
            key={move.id}
            p="10px"
            borderRadius="10px"
            bgColor="var(--rtc-color-2)"
            cursor="pointer"
            justify="center"
            onClick={() => mySelection(move)}
          >
            {move.name}
          </Flex>
        ))}
      </Grid>
    </Flex>
  );
};

export default Coliseum;
