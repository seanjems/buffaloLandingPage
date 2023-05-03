import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import Machines from "./SubComponents/Machines";
import OurPolicy from "./SubComponents/OurPolicy";
import Cooperation from "./SubComponents/Cooperation";
import OurShops from "./SubComponents/Ourshops";
const PlayIcon = createIcon({
  displayName: "PlayIcon",
  viewBox: "0 0 58 58",
  d: "M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z",
});
export default function Hero({ shopsRef, licenseRef, topRef }) {
  const columns = useBreakpointValue({ base: 1, md: 2 });
  const numberOfTiles = useBreakpointValue({ base: 1, md: 2 });
  let gameCounter = 0;
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"start"}
        spacing={{ base: 8, md: 10 }}
        mb="2rem"
        mt="1rem"
        direction={{ base: "column", md: "row" }}
      >
        <Flex flexDirection="column" justifyContent="start">
          <Machines />
          <OurPolicy />
          <OurShops shopsRef={shopsRef} />
          <Cooperation licenseRef={licenseRef} />
        </Flex>
        <Box
          minWidth="40%"
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="start"
          gap="1rem"
        >
          <Text fontSize="2rem" fontWeight="black" fontFamily="Rockwell Nova">
            OUR GAMES
          </Text>
          <SimpleGrid columns={columns} spacing={4} position="relative">
            <Blob
              w={"100%"}
              h={"100%"}
              position={"absolute"}
              top={"-20%"}
              left={0}
              overflow="clip"
              zIndex={-1}
              color={useColorModeValue("red.50", "red.400")}
            />

            {[...Array(numberOfTiles)].map((_, index) =>
              GamesLinks.map((item, index) => {
                gameCounter++;
                return gameCounter < 37 ? (
                  <GameComponent
                    key={index}
                    name={item.gameName}
                    image={item.gameImage}
                    link={item.gameLink}
                  />
                ) : (
                  ""
                );
              })
            )}
          </SimpleGrid>
        </Box>
      </Stack>
    </Container>
  );
}

export const GameComponent = ({ image, name, link }) => {
  const height = useBreakpointValue({ base: "14rem", lg: "10rem" });
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      gap="0.5rem"
      as="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Box
        position={"relative"}
        height="fit-content"
        rounded={".8rem"}
        boxShadow={"2xl"}
        width={"full"}
        overflow={"hidden"}
      >
        <IconButton
          aria-label={"Play Button"}
          variant={"ghost"}
          _hover={{ bg: "transparent" }}
          icon={<PlayIcon w={12} h={12} />}
          size={"lg"}
          color={"white"}
          position={"absolute"}
          left={"50%"}
          top={"50%"}
          transform={"translateX(-50%) translateY(-50%)"}
        />
        <Image
          alt={"Hero Image"}
          fit={"cover"}
          align={"center"}
          width="100%"
          height={height}
          src={image}
        />
      </Box>

      <Text fontWeight="bold" color="black" textTransform="uppercase">
        {name}
      </Text>
    </Flex>
  );
};

export const Blob = (props) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};

export const GamesLinks = [
  {
    gameName: "MULTI VEGAS 81",
    gameImage: "/images/multivegas81.webp",
    gameLink: "https://kajotgames.com/games/multi-vegas-81/",
  },
  {
    gameName: "SUPER JOKER 40",
    gameImage: "/images/Super-Joker-40-main-photo.webp",
    gameLink: "https://kajotgames.com/games/super-joker-40/",
  },
  {
    gameName: "ALCHEMY SCATER",
    gameImage: "/images/Alchemy-main-photo.webp",
    gameLink: "https://kajotgames.com/games/alchemy/",
  },
  {
    gameName: "VIKINGS",
    gameImage: "/images/Simply-The-Best-81-main-photo.webp",
    gameLink: "https://kajotgames.com/games/vikings/",
  },
  {
    gameName: "9 STARS",
    gameImage: "/images/9-stars-main-photo.webp",
    gameLink: "https://kajotgames.com/games/9-stars/",
  },
  {
    gameName: "JOKER 27",
    gameImage: "/images/Joker-27-main-photo-mobile.webp",
    gameLink: "https://kajotgames.com/games/joker-27/",
  },
  {
    gameName: "JOKER STRONG",
    gameImage: "/images/Joker-Strong_thumbnail.webp",
    gameLink: "https://kajotgames.com/games/joker-boom/",
  },
  {
    gameName: "JOKER BOOM",
    gameImage: "/images/Joker-Boom_thumbnail.webp",
    gameLink: "https://kajotgames.com/games/simply-the-best-81/",
  },
  {
    gameName: "TUTTI FRUTTI",
    gameImage: "/images/Tutti_Frutti_thumbnail.png",
    gameLink: "https://kajotgames.com/games/tutti-frutti/",
  },
  {
    gameName: "RETRO WHEELS",
    gameImage: "/images/Retro-Wheels_600x294_thumbnail.png",
    gameLink: "https://kajotgames.com/games/retro-wheels/",
  },
  {
    gameName: "MULTI DIAMONDS 81",
    gameImage: "/images/Multi-Diamonds-81_thumbnail.webp",
    gameLink: "https://kajotgames.com/games/multi-diamonds-81/",
  },
  {
    gameName: "RING OF FIRE XL",
    gameImage: "/images/Ring-Of-Fire-XL_thumbnail.webp",
    gameLink: "https://kajotgames.com/games/ring-of-fire-xl/",
  },
  {
    gameName: "TURBO 27",
    gameImage: "/images/Turbo_27_thumbnail.webp",
    gameLink: "https://kajotgames.com/games/turbo-27/",
  },
  {
    gameName: "JOKER 81",
    gameImage: "/images/Joker-81_thumbnail.webp",
    gameLink: "https://kajotgames.com/games/joker-81/",
  },
  {
    gameName: "PUPPET SHOW",
    gameImage: "/images/Puppet-Show_thumbnail.webp",
    gameLink: "https://kajotgames.com/games/puppet-show/",
  },
  {
    gameName: "MONSTER SLOTS",
    gameImage: "/images/Monster-Slots_thumbnail.webp",
    gameLink: "https://kajotgames.com/games/monster-slots/",
  },
  {
    gameName: "WANTED",
    gameImage: "/images/Wanted_thumbnail.webp",
    gameLink: "https://kajotgames.com/games/wanted/",
  },
  {
    gameName: "POLY DIAMONDS",
    gameImage: "/images/Poly-Diamonds_thumbnail.webp",
    gameLink: "https://kajotgames.com/games/poly-diamonds/",
  },
  {
    gameName: "ICE BAR 27",
    gameImage: "/images/Ice-Bar-27_thumbnail.webp",
    gameLink: "https://kajotgames.com/games/ice-bar-27/",
  },
  {
    gameName: "FOOTBALL ON FIRE",
    gameImage: "/images/Football_on_fire-BELGIUM_icon_600x294-1.png",
    gameLink: "https://kajotgames.com/games/football-on-fire/",
  },
];
