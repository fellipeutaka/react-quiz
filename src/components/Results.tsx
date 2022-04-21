import { Button, Flex, Heading } from "@chakra-ui/react";
import Lottie from "lottie-react";
import { useState } from "react";
import animation from "../../assets/animation.json";

type ResultsProps = {
  score: number;
};

export default function Results({ score }: ResultsProps) {
  const [loading, setLoading] = useState(false);

  function getResults() {
    setLoading(true);
    setTimeout(() => {
      window.location.href = "https://youtu.be/dQw4w9WgXcQ";
      setLoading(false);
    }, 1500);
  }

  return (
    <Flex
      as="main"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      minH="100vh"
      gap={6}
    >
      <Heading as="h1">Congragulations!</Heading>
      <Heading as="h2">You got {score} answers right</Heading>
      <Lottie
        animationData={animation}
        loop
        style={{ width: "50vw", height: "50vh" }}
      />
      <Button
        colorScheme="blue"
        onClick={getResults}
        isLoading={loading}
        px={12}
        py={6}
      >
        Get my full results
      </Button>
    </Flex>
  );
}