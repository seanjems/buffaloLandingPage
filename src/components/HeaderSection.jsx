import React from "react";
import { Box, Image, Heading } from "@chakra-ui/react";

const HeaderSection = () => {
  const boxStyle = {
    position: "relative",
  };

  const headingTextStyle = {
    display: "flex",
    gap: "0.5rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity: "100%",
    alignItems: "center",
  };

  const letterStyle = {
    display: "inline-block",
    // backgroundColor: "white",
    padding: "2px",
    borderRadius: "5px",
    // textShadow: "4px 4px 4px rgba(255,255,255,0.7)",
    // color: "red",
  };

  return (
    <Box sx={boxStyle}>
      <Image
        src="/images/coverImage2.png"
        alt=""
        maxHeight="13rem"
        boxSize="100%"
        objectFit="cover"
      />
      {/* <Box sx={headingTextStyle}>
        <Image
          src="/images/logoLarge2.png"
          alt=""
          boxSize="100%"
          objectFit="contain"
          width="7rem"
          borderRadius="5px"
        />
        <Box display="flex">
          <Heading
            letterSpacing="5px"
            fontFamily="Rockwell Nova Extra Bold"
            textAlign="center"
            sx={letterStyle}
            color="#f23afa"
            fontSize={{ base: "1rem", sm: "2rem", md: "3rem" }}
          >
            BUFFALO SLOTS
          </Heading>
        </Box>
      </Box> */}
    </Box>
  );
};

export default HeaderSection;
