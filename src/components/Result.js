import React from "react";
import styled from "styled-components";

const StyledResult = styled.div`
  margin: 0;
  padding: 1.5rem 2.5rem 1.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) =>
    props.correct ? "rgba(86, 198, 169, 0.2)" : "rgba(205, 33, 42, 0.2)"};
`;

const StyledHeader = styled.h2`
  margin: 0;
`;

const StyledButton = styled.button`
  cursor: pointer;
  margin-top: 2rem;
  border: none;
  background: none;
  align-self: flex-end;
  &:hover {
    text-decoration: underline;
  }
`;

const incorrectMessages = [
  "Uh oh. That's incorrect. 😕",
  "Sorry bud. Wrong answer. 🥴",
  "You did attend management training, right? 🧐",
  "Woops.",
  "It's OK, you'll get it next time.",
  "You clicked that on accident, ...right? 🤔",
  "Nope, try again!",
  "Sigh. 😐",
];

const correctMessages = [
  "Wow, you're amazing! 🥳",
  "Nicely done.",
  "So proud 😭",
  "Your future looks promising 🎱",
  "Great job!",
  "You're not cheating, right? 🧐",
  "Yup! 👏",
  "You are definitely management material! 💯",
];

const Result = ({ correct, correctAnswer = "", onClick }) => {
  const random = Math.floor(Math.random() * correctMessages.length);

  return (
    <StyledResult correct={correct}>
      <StyledHeader>
        {correct ? correctMessages[random] : incorrectMessages[random]}
      </StyledHeader>
      <p>The correct answer is {correctAnswer}</p>
      <StyledButton onClick={onClick}>Next question &gt;</StyledButton>
    </StyledResult>
  );
};

export default Result;
