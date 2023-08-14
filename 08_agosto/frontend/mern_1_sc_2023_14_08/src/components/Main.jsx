import Flex from "./Flex";
import Text from "./Text";
import Grid from "./Grid";

const Main = () => {
  return (
    <main>
      <Flex column gap="20px">
        <Text justify>
          ¡Bienvenido a nuestro mundo de Styled Components en React! Si eres un
          desarrollador apasionado por crear interfaces visuales impresionantes
          y deseas mantener tu código limpio y altamente reutilizable, has
          llegado al lugar correcto.
        </Text>
        <Text primary>¿Qué son los Styled Components?</Text>
        <Text justify>
          Los Styled Components son una poderosa herramienta en el ecosistema de
          React que te permite llevar tus estilos directamente al componente. Ya
          no tienes que preocuparte por clases CSS globales, nombres de estilos
          conflictivos o especificidad. Con Styled Components, tus estilos son
          locales y encapsulados, lo que mejora la modularidad y reduce las
          posibilidades de colisiones inesperadas.
        </Text>
        <Text primary>
          Eleva tu desarrollo React a un nivel superior con Styled Components
        </Text>
        <Text justify>
          Con su capacidad para crear interfaces estilizadas y reutilizables de
          manera sencilla, tus proyectos lucirán impresionantes y tu código será
          más modular. Acompáñanos en este viaje para explorar los maravillosos
          mundos de React y Styled Components. ¡Comencemos a diseñar!
        </Text>
      </Flex>
      <Grid cols="5">
        <img src="https://img.freepik.com/iconos-gratis/spotify_318-258912.jpg" alt="Spotify logo"/>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Reddit_Logo_Icon.svg/1200px-Reddit_Logo_Icon.svg.png" alt="Reddit logo"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png" alt="LEGO logo"/>
        <img src="https://cdn2.unrealengine.com/new-ulogo-ad1a02520b73.svg?resize=1&w=530" alt="Unreal Engine"/>
        <img src="https://mmo.aiircdn.com/442/6438481e371ea.png" alt="Eurovision logo"/>
      </Grid>
    </main>
  );
};

export default Main;
