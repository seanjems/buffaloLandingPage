import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Image,
  useBreakpointValue,
  Flex,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { ReactNode } from "react";

const Logo = (props) => {
  return (
    <Text
      textAlign={useBreakpointValue({ base: "center", md: "left" })}
      fontFamily={"heading"}
      color={useColorModeValue("gray.800", "white")}
      display="flex"
      gap="0.5rem"
      fontFamily="Rockwell"
      alignItems="center"
      fontWeight="bold"
      cursor="pointer"
      as="a"
      href="https://buffaloslots.online"
    >
      <Image
        src="/images/buffaloLogo.jpg"
        alt=""
        boxSize="100%"
        objectFit="contain"
        width="2rem"
        borderRadius="5px"
        shadow="4px 4px 4px rgba(0,0,0,0.7)"
      />{" "}
      BUFFALO SLOTS
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo />
        <Flex flexDirection="column" alignItems="center">
          <Text>
            © {new Date().getFullYear()}{" "}
            <Text as="a" href="https://buffaloconsultants.com/" target="_black">
              BUFFALO CONSULTANTS LTD.
            </Text>{" "}
          </Text>
          <Text>All rights reserved</Text>
        </Flex>
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"Twitter"}
            href={
              "https://twitter.com/SBufallo23820?t=6NaVEYk3c7V4cLUJZ4yRHg&s=08"
            }
          >
            <FaTwitter />
          </SocialButton>
          <SocialButton
            label={"LinkedIn"}
            href={
              "https://www.linkedin.com/company/buffalo-slots/?viewAsMember=true"
            }
          >
            <FaLinkedin />
          </SocialButton>
          <SocialButton
            label={"Facebook"}
            href={"https://www.facebook.com/profile.php?id=100092593178285"}
          >
            <FaFacebook />
          </SocialButton>
          <SocialButton
            label={"WhatsApp"}
            href={"https://chat.whatsapp.com/Hds3jW5zWLQ7m53izzw9Vo"}
          >
            <FaWhatsapp />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
