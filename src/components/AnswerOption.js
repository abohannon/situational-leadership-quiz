import React from "react";
import styled from "styled-components";
import iconCheck from "../svg/icon-check.svg";

const Option = styled.li`
  position: relative;
  border-top: 1px solid #eee;
  box-sizing: border-box;
  &:hover {
    background-color: #eefbfe;
  }
`;

const Input = styled.input`
  position: absolute;
  width: auto;
  opacity: 0;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;

const InputLabel = styled.label`
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  position: relative;
  width: 100%;
  margin: 0;
  padding: 1.5rem 2.5rem 1.5rem 5rem;
  font-size: 16px;
  line-height: 1.5;

  ${Input} ~ &:before {
    position: absolute;
    top: 20px;
    left: 38px;
    width: 28px;
    height: 28px;
    content: "";
    display: inline-block;
    vertical-align: middle;
    background: #fff;
    border: 1px solid #bbb;
    border-radius: 50%;
    transition: all 0.3s;
  }

  ${Input}:checked ~ &:before {
    content: "";
    background: #fa7a35 url(${iconCheck}) no-repeat;
    background-size: 27px;
    border-color: #fa7a35;
  }
`;

const AnswerOption = ({ id, answer, onAnswerSelected, answerContent }) => {
  return (
    <Option>
      <Input
        type="radio"
        name="radioGroup"
        checked={answerContent === answer}
        id={id}
        value={answerContent}
        onChange={onAnswerSelected}
      />
      <InputLabel htmlFor={id}>{answerContent}</InputLabel>
    </Option>
  );
};

export default AnswerOption;
