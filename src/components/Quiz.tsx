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
import { useCallback, useMemo, useState } from "react";
import Results from "./Results";

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

  const finishedQuiz = useMemo(
    () => currentQuestion === questions.length,
    [currentQuestion]
  );

  const nextQuestion = useCallback(() => {
    const correctAnswer =
      questions[currentQuestion].answerOptions[Number(currentAnswer)].isCorrect;
    if (correctAnswer) {
      setScore((state) => state + 1);
    }
    setCurrentAnswer("0");
    setCurrentQuestion((state) => state + 1);
  }, [currentQuestion, currentAnswer]);

  if (finishedQuiz) {
    return <Results score={score} />;
  }

  return (
    <Flex as="main" justifyContent="center" alignItems="center" minH="100vh">
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
    </Flex>
  );
}
