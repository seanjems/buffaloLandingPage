import React from "react";
import {
  Text,
  Stack,
  Heading,
  SimpleGrid,
  createIcon,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";

const Machines = () => {
  const PlayIcon = createIcon({
    displayName: "PlayIcon",
    viewBox: "0 0 58 58",
    d: "M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z",
  });
  const columns = useBreakpointValue({ base: 1, md: 2 });
  return (
    <Stack flex={1} spacing={{ base: 5, md: 10 }}>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
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
          OUR MACHINES
        </Text>
        <br />
        {/* <Text as={"span"} color={"red.400"}>
          use everywhere!
        </Text> */}
      </Heading>
      <SimpleGrid columns={columns} spacing={4} position="relative">
        <Image
          alt={"Machine Image"}
          fit={"contain"}
          align={"center"}
          width="fit-content"
          height="20rem"
          src="/images/slotmachines-3.png"
        />
        <Image
          alt={"Machine Image"}
          fit={"contain"}
          align={"center"}
          width="fit-content"
          height="20rem"
          src="/images/slotmachines-2.png"
        />
      </SimpleGrid>
      <Text color={"gray.500"}>
        Buffalo Consultants Ltd is an importer of gaming machines from many
        well-known European manufacturers. We are the sole representative of
        equipment from a reliable European supplier of gaming machines, Kajot.
        Games from the producer Kajot are available on five different platforms:
        Yellow Planet, Red Planet, Green Planet, Black Planet, Blue Planet and
        Purple Planet. Each of these platforms has from 12 to 24 games, various
        with fantastic mathematics that allow players to have a good time while
        playing.{" "}
      </Text>
      <Text color={"gray.500"}>
        {" "}
        We also imported Atlantis machines from Wazdan and Amatic to Uganda. The
        machines operated in Uganda are characterized by reliability and a
        variety of games. We have a specialized repair service and parts for
        replacement, we are ready to service each machine 24/7.{" "}
      </Text>
      <Text color={"gray.500"}>
        {" "}
        We can import European gaming machines from any manufacturer on the
        individual order of the recipient.
      </Text>
    </Stack>
  );
};

export default Machines;
