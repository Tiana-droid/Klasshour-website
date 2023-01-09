import React from "react";
import {LogoImg } from "../Assets";
import{
  Flex,
  Box,
  UnorderedList,
  ListItem,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import styled from "styled-components";

const Image = styled.img`
height: 48px;
width: 80%;
`

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = () => {
    onOpen();
  };
  return (
    <>
      <Flex
        display={{ base: "none", md: "none", lg: "flex" }}
        align="center"
        justifyContent="space-evenly"
        h="105px"
      >
        <Box>
          <Link href="/">
            <Image
              src={LogoImg}
              width={500}
              alt="logo"
              height={100}
            />
          </Link>
        </Box>
        <Box>
          <UnorderedList display="flex" gap={4} style={{ listStyle: "none" }}>
            <ListItem fontWeight={800}>
              <Link href="./">Home</Link>
            </ListItem>
            <ListItem fontWeight={800}>
              <Link href="./about-us">About us</Link>
            </ListItem>
            <ListItem fontWeight={800}>
              <Link href="./faq">FAQ</Link>
            </ListItem>
            <ListItem fontWeight={800}>
              <Link href="./contact">Contact</Link>
            </ListItem>
            <ListItem fontWeight={800}>
              <Link href="./">Support</Link>
            </ListItem>
            <ListItem fontWeight={800}>
              <Link href="https://blog.klasshour.com/">Blog</Link>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <UnorderedList
            display="flex"
            gap={4}
            alignItems="center"
            style={{ listStyle: "none" }}
          >
            <ListItem fontWeight={500} color="#F15E38">
              {/* <Link href="./auth/Login">Login</Link> */}
            </ListItem>
            <ListItem>
              <Button
                backgroundColor="#F15E38"
                color="#fff"
                _hover={{ backgroundColor: "#ff6943" }}
              >
                <Link href="https://app.klasshour.com">Account</Link>
              </Button>
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
      <Flex
        p={3}
        h="70px"
        justifyContent="space-between"
        display={{ base: "flex", md: "flex", lg: "none" }}
        align="center"
      >
        <Box>
          <Link href="/">
            <Image
              src="/img/Klasshourlogo.svg"
              width={200}
              alt="logo"
              height={200}
            />
          </Link>
        </Box>
        <HamburgerIcon
          fontSize={24}
          as="button"
          onClick={() => handleClick()}
          m={4}
        />
      </Flex>
      <Drawer onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Box>
              <Image
                src="/img/Klasshourlogo.svg"
                width={200}
                alt="logo"
                height={200}
              />
            </Box>
          </DrawerHeader>
          <DrawerBody>
            <Flex
              flexDirection="column"
              align="flex-start"
              p={0}
              m={0}
              gap="3"
              justifyContent="space-evenly"
              h="70px"
            >
              <Box mt={36}>
                <UnorderedList
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-evenly"
                  style={{ listStyle: "none" }}
                >
                  <ListItem fontSize={24} fontWeight={400}>
                    <Link href="./about-us">About us</Link>
                  </ListItem>
                  <ListItem fontSize={24} fontWeight={400}>
                    <Link href="./faq">FAQ</Link>
                  </ListItem>
                  <ListItem fontSize={24} fontWeight={400}>
                    <Link href="./contact">Contact</Link>
                  </ListItem>
                  <ListItem fontWeight={500}>
                    <Link href="https://blog.klasshour.com/">Blog</Link>
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box>
                <UnorderedList
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-evenly"
                  style={{ listStyle: "none" }}
                >
                  <ListItem fontSize={24} fontWeight={400} color="#F15E38">
                    <Link href="./auth/Login">Login</Link>
                  </ListItem>
                  <ListItem>
                    <Button
                      fontSize={24}
                      fontWeight={400}
                      backgroundColor="#F15E38"
                      color="#fff"
                      _hover={{ backgroundColor: "#ff6943" }}
                    >
                      <Link href="./auth/register">Register</Link>
                    </Button>
                  </ListItem>
                </UnorderedList>
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
