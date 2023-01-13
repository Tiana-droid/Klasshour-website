import React from "react";
import { Link } from 'react-router-dom'
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
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import styled from "styled-components";

const Image = styled.img`
height: 48px;
width: 80%;
`
const List = styled.ul`
width: 100%;
display: flex;
list-style-type: none;
justify content: center;
align-items: center;
flex-wrap: wrap;
padding: 10px;
gap: 2em;

& li {
  font-weight: 700;
  font-size: 16px;
  text-align: center;

  & a {
    text-decoration: none;
    color: #161B45;

    &:hover {
      text-decoration: underline
    }
  }
}

@media (max-width: 1200px) {
  display: none;
}
`
const Reg = styled(List)`
padding: 0px;
gap: 24px;
font-weight: 700;
font-size: 1em;

& #log {
  color: #F15E38;
  text-decoration: none;
}

& #reg {
  width: 164px;
  height: 54px;
padding: 10px;
gap: 10px;
border: none;
background: #F15E38;
border-radius: 9px;
color: rgba(255, 252, 251, 0.9);
}

@media (max-width: 1200px) {
  display: none;
}
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
          <Link to="/">
            <Image
              src={LogoImg}
              width={500}
              alt="logo"
              height={100}
            />
          </Link>
        </Box>
        <Box>
        <List>
        <li><Link to ="/">Home</Link></li>
        <li><Link to ="/about">About us</Link></li>
        <li><Link to='/faq'>FAQ</Link></li>
        <li><Link to="/">Support</Link></li>
        <li><a href= "https://blog.klasshour.com/">Blog</a></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/">Become a tutor</Link></li>
      </List>
      
        </Box>
        <Box>
        <Reg>
        <a href="/" id='log'>Login</a>
        <a href="/"><button id='reg'>Register</button></a>
      </Reg>
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
