import {
  Box,
  Heading,
  Text,
  Container,
  Center,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import Head from "next/head";
import { FooterBar, Nav } from "../../components";
import { About } from "../../Assets";
import styled from "styled-components";
import { ContainerWrap } from "../../components/Landing";

const Image = styled.img`
height: 452px;
width: 430px;
`

export default function AboutUs() {
  function Values({ title, icon, desc, ...rest }) {
    return (
      <Stack
        h="378px"
        textAlign="center"
        borderColor="#f15e38"
        align="center"
        shadow="md"
        bg="#161b45"
        color="white"
        borderWidth="4px"
        p="8"
        spacing={4}
        rounded="20px"
        w={{ lg: "392px" }}
        {...rest}
      >
        <Center
          rounded="full"
          borderColor="#f15e38"
          borderWidth="8px"
          boxSize="60px"
          bg="white"
        />

        <Heading fontSize="2xl">{title}</Heading>

        <Text fontSize="md">{desc}</Text>
      </Stack>
    );
  }

  return (
    <Box>
      <Head>
        <title>About Us | Klasshour</title>
        <link rel="icon" href="../img/home_logo.png" />
      </Head>
      <Nav />
      <ContainerWrap>
      <Center h={{ base: "200", lg: "280" }} color="white" bg="#161b45">
        <Container maxW="6xl">
          <Box textAlign="center">
            <Heading fontSize={{ base: "2xl", lg: "3xl" }}>About us</Heading>

            <Text pb="6" fontWeight="sm" fontSize="lg">
              We fulfill dreams of academic excellence by connecting students
              with an independent tutors in real-time.
            </Text>
          </Box>
        </Container>
      </Center>
      </ContainerWrap>
      <Container minH="70vh" maxW="6xl" bg="">
        <Center
          flexDirection={{ base: "column", lg: "row" }}
          py={{ base: "24", lg: "32" }}
        >
          <Center w={{ base: "100%", lg: "50%" }}>
            <Image
              src={About}
              alt={""}
            />
          </Center>
          <Stack mt="4" w={{ base: "100%", lg: "50%" }} spacing="6">
            <Heading fontSize="2xl" color="#1a202c">
              About Us
            </Heading>
            <Text fontSize="lg">
              Klasshour is an instant out-of-classroom online edutech platform
              that connects students to solutions to classwork, and assignments,
              preparing students for internal and external exams through
              independent tutors scattered across the African continent. We
              believe that students poor academic performance especially in
              Africa is much a result of the dilapidated status of the African
              education system, overcrowding lecture halls, abysmal student to
              lecturer ratio and we equally believe that more teachers in Africa
              are willing to help students get solutions to algebraic and other
              day-to-day academic problems.
            </Text>
            <Text fontSize="lg">
              To fulfill students’ dreams of academic excellence
            </Text>
          </Stack>
        </Center>

        <Stack direction={{ base: "column", lg: "row" }} spacing="8" pb="32">
          <Values
            title="Our Story"
            desc="For students who value great academic 
							performance or who are challenged 
							academically, we provide instant out
							-of-classroom support that delivers 
							great academic results through 
							independent tutors in our virtual 
							classroom.
							"
          />
          <Values
            title="Our Mission"
            desc="To be a place where students anywhere across Africa get solutions to assignments, classwork, understand ambiguous points in their coursework, and preparation for exams and tests.

							"
          />
          <Values
            title="Our Vision"
            desc="To fulfill students’ dreams of academic excellence"
          />
        </Stack>
      </Container>
      <FooterBar />
    </Box>
  );
}
