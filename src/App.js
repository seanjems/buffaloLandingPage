import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import HeaderSection from "./components/HeaderSection";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { useEffect, useRef, useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const topRef = useRef();
  const onlineCasinoRef = useRef();
  const shopsRef = useRef();
  const licenseRef = useRef();
  const aboutUsRef = useRef();

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isVisible = currentScrollPos > 100;
    setIsVisible(isVisible);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ChakraProvider>
      <HeaderSection />
      <Navbar shopsRef={shopsRef} licenseRef={licenseRef} topRef={topRef} />
      <Hero shopsRef={shopsRef} licenseRef={licenseRef} topRef={topRef} />
      <Footer />
      <IconButton
        position="fixed"
        bottom="4"
        right="4"
        visibility={isVisible ? "visible" : "hidden"}
        icon={<FaArrowUp />}
        onClick={handleScrollToTop}
        bg="gray.600"
        color="white"
        _hover={{ bg: "gray.700" }}
        _active={{ bg: "gray.800" }}
      />
    </ChakraProvider>
  );
}

export default App;
