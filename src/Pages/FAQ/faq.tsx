import React from "react";
import styled from "styled-components";
import Head from "next/head";
import {
  Box,
  Heading,
  Text,
  Accordion,
  Container,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  OrderedList,
  ListItem,
  Stack,
  Center,
  chakra,
} from "@chakra-ui/react";
import Link from "next/link";
import { FooterBar, Nav } from "../../components";

const ContainerWrap = styled.div`
  width: 100%;
  background: #f6f6f8;
  height: fit-content;
  margin-top: 10%;
  padding: 20px 0px;
  @media (max-width: 1115px) {
    margin-top: 20%;
  }
  @media (max-width: 670px) {
    margin-top: 30%;
  }
`;

export default function request() {
  return (
    <Box>
      <Head>
        <title>FAQ | Klasshour</title>
        <link rel="icon" href="../img/home_logo.png" />
      </Head>
      <Nav />
      <ContainerWrap>
        <Center minH={{ base: "200", lg: "280" }} color="white" bg="#161b45">
          <Container maxW="6xl">
            <Stack as={Center} textAlign="center">
              <Heading fontSize={{ base: "2xl", lg: "3xl" }}>
                Frequently Asked Questions.
              </Heading>
              <Text pb="6" fontWeight="sm" fontSize="lg">
                Ask questions, improves your learning
              </Text>
            </Stack>
          </Container>
        </Center>
      </ContainerWrap>

      <Container maxW="6xl">
        <Box>
          <Accordion allowToggle mt="10" mb="20">
            <AccordionItem p="5">
              <h2>
                <AccordionButton
                  _focus={{
                    border: "0",
                  }}
                >
                  <Box w="6xl" display="flex">
                    <Text pl={{ lg: "10" }} fontSize="lg" fontWeight="medium">
                      Payment duration
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel display="flex" alignItems="center" pb={4}>
                <Text pl={{ lg: "10" }} fontSize="md">
                  You’ll receive payment for your session in your wallet after
                  receiving confirmation of session completed by your student.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem p="5">
              <h2>
                <AccordionButton
                  _focus={{
                    border: "0",
                  }}
                >
                  <Box w="6xl" display="flex">
                    <Text pl={{ lg: "10" }} fontSize="lg" fontWeight="medium">
                      Introductory Video Requirement
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel display="flex" alignItems="center" pb={4}>
                <Stack spacing="4">
                  <Text pl={{ lg: "10" }} fontWeight="medium" fontSize="lg">
                    Introductory video must include the following:
                  </Text>
                  <OrderedList
                    fontWeight="normal"
                    fontSize="md"
                    spacing="2"
                    pl="20"
                  >
                    <ListItem>Your Full Name</ListItem>
                    <ListItem>Where you are from</ListItem>
                    <ListItem>
                      What subjects, languages, and skills do you teach
                    </ListItem>
                    <ListItem>In what languages can you tutor</ListItem>
                  </OrderedList>
                  <Text pl={{ lg: "10" }} fontWeight="medium" fontSize="lg">
                    Video Checklist:
                  </Text>
                  <OrderedList
                    fontWeight="normal"
                    fontSize="md"
                    spacing="2"
                    pl="20"
                  >
                    <ListItem>
                      Your video Must be a maximum of 30 seconds
                    </ListItem>
                    <ListItem>Landscape mode</ListItem>
                    <ListItem>Use Your mobile phone to record</ListItem>
                    <ListItem>Audible and High-quality video</ListItem>
                  </OrderedList>
                </Stack>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem p="5">
              <h2>
                <AccordionButton
                  _focus={{
                    border: "0",
                  }}
                >
                  <Box w="6xl" display="flex">
                    <Text pl={{ lg: "10" }} fontSize="lg" fontWeight="medium">
                      Getting Reviews
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel display="flex" alignItems="center" pb={4}>
                <Text pl={{ lg: "10" }} fontSize="md">
                  At the end of the session, the student will get to rate your
                  performance. Make sure to remind your student to review you
                  before the end of the session. A good review increases the
                  number of student you’ll get
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem p="5">
              <h2>
                <AccordionButton
                  _focus={{
                    border: "0",
                  }}
                >
                  <Box w="6xl" display="flex">
                    <Text pl={{ lg: "10" }} fontSize="lg" fontWeight="medium">
                      How I get students
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel display="flex" alignItems="center" pb={4}>
                <Text pl={{ lg: "10" }} fontSize="md">
                  Your profile and price will determine if the student will like
                  to hire you or not and if the student likes you, they will
                  request to start a session with you.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem p="5">
              <h2>
                <AccordionButton
                  _focus={{
                    border: "0",
                  }}
                >
                  <Box w="6xl" display="flex">
                    <Text pl={{ lg: "10" }} fontSize="lg" fontWeight="medium">
                      Purpose of introductory video
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel display="flex" alignItems="center" pb={4}>
                <Text pl={{ lg: "10" }} fontSize="md">
                  The introductory video of yourself will present your
                  communication skills, the subjects that you teach and in what
                  language can you teach them. This will be visible in your
                  profile to students and it will help them decide if you are
                  fit for the problem they want to solve.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem p="5">
              <h2>
                <AccordionButton
                  _focus={{
                    border: "0",
                  }}
                >
                  <Box w="6xl" display="flex">
                    <Text pl={{ lg: "10" }} fontSize="lg" fontWeight="medium">
                      Add subjects
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel display="flex" alignItems="center" pb={4}>
                <Text pl={{ lg: "10" }} fontSize="md">
                  Our student cut across all levels especially, we focus more
                  from Secondary/High school level PhD students. You can teach
                  anyone interested in learning or solving a problem by adding
                  the subjects, languages, test preps that you’re able to teach.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem p="5">
              <h2>
                <AccordionButton
                  _focus={{
                    border: "0",
                  }}
                >
                  <Box w="6xl" display="flex">
                    <Text pl={{ lg: "10" }} fontSize="lg" fontWeight="medium">
                      How do i signup to Klasshour?
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel display="flex" alignItems="center" pb={4}>
                <Text pl={{ lg: "10" }} fontSize="md">
                  You can signup to Klasshour by clicking on the “Register”
                  button on the top right corner of the page. or{" "}
                  <Link href="/auth/register">
                    <chakra.span color="blue.500" cursor="pointer">
                      click here
                    </chakra.span>
                  </Link>{" "}
                  to signup.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Container>
      <FooterBar />
    </Box>
  );
}
