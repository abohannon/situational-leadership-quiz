import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Transition } from "react-transition-group";
import Header from "./components/Header";
import Question from "./components/Question";
import QuestionCount from "./components/QuestionCount";
import AnswerOption from "./components/AnswerOption";
import Result from "./components/Result";
import Sidebar from "./components/Sidebar";
import quizQuestions from "./api/quizQuestions";

const Content = styled.div`
  display: flex;
`;

const StyledUL = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledQuiz = styled.div`
  position: relative;
  max-width: 800px;
  margin: 2.5rem auto;
  background: #fff;
  border-radius: 3px;
  transition: 0.5s;
`;

function App() {
  const [total, setTotal] = useState(0);
  const [quizItem, setQuizItem] = useState(null);
  const [answer, setAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [correct, setCorrect] = useState(null);
  const [streak, setStreak] = useState(0);
  const [balance, setBalance] = useState(100);

  const shuffleQuestions = () => {
    const random = Math.floor(Math.random() * quizQuestions.length);
    if (quizItem && quizQuestions[random].id === quizItem.id) {
      shuffleQuestions();
    } else {
      setQuizItem(quizQuestions[random]);
    }
  };

  const handleResult = () => {
    if (answer === "" || !quizItem) return;

    if (quizItem && quizItem.correctAnswer === answer) {
      setCorrect(true);

      if (streak > 0 && (streak + 1) % 5 === 0) {
        setBalance(balance + 15);
      } else {
        setBalance(balance + 5);
      }
      setStreak(streak + 1);
    } else {
      setCorrect(false);
      setStreak(0);
      setBalance(balance - 25);
    }
  };

  useEffect(() => {
    handleResult();
  }, [answer]);

  useEffect(() => {
    shuffleQuestions();
  }, [total]);

  const handleAnswer = (e) => {
    console.log(e.target.value);
    setAnswer(e.target.value);
    setShowResult(true);
  };

  const goToNextQuestion = () => {
    setTotal(total + 1);
    setShowResult(false);
    setAnswer("");
    setCorrect(null);
  };

  return (
    <div>
      <Header>Situational Leadership Quiz</Header>
      <Content>
        <StyledQuiz>
          <QuestionCount total={total} />
          <Question content={quizItem && quizItem.question} />
          <StyledUL>
            {quizItem &&
              quizItem.answers.map((option, index) => (
                <AnswerOption
                  key={option.content + index}
                  id={option.content}
                  answerContent={option.content}
                  answer={answer}
                  onAnswerSelected={handleAnswer}
                />
              ))}
          </StyledUL>
          {showResult && (
            <Result
              correct={correct}
              correctAnswer={quizItem && quizItem.correctAnswer}
              onClick={goToNextQuestion}
            />
          )}
        </StyledQuiz>
        <Sidebar balance={balance} streak={streak} />
      </Content>
    </div>
  );
}

export default App;
