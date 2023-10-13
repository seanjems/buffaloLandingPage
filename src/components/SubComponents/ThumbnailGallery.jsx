import React, { useState } from "react";
import { Box, ChakraProvider, Grid, Image } from "@chakra-ui/react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function ThumbnailGallery({ mediaPaths }) {
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(null);

  const isImage = (path) => !path.endsWith(".mp4");

  return (
    <ChakraProvider>
      <Box display="block">
        <Grid
          templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
          gap={4}
          justifyContent="space-around"
          padding="2rem"
        >
          {mediaPaths.map((path, index) => (
            <Box key={index} cursor="pointer">
              {isImage(path) ? (
                <Zoom>
                  <Image
                    src={path}
                    width="100%"
                    height="25rem"
                    alt="Thumbnail"
                  />
                </Zoom>
              ) : (
                <video width="100%" height="100%" controls autoPlay muted>
                  <source src={path} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </Box>
          ))}
        </Grid>
      </Box>

      {selectedMediaIndex !== null && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor="rgba(0, 0, 0, 0.8)"
        >
          {isImage(mediaPaths[selectedMediaIndex]) ? (
            <Zoom>
              <Image
                src={mediaPaths[selectedMediaIndex]}
                maxW="90%"
                maxH="90%"
              />
            </Zoom>
          ) : (
            <video width="80%" height="80%" controls autoPlay muted>
              <source src={mediaPaths[selectedMediaIndex]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </Box>
      )}
    </ChakraProvider>
  );
}

export default ThumbnailGallery;
