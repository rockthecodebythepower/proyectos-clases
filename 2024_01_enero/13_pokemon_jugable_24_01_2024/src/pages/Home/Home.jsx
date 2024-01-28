import { Flex, Image } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import { Link } from "react-router-dom";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const { light } = useContext(ThemeContext);

  useEffect(() => {
    const ALL_POKEMONS = [];

    for (let i = 1; i <= 151; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((res) => res.json())
        .then((res) => {
          ALL_POKEMONS.push(res);
          if (i === 151) {
            setPokemons(ALL_POKEMONS);
          }
        });
    }
  }, []);

  return (
    <Flex
      wrap="wrap"
      justify="center"
      align="center"
      gap="20px"
      p="50px"
      pt="200px"
    >
      {pokemons.map((pokemon) => (
        <Link key={pokemon.id} to={`/coliseum/${pokemon.id}`}>
          <Image
            w="100px"
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
            cursor="pointer"
            filter={`drop-shadow(0px 0px 2px ${
              light
                ? "var(--rtc-light-mode-bg-negative)"
                : "var(--rtc-dark-mode-bg-negative)"
            })`}
            transition="all 0.5s"
            _hover={{
              transform: "scale(1.1)",
              filter: `drop-shadow(0px 0px 8px)`,
            }}
          />
        </Link>
      ))}
    </Flex>
  );
};

export default Home;
