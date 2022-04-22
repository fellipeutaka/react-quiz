import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Lottie from "lottie-react";
import { useState } from "react";
import react from "../assets/react.json";
import Quiz from "./components/Quiz";

export default function App() {
  const [startedQuiz, setStartedQuiz] = useState(false);

  if (startedQuiz) {
    return <Quiz />;
  }

  return (
    <>
      <Flex
        as="main"
        justifyContent="center"
        alignItems="center"
        minH="80vh"
        flexDir="column"
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
      </Flex>
      <Flex
        as="footer"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        gap={4}
      >
        <Text>
          Developed with
          <span role="img">❤️</span>
          by{" "}
          <Link href="https://github.com/fellipeutaka" isExternal>
            Fellipe Utaka
          </Link>
        </Text>
      </Flex>
    </>
  );
}
