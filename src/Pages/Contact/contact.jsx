import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  Center,
  Input,
  HStack,
  FormLabel,
  Textarea,
  Link,
  FormControl,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import Head from "next/head";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { FooterBar, Nav } from "../../components";
import { ContainerWrap } from "../../components/Landing";

export default function Contact() {
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: Yup.object({
      fName: Yup.string().required("First name is required"),
      lName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Email is invalid")
        .required("Email is required"),
      phoneNumber: Yup.string().required("Phone number is required"),
      message: Yup.string().required("Message is required"),
    }),

    onSubmit: async (values) => {
      setIsLoading(true);

      console.log("values:", values);
      await axios
        .post("/api/send-mail", {
          fullName: `${values.fName} ${values.lName}`,
          email: values.email,
          phoneNumber: values.phoneNumber,
          subject: "Contact Form",
          message: values.message,
          type: "contact",
        })
        .then((response) => {
          toast({
            title: "Message Sent",
            description:
              "Thank you for contacting us! We will get back to you as soon as possible.",
            status: "success",
            duration: 10000,
            isClosable: true,
            position: "top-right",
          });
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);

          toast({
            title: "Error sending message",
            description: "Please try again later.",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top-right",
          });
        });
    },
  });

  return (
    <Box>
      <Head>
        <title>Contact | Klasshour</title>
        <link rel="icon" href="../img/home_logo.png" />
      </Head>
      <Nav />
      <ContainerWrap>
      <Center minH={{ base: "200", lg: "280" }} color="white" bg="#161b45">
        <Container maxW="6xl">
          <Stack as={Center} textAlign="center">
            <Heading fontSize={{ base: "2xl", lg: "3xl" }}>Contact us</Heading>
            <Text pb="6" fontWeight="sm" fontSize="lg">
              We always here to responed to you
            </Text>
          </Stack>
        </Container>
      </Center>
      </ContainerWrap>
      <Container maxW="6xl">
        <Stack
          direction={{ base: "column", lg: "row" }}
          as={Center}
          justifyContent="space-around"
          pb="20"
          minH="100vh"
        >
          <Stack w="xs" spacing="10" mt="20">
            <Box>
              <Text fontWeight="bold" fontSize="2xl">
                Get in touch
              </Text>
            </Box>
            <Box>
              <FormLabel fontWeight="medium" fontSize="sm">
                Phone
              </FormLabel>
              <Link color="blue" href="tel:+234-813-934-5173" ml="4">
                +234-813-934-5173
              </Link>
            </Box>

            <Box>
              <FormLabel fontWeight="medium" fontSize="sm">
                Email
              </FormLabel>
              <Link color="blue" href="mailto:support@klasshour.com" ml="4">
                support@klasshour.com
              </Link>
            </Box>
            <Box>
              <FormLabel fontWeight="medium" fontSize="sm">
                Address
              </FormLabel>
              <Text ml="4">
                Wesco Estate Federal University of Technology, Akure 340252,
                Nigeria.
              </Text>
            </Box>
          </Stack>
          <Stack
            spacing="4"
            mt="20"
            p="5"
            borderRadius="sm"
            border="1px solid #e2e8f0"
          >
            <form onSubmit={formik.handleSubmit}>
              <HStack>
                <FormControl
                  //@ts-ignore
                  isInvalid={formik.errors.fName && formik.touched.fName}
                  id="fName"
                >
                  <FormLabel>First Name</FormLabel>
                  <Input
                    onChange={formik.handleChange}
                    //@ts-ignore
                    values={formik.values.fName}
                    size="sm"
                  />
                  <FormErrorMessage>{formik.errors.fName}</FormErrorMessage>
                </FormControl>
                <FormControl
                  //@ts-ignore
                  isInvalid={formik.errors.lName && formik.touched.lName}
                  id="lName"
                >
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    onChange={formik.handleChange}
                    //@ts-ignore
                    values={formik.values.lName}
                    size="sm"
                  />
                  <FormErrorMessage>{formik.errors.lName}</FormErrorMessage>
                </FormControl>
              </HStack>
              <FormControl
                //@ts-ignore
                isInvalid={formik.errors.email && formik.touched.email}
                id="email"
              >
                <FormLabel>Email</FormLabel>
                <Input
                  onChange={formik.handleChange}
                  //@ts-ignore
                  values={formik.values.email}
                  type="email"
                  size="sm"
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl
                //@ts-ignore
                isInvalid={
                  formik.errors.phoneNumber && formik.touched.phoneNumber
                }
                id="phoneNumber"
              >
                <FormLabel>Phone Number</FormLabel>
                <Input
                  onChange={formik.handleChange}
                  //@ts-ignore
                  values={formik.values.phoneNumber}
                  type="tel"
                  size="sm"
                />
                <FormErrorMessage>{formik.errors.phoneNumber}</FormErrorMessage>
              </FormControl>

              <FormControl
                //@ts-ignore
                isInvalid={formik.errors.message && formik.touched.message}
                id="message"
              >
                <FormLabel>Message</FormLabel>
                <Textarea
                  maxH="20"
                  onChange={formik.handleChange}
                  //@ts-ignore
                  values={formik.values.message}
                  size="sm"
                />
                <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
              </FormControl>

              <Button
                _hover={{
                  bg: "#f15e38",
                }}
                _active={{
                  bg: "#f15e38",
                }}
                type="submit"
                w="28"
                bg="#f15e38"
                color="white"
                isLoading={isLoading}
              >
                Send
              </Button>
            </form>
          </Stack>
        </Stack>
      </Container>
      <FooterBar />
    </Box>
  );
}
