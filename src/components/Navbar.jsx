import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { Link } from "react-scroll";
export default function Navbar({ shopsRef, licenseRef }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
            display="flex"
            gap="0.5rem"
            alignItems="center"
            fontWeight="bold"
            cursor="pointer"
          >
            <Box as="a" href="http://buffaloslots.online">
              <Image
                src="/images/logoLarge2.png"
                alt=""
                boxSize="100%"
                objectFit="contain"
                width="2rem"
                borderRadius="5px"
                shadow="4px 4px 4px rgba(0,0,0,0.7)"
              />
            </Box>
          </Text>
          <Flex
            flexGrow="1"
            justifyContent="start"
            fontFamily="Rockwell Nova"
            fontSize="1.5rem"
          >
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav shopsRef={shopsRef} licenseRef={licenseRef} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = ({ shopsRef, licenseRef }) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const handleScrollNav = (buttonaLabel) => {
    console.log(
      "🚀 ~ file: Navbar.jsx:102 ~ handleScrollNav ~ buttonaLabel:",
      buttonaLabel
    );

    if (buttonaLabel.toLocaleLowerCase() === "shops") {
      shopsRef.current.scrollIntoView({ behavior: "smooth" });
      console.log(
        "🚀 ~ file: Navbar.jsx:109 ~ handleScrollNav ~ shopsRef.current:",
        shopsRef.current
      );
    }
    if (buttonaLabel.toLocaleLowerCase() === "license") {
      licenseRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (buttonaLabel.toLocaleLowerCase() === "about us") {
      window.open("https://buffaloconsultants.com/", "_blank")?.focus();
    }
    if (buttonaLabel === "E-PLAY AFRICA") {
      window.open("https://e-playafrica.com/", "_blank")?.focus();
    }
  };
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                to={navItem.label.toLocaleLowerCase().replace(" ", "")}
                smooth={true}
                duration={500}
              >
                <Box
                  as="a"
                  p={2}
                  href={navItem.href ?? "#"}
                  fontSize={"sm"}
                  fontWeight={500}
                  color={linkColor}
                  onClick={() => handleScrollNav(navItem.label)}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Box>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      as="a"
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  //   {
  //     label: "MENU",
  //     children: [
  //       {
  //         label: "Explore Design Work",
  //         subLabel: "Trending Design to inspire you",
  //         href: "#",
  //       },
  //       {
  //         label: "New & Noteworthy",
  //         subLabel: "Up-and-coming Designers",
  //         href: "#",
  //       },
  //     ],
  //   },
  {
    label: "ONLINE CASINO",
    // children: [
    //   {
    //     label: "Job Board",
    //     subLabel: "Find your dream design job",
    //     href: "#",
    //   },
    //   {
    //     label: "Freelance Projects",
    //     subLabel: "An exclusive list for contract work",
    //     href: "#",
    //   },
    // ],
  },
  {
    label: "SHOPS",
    href: "#",
  },
  {
    label: "LICENSE",
    href: "#",
  },
  {
    label: "E-PLAY AFRICA",
    href: "#",
  },
  {
    label: "ABOUT US",
    href: "#",
  },
];
