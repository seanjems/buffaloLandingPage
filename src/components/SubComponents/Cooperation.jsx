import React from "react";
import {
  Box,
  Text,
  SimpleGrid,
  Stack,
  Heading,
  useBreakpointValue,
  Image,
  Flex,
} from "@chakra-ui/react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Cooperation = ({ licenseRef }) => {
  const columns = useBreakpointValue({ base: 1, md: 2 });
  return (
    <Stack
      flex={1}
      spacing={{ base: 5, md: 10 }}
      minWidth="60%"
      ref={licenseRef}
    >
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        mt="2rem"
      >
        <Text
          as={"span"}
          position={"relative"}
          fontFamily="Rockwell Nova"
          fontSize="2rem"
          //   _after={{
          //     content: "''",
          //     width: "full",
          //     height: "30%",
          //     position: "absolute",
          //     bottom: 1,
          //     left: 0,
          //     bg: "#7d14ff",
          //     zIndex: -1,
          //   }}
        >
          OUR LICENSES
        </Text>
        <br />
        {/* <Text as={"span"} color={"red.400"}>
          use everywhere!
        </Text> */}
      </Heading>

      <SimpleGrid columns={columns} spacing={4} position="relative">
        <Zoom>
          <Image
            alt={"Machine Image"}
            fit={"cover"}
            align={"center"}
            width="100%"
            height="auto"
            rounded="5px"
            src="/images/licenseOperating.jpg"
          />
        </Zoom>
        <Zoom>
          <Image
            alt={"Machine Image"}
            fit={"cover"}
            align={"center"}
            width="100%"
            height="auto"
            rounded="5px"
            src="/images/licenseImporting.jpg"
          />
        </Zoom>
      </SimpleGrid>
    </Stack>
  );
};

export default Cooperation;
