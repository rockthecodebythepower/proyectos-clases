import { Box, Image } from "@chakra-ui/react";

const Corona = ({ url, alt, conseguida }) => {
  return (
    <Box w="50px" h="50px">
      <Image
        src={url}
        alt={alt}
        objectFit="contain"
        w="100%"
        h="100%"
        opacity={!conseguida && 0.3}
      />
    </Box>
  );
};

export default Corona;
