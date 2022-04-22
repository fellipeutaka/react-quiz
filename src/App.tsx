import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useState } from "react";
import react from "../assets/react.json";
import Quiz from "./components/Quiz";

const Container = motion(Flex);
const Footer = motion(Flex);

const containerVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  hidden: { y: 50, opacity: 0 },
};

export default function App() {
  const [startedQuiz, setStartedQuiz] = useState(false);

  if (startedQuiz) {
    return <Quiz />;
  }

  return (
    <>
      <Container
        as="main"
        justifyContent="center"
        alignItems="center"
        minH="80vh"
        flexDir="column"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Heading>React Quiz</Heading>
        <Lottie
          animationData={react}
          loop
          style={{ width: "50vw", height: "50vh" }}
        />
        <Button
          onClick={() => setStartedQuiz(true)}
          color="white"
          bgColor="blue.500"
          _hover={{
            bgColor: "blue.600",
          }}
          mt={8}
          px={12}
          py={6}
        >
          Start Quiz
        </Button>
      </Container>
      <Footer
        as="footer"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        gap={4}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Text>
          Developed with
          <span role="img">❤️</span>
          by{" "}
          <Link href="https://github.com/fellipeutaka" isExternal>
            Fellipe Utaka
          </Link>
        </Text>
      </Footer>
    </>
  );
}
