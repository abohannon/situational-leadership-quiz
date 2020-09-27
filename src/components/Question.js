import React from "react";
import styled from "styled-components";

const StyledH2 = styled.h2`
  margin: 0;
  padding: 0.5rem 2.5rem 1.5rem 2.5rem;
`;

const Question = ({ content = "" }) => {
  return <StyledH2>{content}</StyledH2>;
};

export default Question;
