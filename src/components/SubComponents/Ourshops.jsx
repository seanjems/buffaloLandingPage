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

const Ourshops = ({ shopsRef }) => {
  const columns = useBreakpointValue({ base: 1, md: 2 });
  return (
    <Stack flex={1} spacing={{ base: 5, md: 10 }} minWidth="60%" ref={shopsRef}>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        mt="2rem"
      >
        <Text
          as={"span"}
          position={"relative"}
          fontSize="2rem"
          fontFamily="Rockwell Nova"
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
          OUR SHOPS
        </Text>
        <br />
        {/* <Text as={"span"} color={"red.400"}>
          use everywhere!
        </Text> */}
      </Heading>
      <SimpleGrid columns={columns} spacing={4} position="relative">
        <Image
          alt={"Machine Image"}
          fit={"cover"}
          align={"center"}
          width="100%"
          rounded="5px"
          src="/images/shop1.jpeg"
        />
        <Image
          alt={"Machine Image"}
          fit={"cover"}
          align={"center"}
          height="100%"
          rounded="5px"
          src="/images/shop2.jpeg"
        />
      </SimpleGrid>
      <SimpleGrid columns={columns} spacing={4} position="relative">
        <Image
          alt={"Machine Image"}
          fit={"cover"}
          align={"center"}
          width="100%"
          rounded="5px"
          src="/images/shop3.jpeg"
        />
        <Image
          alt={"Machine Image"}
          fit={"cover"}
          align={"center"}
          height="100%"
          rounded="5px"
          src="/images/shop6.jpeg"
        />
      </SimpleGrid>
      <SimpleGrid columns={columns} spacing={4} position="relative">
        <Image
          alt={"Machine Image"}
          fit={"cover"}
          align={"center"}
          width="100%"
          rounded="5px"
          src="/images/shop4.jpeg"
        />
        <Image
          alt={"Machine Image"}
          fit={"cover"}
          align={"center"}
          height="100%"
          rounded="5px"
          src="/images/shop5.jpeg"
        />
      </SimpleGrid>
      <Box>
        <Text color={"gray.500"}>
          All our game points are equipped with reliable Kajot machines that
          have a variety of games located on many platforms. The games are
          specially selected to meet the needs of local players. The machines
          are connected to the Internet which allows for the elimination of
          errors and the introduction of the Jackpot out in some machines.
          Ultimately, this year all machines of the Kajot brand will have a
          Jackpot, which will make the offer addressed to players more
          attractive. Players can count on expert advice and information
          provided by our employees to make it easier to play on our devices.{" "}
        </Text>
        <br />
        <Text color={"gray.500"}>
          We also take care of the responsibility rules, if players notice
          excessive play, conversations are held with them to avoid social
          problems, and in the worst cases, a ban on further play is issued.
        </Text>
      </Box>
    </Stack>
  );
};

export default Ourshops;
