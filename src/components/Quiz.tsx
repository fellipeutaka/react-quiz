import {
  Button,
  Divider,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useCallback, useMemo, useState } from "react";
import Results from "./Results";

const Container = motion(Flex);
const containerVariants = {
  visible: { opacity: 1, marginRight: 0, transition: { duration: 0.8 } },
  hidden: { marginRight: 150, opacity: 0 },
};

const questions = [
  {
    questionTitle: "How many developers are there in the world in 2021?",
    answerOptions: [
      { title: "26.8 million", isCorrect: true },
      { title: "28.4 million", isCorrect: false },
      { title: "32.7 million", isCorrect: false },
      { title: "45.3 million", isCorrect: false },
    ],
  },
  {
    questionTitle: "When was JavaScript first released?",
    answerOptions: [
      { title: "April 31, 1996", isCorrect: false },
      { title: "April 24, 1996", isCorrect: false },
      { title: "December 4, 1995", isCorrect: true },
      { title: "January 17, 2002", isCorrect: false },
    ],
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("0");
  const [score, setScore] = useState(0);
  const controls = useAnimation();
  controls.start("visible");

  const finishedQuiz = useMemo(
    () => currentQuestion === questions.length,
    [currentQuestion]
  );

  const nextQuestion = useCallback(() => {
    controls.set("hidden");
    const correctAnswer =
      questions[currentQuestion].answerOptions[Number(currentAnswer)].isCorrect;
    if (correctAnswer) {
      setScore((state) => state + 1);
    }
    setCurrentAnswer("0");
    setCurrentQuestion((state) => state + 1);
    controls.start("visible");
  }, [currentQuestion, currentAnswer, controls]);

  if (finishedQuiz) {
    return <Results score={score} />;
  }

  return (
    <Container
      as="main"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <Flex w="80vw" flexDir="column">
        <Heading as="h1">
          Question {currentQuestion + 1}/{questions.length}
        </Heading>
        <Divider variant="dashed" mt={2} mb={6} />
        <Text fontWeight="semibold" fontSize="xl" mb={32}>
          {questions[currentQuestion].questionTitle}
        </Text>
        <RadioGroup value={currentAnswer} onChange={setCurrentAnswer}>
          <Stack direction="column">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <Radio value={String(index)} key={String(index)}>
                  {answerOption.title}
                </Radio>
              )
            )}
          </Stack>
        </RadioGroup>
        <Button
          onClick={nextQuestion}
          color="white"
          bgColor="blue.500"
          _hover={{
            bgColor: "blue.600",
          }}
          w="max-content"
          alignSelf="center"
          mt={8}
          px={12}
          py={6}
        >
          Next
        </Button>
      </Flex>
    </Container>
  );
}
