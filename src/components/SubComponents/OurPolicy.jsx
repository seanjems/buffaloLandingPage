import React from "react";
import {
  Box,
  Text,
  SimpleGrid,
  Stack,
  Heading,
  createIcon,
  Image,
  Flex,
} from "@chakra-ui/react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const OurPolicy = () => {
  const PlayIcon = createIcon({
    displayName: "PlayIcon",
    viewBox: "0 0 58 58",
    d: "M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z",
  });
  return (
    <Stack flex={1} spacing={{ base: 5, md: 10 }} minWidth="60%">
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
          OUR RULES
        </Text>
        <br />
        {/* <Text as={"span"} color={"red.400"}>
          use everywhere!
        </Text> */}
      </Heading>
      <SimpleGrid
        flexWrap="wrap"
        columns={{ base: 1, md: 2 }}
        gap="1rem"
        justifyContent="center"
        width="100%"
      >
        <Zoom>
          <Image
            alt={"Machine Image"}
            fit={"cover"}
            align={"center"}
            width="100%"
            rounded="5px"
            src="/images/buffalogames.jpeg"
          />
        </Zoom>

        <Zoom>
          <Image
            alt={"Machine Image"}
            fit={"cover"}
            align={"center"}
            width="100%"
            rounded="5px"
            src="/images/buffallorules.jpeg"
          />
        </Zoom>
      </SimpleGrid>
      <Box>
        <Text color={"gray.500"}>
          Buffalo Consultants Ltd has been an import license holder for many
          years issued by the National Lotteries and Gaming Regulatory Board
          Uganda. In 2023, the company obtained a license allowing for operating
          activities related to launching and running its own game points
          (shops) under its own registered brand Buffalo Slots.{" "}
        </Text>
        <br />
        <Text color={"gray.500"}>
          The first gaming outlets are already starting to open, our operational
          activity will soon be visible throughout Uganda. We conduct this
          activity according to developed European standards adapted to the
          Ugandan market. We are also open to cooperation with companies that
          have their own gaming points and want to use the operating license of
          Buffalo Consultants. For companies with operating licenses for gaming
          machines, we offer cooperation in the field of renting our devices for
          a longer period of time, according to individually agreed rules. We
          invite everyone willing to cooperate.
        </Text>
      </Box>
    </Stack>
  );
};

export default OurPolicy;
