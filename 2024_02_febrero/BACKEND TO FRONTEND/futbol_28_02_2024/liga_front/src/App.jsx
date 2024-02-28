import axios from "axios";
import "./App.css";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const [teams, setTeams] = useState([]);
  const { register, handleSubmit } = useForm();

  const getTeams = async () => {
    const response = await axios.get(
      "https://liga-santander-back.vercel.app/api/v1/teams/"
    );
    setTeams(response.data);
  };

  useEffect(() => {
    getTeams();
  }, []); //! sólo la primera vez que se ejecute el componente ejecutaremos la función getTeams

  const postTeam = async (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("year", data.year);
    formData.append("shield", data.shield[0]);

    const response = await axios.post(
      "https://liga-santander-back.vercel.app/api/v1/teams/",
      formData
    );
    console.log(response.data);
    getTeams();
  };

  const deleteTeam = async (id) => {
    await axios.delete(
      "https://liga-santander-back.vercel.app/api/v1/teams/" + id
    );
    getTeams();
  };

  return (
    <Flex
      flexDir="column"
      minH="100svh"
      justify="center"
      align="center"
      gap="100px"
      p="30px"
    >
      <Flex gap="30px" flexWrap="wrap" justify="center" align="center">
        {teams.map((team) => {
          return (
            <Flex
              flexDir="column"
              gap="10px"
              justify="center"
              align="center"
              key={team._id}
              position="relative"
            >
              <Image
                src="/assets/roja.png"
                position="absolute"
                top="10px"
                right="10px"
                w="50px"
                transition="all 0.5s"
                cursor="pointer"
                _hover={{
                  transform: "scale(1.3)",
                }}
                onClick={() => deleteTeam(team._id)}
              />
              <Box w="150px" h="150px">
                <Image
                  src={team.shield}
                  objectFit="contain"
                  w="100%"
                  h="100%"
                />
              </Box>
              <Heading>{team.name}</Heading>
              <Text>Fundado en: {team.year}</Text>
            </Flex>
          );
        })}
      </Flex>
      <Flex>
        <form onSubmit={handleSubmit(postTeam)}>
          <Flex flexDir="column">
            <FormLabel>Nombre del equipo</FormLabel>
            <Input {...register("name")} />
          </Flex>
          <Flex flexDir="column">
            <FormLabel>Año de inauguración</FormLabel>
            <Input {...register("year")} />
          </Flex>
          <Flex flexDir="column" justify="center" align="center">
            <FormLabel>Imagen del escudo</FormLabel>
            <FormLabel htmlFor="file">
              <Image
                src="/assets/subir.png"
                w="30px"
                transition="all 0.5s"
                cursor="pointer"
                _hover={{
                  transform: "scale(1.3)",
                }}
              />
            </FormLabel>
            <Input
              id="file"
              {...register("shield")}
              type="file"
              display="none"
            />
          </Flex>
          <Button type="submit">Enviar</Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default App;
