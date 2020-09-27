import React from "react";
import styled from "styled-components";

const StyledQuestionCount = styled.div`
  padding: 1.5rem 2.5rem 0;
  font-size: 14px;
`;

const QuestionCount = ({ total }) => {
  return <StyledQuestionCount>Questions answered: {total}</StyledQuestionCount>;
};

export default QuestionCount;
