import React from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  Divider,
  Center,
  Image,
  Button,
  HStack,
  chakra,
} from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
// import Carousel from "nuka-carousel";
import Link from "next/link";
import { Header, FooterBar } from "../../components";
import { useRouter } from "next/router";

export default function Become_a_tutor() {
  const router = useRouter();

  const register = () => router.push("/auth/register");

  function Features({ title, icon, desc, flex }) {
    return (
      <Center minH="500px">
        <Container maxW={"6xl"}>
          <Stack
            flexDirection={["column", flex ? "row-reverse" : "row"]}
            justifyContent="space-between"
            as={Center}
            align="center"
          >
            <Box>
              <Image
                src={`./img/illustrations/${icon}`}
                alt={title}
                h="sm"
                w={{ base: "42", lg: "lg" }}
              />
            </Box>
            <Box maxW={{ lg: "sm" }}>
              <Text fontWeight="medium" fontSize="3xl">
                {title}
              </Text>
              <Text fontSize="sm">{desc}</Text>
            </Box>
          </Stack>
        </Container>
      </Center>
    );
  }

  return (
    <>
      <Header />
      <Box>
        <Head>
          <title>Become A Tutor | Klasshour</title>
          <link rel="icon" href="../img/home_logo.png" />
        </Head>
        <Center minH={{ base: "200", lg: "280" }} color="white" bg="#161b45">
          <Container maxW="6xl">
            <Stack as={Center} textAlign="center">
              <Heading fontSize={{ base: "2xl", lg: "3xl" }}>
                Become A Tutor.
              </Heading>
              <Text pb="6" fontWeight="sm" fontSize="lg">
                Offer your students the best you can.
              </Text>
              <Button
                bg="#f15e38"
                // rightIcon={<AiOutlineArrowRight />}
                color="white"
                rounded="0"
                _hover={{ opacity: "0.9" }}
                _active={{
                  bg: "#f15e38",
                }}
                w="32"
                size="lg"
                onClick={register}
              >
                Register
              </Button>
            </Stack>
          </Container>
        </Center>

        <Stack spacing="10">
          <Features
            title="Get started for free"
            desc="Signup and complete your profile to become a tutor with	klasshour and start earning"
            icon="get_started.svg"
            flex={false}
          />
          <Features
            title="Teach Anywhere Anytime"
            desc="Take student at your own conveniency. Be online when you can
									teach."
            icon="Teach_anywhere.svg"
            flex={true}
          />
          <Features
            title="State your price"
            desc="Only you can set the price for your service. State how much
									you charge per hour."
            icon="Get_paid.svg"
            flex={false}
          />
          <Features
            title="Add Subject"
            desc="There is no limit to the subject you can take. Add as many as
									you want."
            icon="add.svg"
            flex={true}
          />
          <Features
            title="Secure Payment"
            desc="Student get charged for the minutes they spend with you. Relax
									take student and receive your payment."
            icon="payment.svg"
            flex={false}
          />
        </Stack>
        <>
          <Center
            minH="100vh"
            // m='auto'
            as={Container}
            maxW="6xl"
            textAlign="center"
            justifyContent="center"
          >
            <Stack
              spacing="4"
              flexDirection="column"
              justifyContent={["space-between", "center"]}
              align="center"
            >
              <Heading
                fontSize={{ base: "3xl", lg: "6xl" }}
                color="#151a46"
                w="70"
                fontWeight="bold"
              >
                Become a tutor with <br /> Klasshour
              </Heading>
              <Text
                w="100%"
                display="block"
                pt="6"
                fontSize="lg"
                color="gray.500"
                mb={10}
              >
                Find students all over the world, Use Klasshour modern
                <Text>
                  Virtual Classroom, Teach on your own time and Get paid
                  securely.
                </Text>
              </Text>

              <Link href="/auth/register">
                <Button
                  variant="outline"
                  size="lg"
                  rightIcon={<AiOutlineArrowRight />}
                  // fontSize={['6xl', '0', '8xl', '3xl', 'lg']}
                  bg="#f15e38"
                  color="white"
                  _hover={{
                    bg: "#f15e38",
                  }}
                  _active={{
                    transform: "scale(0.92)",
                  }}
                  _focus={{
                    textDecoration: "none",
                  }}
                >
                  Register
                </Button>
              </Link>
              {/* <Image
                                w="100%"
                                mt={10}
                            h="400px"
                            objectFit="cover"
                            src="../img/class.jpg" /> */}
            </Stack>
          </Center>
        </>
      </Box>
      <FooterBar />
    </>
  );
}
