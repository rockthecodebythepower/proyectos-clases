import "./App.css";
import Text from "./components/Text/Text";
import Button from "./components/Button/Button";
import Flex from "./components/Flex/Flex";
import Link from "./components/Link/Link";

const App = () => {
  return (
    <>
      <Flex wrap="wrap" gap="large">
        <Text size="small">Esto es un párrafo</Text>
        <Text variant="secondary">Esto es otro párrafo</Text>
        <Text variant="warning" size="large">
          Esto es una alerta
        </Text>
        <Text variant="danger" size="xl">
          Esto es un error
        </Text>
      </Flex>
      <Flex direction="row" gap="xl" wrap="wrap">
        <Button size="small" action={() => console.log("Hola")}>
          Click me
        </Button>
        <Button variant="secondary" action={() => console.log("Adios")}>
          Secondary
        </Button>
        <Button variant="warning" size="large" action={() => alert("Warning!")}>
          Warning
        </Button>
        <Button variant="danger" size="xl" action={() => alert("Danger!")}>
          Danger
        </Button>
      </Flex>
      <Flex gap="large">
        <Link source="http://google.com">Google</Link>
        <Link
          source="http://github.com"
          icon="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7914417/github-icon-md.png"
        >
          GitHub
        </Link>
        <Link
          source="http://twitter.com"
          icon="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png"
          external
        >
          Twitter
        </Link>
      </Flex>
    </>
  );
};

export default App;
